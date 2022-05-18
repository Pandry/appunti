# Il linguaggio L
Il linguaggio L è un linguaggio teorico e usato solo per scopi educativi.  

Questo lo tratterò poi, nel frattempo allego la pagina di appunti:  
[Linguaggio L](assets/l.pdf)

## BNF

## Semantica statica
### Espressioni
#### Assiomi
- $\varnothing \vdash_e i: Int$  
    Questo assioma ci indica che senza un ambiente, possiamo dire che un'espressione fatta da simbolo appartenente alla categoria sintattica degli interi, è di tipo `Int`  
    Ad esempio, 5 è un intero, e non ci serve un'ambiente per dirlo
- $\varnothing \vdash_e d: Double$  
- $\varnothing \vdash_e b: Bool$  
- $\varnothing \vdash_e s: String$  

#### Regole

##### R1

$$
(R1) \frac 
{(\Delta (Id) = \tau \lor \Delta (Id) = \tau Loc)}
{\Delta \vdash_e Id: \tau}
$$

Questa regola di inferenza si può leggere come:  
Se, dato un ambiente, possiamo trovare l'identificatore nell'ambiente e questo identificatore ha tipo $\tau$ o $\tau Loc$, allora l'identificatore ha tipo $\tau$

##### R2

$$
(R2) \frac 
{\Delta \vdash_e E_1 : \tau_1, \operatorname{uop}: \tau_1 \to \tau}
{\Delta \vdash_e \operatorname{uop} E_1: \tau}
$$

Se, partendo dall'ambiente $\Delta$, l'espressione è di tipo $\tau_1$ e l'operatore unario prende un tipo $\tau_1$ e lo trasforma in $\tau$, l'espressione `uop E1` è di tipo $\tau$.  
(Notare che `uop` è la categoria sintattica degli operatori unari, come ad esempio `!`, ovvero la negazione)  

??? example "Esempio"
    Possiamo già fare un'esempio con queste due regole appena viste:  
    Prendendo un ambiente con una variabile x intera (quindi $\Delta = [(x, Int)]$) possiamo già valutare `-x`:  

    $$
    \frac 
    { \frac
        {\Delta(x) = Int}
        {\Delta \vdash_e x:Int}, 
        -: Int \to Int}
    {\Delta \vdash_e -x: Int}
    $$

    In questo esempio, per valutare l'espressione `-x` (e quindi determinarne il tipo), dividiamo innanzitutto l'espressione (quindi valutando il tipo dell'espressione `x` ed assicurandosi che sia compatibile con l'operatore unario `-`)  
    Ci assicuriamo quindi che x sia presente nell'ambiente, e ne determiniamo che il tipo è `Int`.  
    Procediamo quindi assicurandoci che l'operatore unario `-` prenda in input un Int e restituisca un int, e così è.  
    Possiamo dunque dire che l'espressione `-x` è di tipo Int.  

##### R3

$$
(R3) \frac 
{\Delta \vdash_e E_1: \tau_1, \; \Delta \vdash_e E_2: \tau_2, \; \operatorname{bop}: \tau_1 \times \tau_2 \to \tau}
{\Delta \vdash_e \tau_1 \ \operatorname{bop} \ \tau_2:\tau }
$$

Questa regola è molto simile alla precedente, con la differenza che stavolta valutiamo anche una seconda espressione $E_2$, essendo `bop` la categoria sintattica degli operatori binari, e ci assicuriamo quindi che i due tipi (delle due espressioni $E_1$ ed $E_2$) siano compatibili tra di loro.  

##### R4

$$
(R4) \frac 
{\Delta \vdash_e E:\tau}
{\Delta \vdash_e (E): \tau}
$$

Questa regola ci permette di "eliminare" le parentesi che racchiudono un'espressione, permettendoci di valutare l'espressione.  

### Comandi
<!-- L13 -->
I comandi (che ricordiamo, si _Eseguono_) non hanno tipi, in quanto i comandi non rappresentano un valore.  

#### Assiomi
Tra i comandi troviamo un solo assioma:  
$\varnothing \vdash_c nil$  

Che ci dice che da un ambiente vuoto non c'è nulla che possiamo concludere

#### Regole

##### R5

$$
(R5) \frac 
{\Delta(Id) = \tau Loc, \; \Delta \vdash_e E:\tau}
{\Delta \vdash_c Id=E}
$$

Questa regola ci dice che, per assegnare un'espressione ad una variabile, devo assicurarmi che il tipo dell'espressione e quello della variabile sono concordi  

