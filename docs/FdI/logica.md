## La logica
La logica serve per, date certe premesse, verificare la validità di un certo enunciato.  
Facciamo uso della logica per stabilire precisamente il significato degli enunciati matematici, e quindi determinare le argomentazioni valide.  
Questo tipo di distinzione ci permette di **capire se una dimostrazione è corretta** oppure no.  
Questo signifiva che la logica non ci permette di determinare delle validità assolute, ma solo in funzione delle premesse.  
Possiamo inoltre dimostrare degli enunciati basandoci sulle dimostrazioni logiche effettuate in precedenza, creando una sorta di "struttura di dimostrazioni". Questo genere di dimostrazioni si dicono _conseguenze logiche_ delle premesse.  

!!! definition "Logiche classiche"
    Chiamiamo **Logiche classiche** quelle logiche che trattano enunciati che possono essere solo o veri o falsi.  
    (Ovvero, formalmente, enunciati che possono assumere uno e solo uno dei valori parte dell'insieme $Bool = \{ \textbf t, \textbf f\}$.)

Abbiamo parlato di proposizioni o enunciati, quindi cerchiamo di capire meglio di cosa si tratta: definiamo proposizione un'affermazione (possibilmente non ambigua e contraddittoria).

!!! abstract "Definizione di Proposizione"
    Una proposizione è un _enunciato dichiarativo_ (nel senso che dichiara qualcosa, anche in un linguaggio naturale _(come l'italiano)_).  
    Questa poposizione deve soddisfare due principi:
    - Principio del terzo escluso: O la proposizione è vera, o è falsa, non ci sono altre possbilità.
    - Principio di non contraddorietà: La proposizioe non può essere contemporaneamente vera e falsa.  

È possibile rappresentare astrattamente una proposizione semplice (come ad esempio _ora sta piovendo_).  
Notare inoltre che le proposizioni si possono rappresentare astrattamente con le lettere maiuscole ($A = \text{le biciclette possono volare.}$).  

## Il calcolo proposizionale
Il calcolo proposizionale (o _logica proposizionale_) si trova alla base delle logiche classiche e fornisce un insieme di regole di sintassi e semantica (come scrivere e leggere le formule proposizionali) 

### Composizione di proposizioni
Più proposizioni sepmplici possono essere combinate insieme per formare proposizioni più complesse.  
Queste composizioni sono rese possibili grazie ai **connettivi logici** (come _and_, _or_ e _not_), che vengono considerati _operatori algebrici_.  

### Sintassi del calcolo proposizionale

Il calcolo proposizionale fa uso di una grammatica ben specifica, formata dai simboli proposizionali (i simboli in un insieme che contiene le nostre proposizioni) il cui risultato viene definito _formula proposizionale_.

!!! abstract "Sintassi del calcolo proposizionale"
    Preso un insieme di simboli proposizionali (che rappresentano proposizioni) $X = \{A,B,C,..\}$,  
    il linguaggio (generato dalla categoria sintattica $\langle Prop \rangle$) è l'insieme delle _formule proposizionali_.  

Si tende ad indicare con i simboli A, B, C, ... i simboli proposizionali, mentre invece le lettere P, Q, R sono più utilizzate per indicare le formule proposizionali.  

!!! definition "Grammatica del calcolo proposizionale"
    $\: \anglebr {Prop} \leadsto  \anglebr {Atom} | \neg  \anglebr {Atom} |  \anglebr {Prop}  \anglebr {OpB}  \anglebr {Prop}$  
    $\anglebr {Atom} \leadsto \textbf T | \textbf F | \anglebr X | ( \anglebr {Prop})$ - Questa regola ci permette di genere le formule atomiche  
    $\anglebr {OpB} \leadsto \land | \lor | \Rightarrow | \Leftarrow | \Leftrightarrow$ - Questa regola ci permette di generare i connettivi logici  
    $\quad \:  \anglebr X \leadsto A | B | C | \dots$ - Questa regola indica i simboli proposizionali  

#### I connettivi logici

Per quanto riguarda i connettivi logici sopra descritti, rappresentano i più comuni e possiamo osservare il loro significato :  

| Simbolo  (Connettivo logico) | Nome                | Utilizzo | Lettura |
|:----------------------------:|---------------------|----------|----------|
| $\neg$                       | Negazione           | $\neg P$ | "Non P"<br/> "Not P"<br/> "Non è vero che P vale" |
| $\land$                      | Congiunzione        | $P \land Q$ | "P e Q"<br/> "P and Q"<br/> "P e anche Q"|
| $\lor$                       | Discongiunzione     | $P \lor Q$ | "P o Q"<br/> "P or Q"<br/> "P oppure Q" |
| $\Rightarrow$                | Implicazione        | $P \Rightarrow Q$ | "se P allora Q"<br/> "P implica Q"<br/> "P solo se Q"<br/> "P è condizione sufficiente per Q"|
| $\Leftarrow$                 | Conseguenza         | $P \Leftarrow Q$ | "P è conseguenza di Q"<br/> "P se Q"<br/> "P if Q"<br/> "P è condizione necessaria per Q" |
| $\Leftrightarrow$            | Doppia implicazione | $P \Leftrightarrow Q$ | "P sse Q"<br/> "P se e solo se Q"<br/> "P iff Q"<br/> "P è condizione necessaria e sufficiente per Q" | 

Nel caso dell'implicazione, $P$ assume il nome di _premessa_, mentre $Q$ quello di _conseguenza_ o _conclusione_.  

Vale inoltre la pena notare che $P \Leftarrow Q$ è logicamente equivalente a $Q \Rightarrow P$.

#### La formalizzazione di proposizioni
Per _formalizzare_ si intende il processo di estrarre da una proposizione in linguaggio naturale (come italiano o inglese) una una formula di calcolo proposizionale che ha la stessa struttura logica

!!! example "Esempio di formalizzazione"
    Avendo la frase "_Piove e fa freddo_", possiamo da questa proposizione estrarre due proposizioni elementari: $P=$ "_Piove_" e $Fr=$ "_fa freddo_".  
    La proposizione risultante sarà quindi $P \land Fr$

### La semantica 
La semantica di una proposizione (il suo valore) si può calcolare per induzione sul suo albero di derivazione.  
Il risultato in genere però non è assoluto ma dipende da un'_interpretazione_.  

!!! abstract "Definizione di interpretazione"
    Con interpretazione si intende una funzione $\mathcal I : X \rightarrow \{t,f\}$ che ci permetta di assegnare un valore di verità ad ogni simbolo proposizionale.

Possiamo pensare ad un'interpretazione in una proposizione composta (che definiremo a breve) come ad funzione che mappa ogni simbolo proposizionale ad un valore.  
Ad esempio, avendo i simboli $A$, $B$ e $C$, l'interpretazione ci permette di definire i corrispettivi valori: $A=t$, $B=f$ e $C=t$.  

---

Per comporre le proposizioni semplici, come abbiamo detto prima, abbiamo bisogno dei connettivi logici, che abbiamo visto prima, ma senza vedere la loro semantica.  
I connettivi logici possono essere visti come funzioni $Bool \times Bool \rightarrow Bool$.  

!!! abstract "Definizione dei connettivi logici"
    Possiamo definire i connettivi logici attraverso le loro tabelle di verità.  
    Possiamo iniziare vedendo la tabella di verità della negazione ($\neg$):  

    | $x$ | $\neg x$ |
    |:---:|:--------:|
    |  f  |    t     |
    |  t  |    f     |
    
    E poi continuare con gli altri operatori:

    | $x$  $y$ | $x \land y$ | $x \lor y$ | $x \Rightarrow y$ | $x \Leftarrow y$ | $x \Leftrightarrow y$ |
    |:--------:|:-----------:|:----------:|:-----------------:|:----------------:|:---------------------:|
    | $\mathbf f$  $\mathbf f$ | $\mathbf f$ | $\mathbf f$ | $\mathbf t$ | $\mathbf t$ | $\mathbf t$ | 
    | $\mathbf f$  $\mathbf t$ | $\mathbf f$ | $\mathbf t$ | $\mathbf f$ | $\mathbf f$ | $\mathbf f$ | 
    | $\mathbf t$  $\mathbf f$ | $\mathbf f$ | $\mathbf t$ | $\mathbf t$ | $\mathbf t$ | $\mathbf t$ | 
    | $\mathbf t$  $\mathbf t$ | $\mathbf t$ | $\mathbf t$ | $\mathbf f$ | $\mathbf t$ | $\mathbf f$ | 

    Vale la pena notare che nel caso dell'implicazione, se la premessa è falsa, la proposizione composta sarà vera in quanto la regola non si applicherà.  
    Per quanto invece riguarda la doppia implicazione, questa richiede che entrambe le proposizioni (da entrambe le parti del segno) siano vere per poter essere vera.

Ora che abbiano definito formalmente gli operatori, possiamo introdurre come calcolare formalmente la semantica di una proposizione complessa.  
Questo perché dobbiamo associare una proposizione con un'interpretazione, che ci possa permettere di stabilire se la più piccola proposizione ha come valore (nel nostro caso) vero o falso.  

!!! abstract "Semantica del calcolo proposizionale"
    Data un'interpretazione $\mathcal I : X \rightarrow \{t,f\}$, il valore **rispetto ad $\mathcal I$** di una formula proposizionale è dato dalla funzione $\llbracket \_ \rrbracket _\mathcal I : \mathbf{Prop} \rightarrow \{t,f\}$.  
    Questa funzione è definita induttivamente in questo modo:

    1. $\doublebr T_\mathcal I = \mathbf t$  e  $\doublebr F_\mathcal I = \mathbf f$  
    2. $\doublebr A_\mathcal I = \mathcal I (A)$ per ogni $A \in X$
    3. $\doublebr{(P)}_\mathcal I = (\doublebr P_\mathcal I)$ per ogni $P \in \bf Prop$
    4. $\doublebr {\neg Q}_\mathcal I = \neg \doublebr Q _\mathcal I$ per ogni **formula atomica** Q
    5. $\doublebr {P ~ op ~ Q}_\mathcal I = \doublebr P _\mathcal I ~ ~ op ~ ~ \doublebr Q_\mathcal I$ per ogni connettivo $op \in \{ \land,\lor,\Rightarrow,\Leftarrow,\Leftrightarrow\}$ e per ogni $P,Q \in \mathbf {Prop}$

È possibile notare come le clausule appena descritte, corrispondano alle produzioni grammaticali (nella sezione dedicata alla [Sintassi](#sintassi-del-calcolo-proposizionale)).  

Definito il concetto di interpretazione e semantica, abbiamo abbastanza elementi per costruire il concetto di _modello logico_.

!!! abstract "Modello logico"
    Data una formula proposizionale $P$ ed un'interpretazione $\cal I$, diciamo che $\cal I$ è un modello di $P$, se $P$ è vera in $\cal I$ (ovvero, se $\doublebr P _\mathcal I = t$)  
    Per questo concetto, esiste una notazione apposita:

    $$
    \mathcal I \vDash P \qquad \qquad (\mathcal I \text { è modello di P})
    $$

    Se invece l'interpretazione in $\cal I$ di $P$ risulta falsa, scriveremo $\mathcal I \nvDash P$.  

Notare che **è l'interpretazione** ad **essere modello** di una proposizione.  

---

È poi possibile estendere ulteriormente questa definizione ad un insieme (di formule $\Gamma$ (Gamma)).  

!!! abstract "Insieme di formule Gamma $\Gamma$"
    Scriviamo $\mathcal I \vDash \Gamma$ ($\mathcal I$ è modello di Gamma), se $\mathcal I \vDash P$ per ogni $P$ in $\Gamma$.  
    Se invece esiste **almeno una** forula in $\Gamma$ che non è modello di $I$ ($\mathcal I \nvDash \cal I$), I non è un modello dell'insieme $\Gamma$:  
    $\mathcal I \nvDash \Gamma$  

Possiamo sottolineare come ogni interpretazione $\cal I$ valga se consideriamo il modello $\mathcal I \vDash \varnothing$, dove $\varnothing$ è l'insieme vuoto di formule.  
Possiamo verificarlo semplicemente seguendo qualche passaggio:  

1. Possiamo partire dalla definizione $\mathcal I \vDash \Gamma$, dove $\Gamma$ vale $\varnothing$
2. Procediamo quindi prendendo ogni elemento di $\Gamma$ $P$ e verificando se $\cal I$ vale in $P$
3. Essendo tuttavia $\Gamma$ vuoto, non c'è nulla da verificare, quindi $\mathcal I \vDash \varnothing$ vale _vacuamente_
  
---

Una volta definiti i modelli, potremmo voler considerare quindi la possibilità di compararli. Definiamo quindi il concetto di equivalenza

!!! abstract "Equivalenza logica"
    Quando due modelli hanno gli stessi modelli (ovvero assumo lo stesso valore di verità per ogni interpretazione), vengono detti **logicamente equivalenti****:  

    $$
    P \equiv Q \qquad \qquad (\text { P e Q sono logicamente equivalenti})
    $$

!!! abstract "Conseguenza logica"
    Data una formula proposizionale $P$ ed un insieme di formule $\Gamma$, $P$ è una **conseguenza logica** di $\Gamma$ se:  
    
    - $P$ è vera in ogni interpretazione che rende vere tutte le formule di $\Gamma$

    oppure (in modo equivalente)
    
    - Se ogni modello di $\Gamma$ è anche un modello di $P$

    Possiamo quindi formalizzare in questo modo:  

    $$
    \Gamma \equiv P \qquad \qquad (\text {P è conseguenza logica di } \Gamma)
    $$

Abbiamo quindi determinato come, date due formule proposizionali $P$ e $Q$, vale che:

$$
P \equiv Q \qquad \text {se e solo se} \qquad \{P\} \vDash Q \;\; e \;\; \{Q\} \vDash P
$$

---

#### Le tavole di verità

È possibile valutare una formula proposizionale anche facendo uso delle _tavole di verità_, che ci permettono di raggiungere lo stesso scopo in maniera più semplice.  

Possiamo assegnare una priorità agli operatori che vediamo (in questo caso la priorità è in ordine decrescente):

|           Connettivo            | Priorità |
|:-------------------------------:|:--------:|
| $\neg$                          |    1     |
| $\land$, $\lor$                 |    2     |
| $\Rightarrow$, $\Leftarrow$     |    3     |
| $\Leftrightarrow$               |    4     |

Possiamo quindi dire che, data questa priorità, la formula $A \land \neg B \Leftrightarrow C \Leftarrow D$ è equivalente a $(A \land (\neg (B))) \Leftrightarrow (C \Leftarrow D)$.  

Onde non essere (o non rischiare di essere) ambigui, è comunque consigliato fare uso abbondante di parentesi.  

Facendo uso di una tavola di verità, possiamo avere sul lato "sinistro" della tabella tutte le possibili interpretazioni di ogni proposizione semplice, o un sottoinsieme di queste.  
Sul lato destro, abbiamo invece il valore che la forumla proposizionale in questione avrà con l'interpretazione $\cal I$ fornita dal "lato sinistro".  

Possiamo osservare un esempio di una tavola di verità con una sola interpretazione:

| $A$ | $B$ | $C$ | | $((\ A \ \land \ B) \ \lor \ \neg \ C)$ |
|:---:|:---:|:---:|-|:---------------------------------------:|
| $t$ | $f$ | $f$ | Valutiamo $A$, $B$ e $C$ | $t \qquad ~ f \qquad \quad f ~$         |
|     |     |     | Valutiamo $A \land B$ e $\neg \ C$| $\ f \qquad \quad ~ ~ t ~$              |
|     |     |     | Valutiamo l'$\lor$| $\qquad ~ t$                            |

## Il concetto di Tautologia

!!! abstract "Definizione di Tautologia"
    Una tautologia è una formula proposizionale che risulta sempre vera **per ogni interpretazione**.  
    Possiamo definirla sintatticamente come un **modello senza interpretazione**, che quindi varrà a priori:  
    
    $$
    \varnothing \vDash P  \qquad \text {oppure} \qquad \vDash P 
    $$ 

Oltre alle tautologie (che come detto sono vere indifferentemente dall'interpretazione), possiamo definire altre 2 categorie di forule proposizionali:

- Formule proposizionali **Soddisfacibili**: Hanno almeno un'interpretazione che le rende vere.  
    Possiamo considerare una tautologia come appartenente anche a questa categoria
- **Contraddizioni**: Sono formule proposizionali che sono false in ogni interpretazione.  
    Possiamo indicarle con $\varnothing \nvDash P$  oppure  $\nvDash P$.
- **Non tautologie** ($\nvDash$): L'insieme delle formule proposizionali, tranne le tautologie (che quindi compende anche le contraddizioni)

```
┌─ Formule proposizionali soddisfacibili ─┐
│                                         │
│                                         │
│     ┌───────── Tautologie ─────────┐    │
│     │                              │    │
│     │                              │    │
│     │                              │    │
│     └──────────────────────────────┘    │
│        ┌───── Non-tautologie ────┐      │
│        │                         │      │
└────────│─────────────────────────│──────┘
         │                         │
         │   ┌ Contraddizioni ─┐   │
         │   │                 │   │
         │   │                 │   │
         │   └─────────────────┘   │
         └─────────────────────────┘

TODO (tanto non lo farò mai 🙃): Sostituire con un grafico vero ed esempi
```

Possiamo dimostrare che una formula non è una tautologia trovando un'interpretazione per la quale la formula non risulta vera.  
Stesso discorso vale per le formule proposizionali soddisfacibili: è sufficiente trovare una singola interpretazione che renda la formula vera per farla rientrare nella categoria.  


!!! example "Esempio di Tautologia"
    Prendiamo in considerazione il seguente esempio.  
    Notare che le varie righe per ogni cella rappresentano il valore della sottoproposizione ad ogni step (quindi nella prima riga valutiamo le proposizioni semplici facendo uso dell'interpretazione a sinistra, nella seconda valutiamo l'and e nella terza l'implicazione)  

    | $A$ | $B$ | $A \land B \Rightarrow B$ |
    |:---:|:---:|:--------------------------|
    | $f$ | $f$ | $f \quad f \qquad f$<br/>$\;\; f$ <br/>$\qquad \quad t$|
    | $f$ | $t$ | $f \quad t \qquad t$<br/>$\;\; f$ <br/>$\qquad \quad t$|
    | $t$ | $f$ | $t \quad f \qquad f$<br/>$\;\; f$ <br/>$\qquad \quad t$|
    | $t$ | $t$ | $t \quad t \qquad t$<br/>$\;\; t$ <br/>$\qquad \quad t$|

!!! example "Esempio di Contraddizione"
    | $A$ | $B$ | $A \land (B \land \neg A)$                                                                              |
    |:---:|:---:|:--------------------------------------------------------------------------------------------------------|
    | $f$ | $f$ | $f \hspace{1.5em} f \hspace{2.2em} f$<br/>$\hspace{4em} t$ <br/>$\hspace{2.9em} f$<br/>$\hspace{1em} f$ |
    | $f$ | $t$ | $f \hspace{1.5em} t \hspace{2.2em} t$<br/>$\hspace{4em} t$ <br/>$\hspace{2.9em} t$<br/>$\hspace{1em} f$ |
    | $t$ | $f$ | $t \hspace{1.5em} f \hspace{2.2em} f$<br/>$\hspace{4em} f$ <br/>$\hspace{2.9em} f$<br/>$\hspace{1em} f$ |
    | $t$ | $t$ | $t \hspace{1.5em} t \hspace{2.2em} t$<br/>$\hspace{4em} f$ <br/>$\hspace{2.9em} f$<br/>$\hspace{1em} f$ |

!!! example "Esempio di formula soddisfacibile"
    | $A$ | $B$ | $A \Rightarrow B$                                                                             |
    |:---:|:---:|:-------------------------------------------------------------------------------------------------------|
    | $f$ | $f$ | $f \hspace{1.8em} f$<br/>$\hspace{1.2em} t$ |
    | $f$ | $t$ | $f \hspace{1.8em} t$<br/>$\hspace{1.2em} t$ |
    | $t$ | $f$ | $t \hspace{1.8em} f$<br/>$\hspace{1.2em} f$ |
    | $t$ | $t$ | $t \hspace{1.8em} t$<br/>$\hspace{1.2em} t$ |

Come abbiamo appena visto, non è del tutto scontato identificare una tautologia quando ne vediamo una.  
Questo rappresenta un problema fondamentale del calcolo proposizionale: costruire una tabella di verità per una formula con 10 simboli, significherebbe avere $2^{10}$ righe.  
Possiamo tuttavia dimostrare quando una formula è una tatutologia ricorrendo a delle dimostrazioni per sostituzione.  
In alternativa, è possibile trovare una soluzione partendo dall'ultimo connettivo logico (in termimi di valutazione) ed "assegnandogli" un valore falso, andando quindi a ritroso.  

## Dimostrazioni nel calcolo proposizionale

Come abbiamo visto, la proposizione $P$ è conseguenza logica di un insieme di formule $\Gamma$ se $P$ è vera in tutti i modelli di $\Gamma$.  



### Formalizzazione di inferenze e tautologie

È possibile fare uso della formalizzazione per mostrare la correttezza di una certa inferenza o ragionamenti logici semplici espressi in linguaggio naturale.  

Magari scrivere dopo

### Dimostrazioni per sostituzione di tautologie
#### Rimpiazzamento

#### Principio di sostituzione
#### 


## Logica dei predicati