##### R7

$$
(R7) \frac 
{\Delta \vdash_e E: Bool, \; \Delta \vdash_c C_1, \; \Delta \vdash_c C_2}
{if\ (E)\{C_1\}\ else\ \{C_2\}}
$$

Questa regola può essere un pelo più complicata da decodificare; Partendo quindi dalle assunzioni (e tenendo presente che è una clausola if):  
Se l'espressione E è ben formata ed ha tipo Bool, il comando $C_1$ è ben formato ed il comando $C_2$ è ben formato, allora l'If è ben formato (sempre in termini di tipi).  

##### R8

$$
(R8) \frac 
{\Delta \vdash_e E:Bool, \; \Delta \vdash_c C}
{\Delta \vdash_c while(E){C}}
$$

Come nell'if, questa formula ci permette di dire che il comando while è ben formato se l'espressione E è ben formata ed ha tipo Bool, e se il comando C (che è il corpo del while) è ben formato.  

Teniamo a mente che questo controllo non valuta se il while termina, questa è semantica statica, quindi stiamo solo controllando i tipi.  

##### R9

$$
(R9) \frac
{\Delta \vdash_d D: \Delta', \Delta[\Delta'] \vdash_c C}
{\Delta \vdash_c D;C}
$$

Anche questa regola può essere un attimo più complicata da leggere, quindi anche in questo caso partiamo dalle premesse, tenendo a mente che stiamo valutando un comando (che è composto da una dichiarazione D ed un comando C):  
La prima premessa ci dice che se la dichiarazione è ben formata, la dichiarazione restituisce un ambiente $\Delta'$, ovvero un ambiente in cui troviamo solamente la dichiarazione appena fatta.  
In questo caso, procediamo quindi ad **estendere** l'ambiente $\Delta$ con $\Delta'$, e con l'ambiente risultante (che non è altro che una concatenazione di funzioni) procediamo con l'esecuzione del comando C. 
Se il comando C è valido (e quindi ben formato), la dichiarazione `D;C` è ben formata.  

L'estensione dell'ambiente possiamo vederla in questo modo:  
$\Delta[\Delta'](x) = \begin{cases}
\Delta'(x) & \text{ se } \Delta'(x) \text{ è definito} \\
\Delta(x)  & \text{ altrimenti}
\end{cases}$

Possiamo quindi vedere dalla formula che l'estensione NON sovrascrive l'ambiente, bensì **oscura** (ove necessario) degli identificatori

??? example "Esempio"
    se definiamo in $\Delta$ un identificatore X e poi lo ridefiniamo in $\Delta'$, allora quando andremo a "risolvere" l'identificatore X nell'ambiente $\Delta[\Delta']$, risolveremo X per l'ambiente $\Delta'$, che è il più "recente", oscurando di fatto l'identificatore nell'ambiente $\Delta$)  
    Questo ci fa inoltre capire che nel linguaggio L è possibile ridichiarare le variabili.  

Quindi, ricapitolando, se da $\Delta$ è possibile associare a D l'ambiente statico $\Delta'$, E da $\Delta$ esteso con i legami di $\Delta'$ posso dimostrare che C è ben formato, il comando `D;C` è ben formato.  

### Dichiarazioni

Una dichiarazione è ben formata se a partire dall'ambiente statico $\Delta$ è possibile associare un ambiente statico che contiene i legami per i nomi definiti in D.  

Notare che il "risultato" delle dichiarazioni è espresso dopo i due punti `:`

#### Assiomi

- $\varnothing \vdash_d nil: \varnothing$

#### Regole

##### R10

$$
(R10) \frac
{\Delta \vdash_e E:\tau, \; T == \tau}
{\Delta \vdash_d const \ Id:T = E: [(Id, \tau)]}
$$

In questa prima dichiarazione di costante, possiamo vedere come il controllo sia basato sull'assicurarsi che il tipo dell'identificatore (o _variabile_, in questo caso) sia lo stesso del tipo dell'espressione.  
Quindi quando viene dichiara una costante, è possibile dire che è ben formata quando l'espressione è ben formata ed il tipo di $\tau$ è di tipo T e viene prodotto l'ambiente $\Delta'$, rappresentato da $[(Id, \tau)]$

##### R11

$$
(R11) \frac
{\Delta \vdash_e E: \tau, \ T == \tau}
{\Delta \vdash_d var Id:T = E: [(Id, \tau Loc)]}
$$

Possiamo vedere che per la variabile vale lo stesso discorso della costante appena vista, con l'unica differenza che una variabile ha tipo $\tau Loc$, dove `Loc` identifica che il tipo è presente in una certa locazione di memoria, in quanto è una variabile e non una costante

##### R12 

$$
(R12) \frac
{\Delta \vdash_d D_1: \Delta', \; \Delta[\Delta'] \vdash_d D_2: \Delta''}
{\Delta \vdash_d D_1;D_2: \Delta'[\Delta'']}
$$

Quest'ultima regola ci permette di validare due dichiarazioni consecutive.  
La regola si può leggere in questo modo:  
Se da $\Delta$, $D_1$ è in grado di generare l'ambiente statico $\Delta'$ e da $\Delta$ esteso con $\Delta'$, $D_2$ genera l'ambiente $\Delta''$,  
Allora da $\Delta$, l'espressione genera l'ambiente statico $\Delta'$ esteso con $\Delta''$ e la dichiarazione è ben formata

---

??? example "Esempio di Semantica statica"
    Possiamo vedere qui di seguito l'applicazione delle regole sopra definite, partendo dalle due dichiarazioni `var x:Int = 3; var y:Int = x`

    $$
    (R12) \frac
    {(R5) \frac
        {\varnothing \vdash_e 3:Int, Int == IntLoc}
        {\varnothing \vdash_d var\ x:Int = 3: \Delta'}
    (R5) \frac
        {(R1) \frac
            {\varnothing[\Delta'](x) = IntLoc}
            {\varnothing[\Delta'] \vdash_e x:Int},
            \varnothing [\Delta'] \vdash_d y:Int = x: \Delta''
        }
        {\varnothing[\Delta'] \vdash_d var\ y:Int=x: \Delta''}
    }
    {\varnothing \vdash_d var\ x:Int=3;var\ y:Int=x;}
    $$

    Avremo quindi che $\Delta'=[(x, IntLoc)]$ e $\Delta''=[(y, IntLoc)]$  

    In questo esempio abbiamo applicato la regola R12 per dividere le due dichiarazioni.  
    Separatamente poi, per la prima dichiarazione abbiamo applicato la R5, (seguita dal primo assioma che abbiamo visto, che ci dice che 3 è un Intero)  
    Per la seconda dichiarazione, abbiamo applicato la regola R5 come prima, con la differenza che stavolta l'espressione non era un numero, ma un'identificatore. Abbiamo quindi risolto l'identificatore contenuto nell'espressione (x) grazie all'ambiente $\Delta$.  
    Una volta verificato che espressione e variabile erano dello stesso tipo, è possibile dire che il comando è corretto. 

### Semantica statica delle funzioni


#### FS1

$$
(FS1) \dfrac 
{\Delta \vdash_e E:\tau}
{\Delta \vdash_c \text{return } E}
$$

Se da $\Delta$ è possibile associare il tipo $\tau$ all'espressione E, il `return` ha tipo E.  

#### FS2

$$
(FS2) \dfrac
{from: \Delta_0, \Delta[\Delta_0] \vdash_c C; \text{return }E, \Delta[\Delta'] \vdash_e E:\tau}
{\Delta \vdash_d \text{func } Id(form) \to \tau \{C;\text{return }E\}: \Tau(Id,\tau(form) \to \tau)}
$$

Dove la funzione $\Tau$ è definita così:  

$\Tau(form) = \begin{cases}
\Tau(nil) & = nil \\
\Tau(const ~ Id:\tau, form') & = \tau, \Tau(form') \\
\Tau(var ~ Id: \tau, form') & = \tau, \Tau(form')
\end{cases}$

Quindi:  

$\Tau(form) = \Tau(var ~ id:\tau = E; form') = \tau, \Tau(form')$

form è una lista di formali (da vedere come $[H,T]$, testa (H) e coda (T) della lista)  
Questa formula ci permette di "srotolare" la lista, valutando il tipo di ogni parametro (grazie alla funzione $\Tau$) in maniera ricorsiva.  
Notare che nella definizione di $\Tau$, il tipo nil è usato solo internamente, non fa parte del linguaggio (non esiste un tipo nil).  

Questa regola si compone quindi in 3 parti:  

1. Srotolando i formali, questi formano un ambiente $\Delta'$
2. Con $\Delta'$, controlliamo se il corpo della funzione (ed il return) sono ben formati
3. Se, estendendo l'ambiente $\Delta$ con $\Delta'$ l'espressione di return è ben formata e di tipo $\tau$

Allora la dichiarazione di funzione è ben formata, e nell'ambiente si aggiunge la coppia _Nome funzione_, _lista dei formali e tipo di ritorno della funzione_ ($\Tau(form) \to \tau$)

#### FS3

(FS3) $nil: \varnothing$, $\dfrac {form: \Delta_0, Id \notin \Delta_0}{const ~ Id:\tau, form: \Delta_0[(Id, \tau)]}$,  $\quad \dfrac {form: \Delta_0, Id \notin \Delta_0}{var ~ Id:\tau, form: \Delta_0[(Id, \tau Loc)]}$

Questa regola serve per assegnare i tipi ai signoli parametri formali che vengono valutati dalla regola FS2.
In questo caso è necessario controllare che il nome dell'identificatore non sia già usato nella lista dei formali (altrimenti sarebbe alquanto ambiguo l'uso dell'identificatore nel corpo della funzione)

#### FS4

$$
(FS4) \dfrac 
{\Delta \vdash_{ae} ae:aet, \Delta(Id) = aet \to \tau}
{\Delta \vdash_e Id(ae): \tau}
$$

$\begin{cases}
\Delta \vdash_{ae} nil \\
\dfrac{\Delta \vdash_e E:\tau, \Delta \vdash_{ae}:aet}{\Delta \vdash_{ae}E, ae:\tau, aet}
\end{cases}$

Se la lista degli attuali ae corrisponde ad una lista di tipi (aet) e nell'ambiente ho una lista di tipi (uguale ad aet) che restituiscono tau, allora l'espressione è ben formata

### Semantica statica delle funzioni ricorsive
<!--L56-->

#### RS1

$$
(RS1) \dfrac
{\Delta[\Delta'_{|I_0}]\vdash D:\Delta'}
{\Delta \vdash_{rec} D:\Delta'},
I_0 = FI(D) \cap BI(D)
$$

Con $\Delta'=[(fact,Int \to Int)] = \Delta_{|I_0}'$

Estendendo $\Delta$ con l'intersezione di intersezione tra identificatori liberi e legati ($I_0) si può dire che la dichiarazione è ben formata.  
In questo caso, il nome della funzione è legato, mentre un'eventuale riferimento all'interno del corpo della funzione sarebbe libero.  
La cosa si può semplificare con questa regola:  

$$
(RS1') \dfrac
{\vdash_d D:\Delta}
{\vdash_d rec ~ D:\Delta}
$$

Questa regola (che richiama FS2') ci viene in contro se la funzione non ha dichiarazioni ricorsive al suo interno

$$
(RS1'')\dfrac
{\vdash_d D:\Delta', \Delta[\Delta'_{|I_0}] \vdash_d D}
{\Delta \vdash_d rec ~ D},
I_0 = FI(D) \cap BI(D)
$$

In questo caso FI è una funzione che individua gli identificatori liberi.  
$FI(func) = FI(C) - FI(form)$  
Che significa che gli identificatori liberi di uan funzione sono gli identificatori liberi del corpo meno gli identificatori liberi dei formali (ovvero nessuno, essendo tutti legati)  

Richiama RS1'


#### RS2

$$
(RS2'') \dfrac {FS' | FS2''}{\Delta \vdash_d rec ~ D }
$$

#### FS2(?)

$$
(FS2) \dfrac
{form:\Delta_0,\Delta[\Delta_0]\vdash_c var ~ res:\tau=E;C;return ~ res, \Delta[\Delta_0][(res,\tau Loc)] \vdash_e E:\tau}
{\Delta \vdash_d func ~ Id(form) \to \tau \{ var ~ res:\tau;C;return ~ res\}: [(Id, \Tau(form) \to \tau )]}
$$

Per semplificare le funzioni, assumiamo che la funzione inizi con una dichiarazione di variabile che sarà il valore che verrà restituito

## Semantica dinamica
In L un identificatore contiene lettere, cifre e `_`. Inoltre non inizia con una cifra.  

### Semantica dinamica delle espressioni
Le regole che seguono ci permettono di definire un modello di valutazione delle espressioni

#### ID1

$$
(Id_1) \dfrac
{\rho(Id)=v \lor (\rho(Id)=L \in Loc \land \sigma(L)=V)}
{\anglebr{Id, \rho, \sigma} \to_e V}
$$

Partiamo quindi dal controllare le premesse: se da $\rho$ posso associare ad Id un valore, o se da $\rho$ posso associare ad Id una locazione L e alla locazione L è memorizzato un valore V  
Allora da $\rho$ e $\sigma$, Id viene valutato v in un passo di valutazione  

#### UOP1

$$
(uop1) \dfrac
{\anglebr{E, \rho, \sigma} \to_e \anglebr{E', \rho, \sigma}}
{\anglebr{uop ~ E, \rho, \sigma} \to_e \anglebr{uop ~ E', \rho, \sigma}}
$$\

Se in un passo di valuazione, a partire da $\rho$ e $\sigma$, E si trasforma in E',  
da $\rho$ e $\sigma$ `uop E` si trasforma in `uop E'`in un passo di valutazione.  

#### UOP2
$$
(uop2) \anglebr{uop ~ v, \rho, \sigma} \to_e v'= uop ~ v
$$

Dopo aver valutato ripetutamente v mediante uop1, si raggiunge $uop ~ v$ (ovvero il membro a destra della formula) e si può concludere la valutazione.  

#### BOP
$$
(bop1) \dfrac
{\anglebr{E_1 ~ bop ~ E_2, \rho, \sigma} \to_e \anglebr{E^'_1 ~ bop ~ E_2, \rho, \sigma}}
{\anglebr{E_1 ~ bop ~ E_2, \rho, \sigma} \to_e \anglebr{E^'_1 ~ bop ~ E_2, \rho, \sigma}}
$$

$$
(bop2) \dfrac
{\anglebr{E_1 ~ bop ~ E_2, \rho, \sigma} \to_e \anglebr{E_1 ~ bop ~ E_2^', \rho, \sigma}}
{\anglebr{E_1 ~ bop ~ E_2, \rho, \sigma} \to_e \anglebr{E_1 ~ bop ~ E_2^', \rho, \sigma}}
$$

$$
(bop3) \anglebr{v_1 ~ bop ~ v_2, \rho, \sigma} \to_e v=v_1 ~ bop ~ v_2
$$

Dopo aver valutato correttamente entrambi i membri delle espressioni (con rispettivamente BOP1 e BOP2), si raggiunge la configurazione $v_1 ~ bop ~ v_2$, che si può valutare a v

### Semantica dinamica dei comandi
#### ID2

$$
(id2) \dfrac
{\anglebr{E, \rho, \sigma} \to_e^\star v}
{\anglebr{Id = E, \rho, \sigma}\to_c \anglebr{Id=v, \rho, \sigma}}
$$

Se, partendo da $\rho$ e $\sigma$, l'espressione E (dopo un certo numero di passi) viene valutata ad un valore V  
L'assegnamento può essere riscritto come `Id=v` (senza toccare $\rho$ e $\sigma$, dato che la valutazione non li modifica).  

#### ID3

$$
(id3) \anglebr{Id=v, \rho, \sigma} \to_e \sigma[\rho(Id)=v]
$$

L'esecuzione dell'assegnamento lascia inalterato l'ambiente, modificando solo la locazione di memoria $\rho(Id)$ con v

#### SEQ

$$
(seq1) \dfrac
{\anglebr{C_1, \rho, \sigma} \to_c \anglebr{C^'_1, \rho, \sigma^'}}
{\anglebr{C_1;C_2, \rho, \sigma} \to_c \anglebr{C^'_1;C_2, \rho, \sigma^'}}
$$

Se da $\rho$ e $\sigma$ un passo di $C_1$ lo trasforma in $C^'_1$ con la nuova configurazione della memoria $\theta^'$  
Allora $C_1;C_2$ può essere riscritto come $C^'_1;C_2$ con configurazione della memoria $\sigma^'$  

$$
(seq2) \dfrac
{\anglebr{C_1, \rho, \sigma} \to_c \sigma^'}
{\anglebr{C_1;C_2, \rho, \sigma} \to_c \anglebr{C_2, \rho, \sigma^'}}
$$

#### IF

$$
(if1) \dfrac
{\anglebr{E, \rho, \sigma} \to_e^\star true}
{\anglebr{if(E)\{C_1\}else\{C_2\}, \rho, \sigma} \to_c \anglebr{C_1, \rho, \sigma}}
$$

$$
(if2) \dfrac
{\anglebr{E, \rho, \sigma} \to_e^\star false}
{\anglebr{if(E)\{C_1\}else\{C_2\}, \rho, \sigma} \to_c \anglebr{C_2, \rho, \sigma}}
$$

A seconda di come viene valutata l'espressione (true o false) si eseguono i rispettivi comandi ($C_1$ o $C_2$) con la stessa memoria con cui si è iniziata l'esecuzione dell'if.  

#### REP1

$$
(rep1) \dfrac
{\anglebr{E, \rho, \sigma} \to_e^\star true}
{\anglebr{while(E)\{C\}, \rho, \sigma} \to_c \anglebr{C;while(E)\{C\}, \rho, \sigma}}
$$

Se l'espressione viene valutata true,  
si esegue il corpo C del while e poi si torna ad eseguire nuovamente il while, per valutare se sia il caso di eseguire una nuova operazione

#### REP2

$$
(rep2) \dfrac
{\anglebr{E, \rho, \sigma} \to_e^\star false}
{\anglebr{while(E)\{C\}, \rho, \sigma} \to \sigma}
$$

Se la guardia viene valutata false, non si deve eseguire il corpo C  
E si può restituire la memoria in cui è eseguito il while.  

#### B1

$$
(b1) \dfrac
{\anglebr{D, \rho, \sigma} \to_d^\star \anglebr{\rho', \sigma'}}
{\anglebr{D;C, \rho, \sigma} \to_c \anglebr{C, \rho[\rho'], \sigma[\sigma']}}
$$

Se la dichiarazione genere un nuovo ambiente e memoria  
Allora il comando C si esegue nell'ambiente e nella memoria correnti, estesi con quelli generati da D

### Semantica dinamica delle dichiarazioni
<!-- L38 -->
#### CONST1
$$
(const1) \dfrac
{\anglebr{E, \rho, \sigma} \to_e^\star V}
{\anglebr{const ~ Id:T=E, \rho, \sigma} \to_d \anglebr{[(Id,v)], \sigma}}
$$

Se da $\rho$ e $\sigma$ in un certo numero di passi (da qui la stellina), l'espressione E viene valutata ad un valore v  
La dichiarazione di costante associa nell'ambiente generato ($[(Id,v)]$) l'identificatore Id con v, lasciando inalterata la memoria.  

#### VAR1

$$
(var1) \dfrac
{\anglebr{E, \rho, \sigma} \to_e^\star v}
{\anglebr{var ~ Id:T=E, \rho, \sigma} \to_d \anglebr{[Id, newL], [(L,v)]}}
$$

Se in un certo numero di passi, l'espressione viene valutata ad un valore v  
La dichiarazione (`var Id:T=E`) associa all'ambiente generato l'identificatore ad una nuova locazione `newL` (mai usata prima) ed aggiorna la memoria scrivendo il valore v alla locazione appena creata. 

#### DD1

$$
(dd1) \dfrac
{\anglebr{D_1, \rho, \sigma} \to_d \anglebr{D'_1, \rho', \sigma'}}
{\anglebr{D_1;D_2, \rho, \sigma} \to_d \anglebr{D'_1; D_2, \rho', \sigma'}}
$$

Se, partendo da $\rho$ e $\sigma$, la dichiarazione $D_1$ conduce allo stato $\anglebr{D'_1, \rho, \sigma}$  
Allora la dichiarazione sequenziale conduce a $D'_1$, con $\rho'$ e $\sigma'$  

#### DD2

$$
(dd2) \dfrac
{\anglebr{D_2, \rho[\textcolor{cyan}{\rho_1}], \sigma} \to_d \anglebr{D'_2, \rho[\textcolor{cyan}{\rho_1}]', \sigma'}}
{\anglebr{\textcolor{cyan}{\rho_1};D_2, \rho[\rho_1], \sigma} \to_d \anglebr{\rho_1;D'_2, \rho[\textcolor{cyan}{\rho_1}]', \sigma' }}
$$

Continuando dalla regola precedente, se da $\rho$ e $\sigma$, $D_2$ conduce a $D'_2$  
La dichiarazione può effettuare lo stesso passo per $D_2$  

La sintassi del nostro linguaggio non permette di scrivere un ambiente nel codice (quello evidenziato in ciano).  
Facciamo questa forzatura per permettere al compilatore di funzione.  
L'utente non può comunque inserire un ambiente nel codice sorgente, è una forzatura adottabile solo dal compilatore.  

#### DD3

$$
(dd3) \anglebr{\rho_1;\rho_2, \rho, \sigma} \to_d \anglebr{\rho_1[\rho_2], \sigma}
$$

Anche questa formula riprende dalla precedente e ci permette di estendere i due ambienti derivati dalle due dichiarazioni in sequenza.  
