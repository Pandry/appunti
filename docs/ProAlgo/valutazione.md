# Valutazione di un algoritmo
Analizzare un algoritmo significa predire le risorse che l'algoritmo richiederà.  
Si possono predire risorse come la memoria, la larghezza di banda per la comunicazione o qualche altra risorsa prima, ma tendenzialmente si tende a calcolare il tempo di computazione.  
Per farlo è necessario fare uso di un modello che rappresenta l'implementazione che andremo ad usare (e quindi un modello per le risorse che andremo ad utilizzare).  

Il tempo di esecuzione di un algoritmo su un dato input è il numero di operazioni primitive (o passi) eseguiti.  
È conveniente definire la nozione di passo per essere il più astratta e distaccata dalla macchina possibile.  

Il caso peggiore del tempo di esecuzione di un algoritmo ci fornisce il numero massimo di tempo che l'algoritmo impiegherà per un dato input. Ciò fornisce la garanzia che l'algoritmo non impiegherà mai più tempo del caso peggiore.  

Nei casi particolari nei quali si è interessati ai casi medi, è necessario ricorrere a tecniche di analisi probabilistica: potrebbe infatti non essere scontato cosa costituisce l'input di un problema medio.  

È possibile poi applicare uno strato di astrazione: l'ordine di crescita (o rapporto di crescita): da un polinomio, prendiamo solo il monomio di grado superiore, ignorando i restati monomi di ordine inferiore. Oltre questo, ignoriamo anche il coefficiente del monomio che prendiamo in considerazione, che non risulta essere troppo influente sulla rapporto di crescita per grandi input.  

Possiamo quindi comparare 2 algoritmi sulla base della loro efficienza.  

Un algoritmo può essere valutato sulla base di diversi fattori:  

- Correttezza
    - Dimostrazione formale (matematica)
    - Ispezione informale
- Utilizzo delle risorse
    - Tempo di esecuzione
    - Utilizzo della memoria
    - Altre risorse (e.g. banda)
- Semplicità
    - Comprensibilità e mantenibilità

Nello specifico, il tempo di esecuzione può dipendere (e può essere influenzato) da tanti fattori, e a noi interessa un algoritmo più efficiente, in quanto ci permette di compiere un lavoro in meno tempo  
Per questo motivo, quando valutiamo un algoritmo dobbiamo definire un modello  

## La correttezza
Un algoritmo si dice corretto (rispetto ad una specifica) quando rispetta le specifiche date.  
Il tipo di specifica più usata è quella _funzionale_, che tratta l'algoritmo come una funzione e definisce la correttezza se, dati all'algoritmo i valori necessari (e facenti parte del dominio), i valori restituiti rispetteranno la specifica  

### Invariante di ciclo
Un modo in cui possiamo dimostrare la correttezza (di una porzione di un algoritmo) è mediante l'invariante di ciclo (questo quando si ha a che fare con cicli).  
Si compone di 3 blocchi, rappresentati la pre-iterazione di un ciclo, l'esecuzione del ciclo e la post-esecuzione.  
L'invariante di ciclo è composta da 3 passaggi:  

1. Inizializzazione  
    È uno statement che deve essere verificato prima di entrare in un ciclo
2. Mantenimento  
    La condizione di mantenimento si riferisce ad uno statement che deve essere vero alla fine di una singola iterazione del ciclo
3. Terminazione  
    La terminazione è una condizione che deve essere vera alla fine del ciclo

## La macchina astratta
La macchina astratta è un **modello di calcolo** su cui è possibile fare i conti per astrarre dei dettagli implementativi dell'hardware.  
Un esempio può essere la macchina di Von-Neumann

### Modello RAM - Von-Neumann

Il modello RAM si basa sul cercare di creare un modello che possa essere condiviso tra tutti i tipi di computer moderni, evitando tuttavia ogni tipo di ottimizzazione trasparente e non diffusa.  
Il computer è suddiviso in due componenti astratti: memoria e processore.  

#### Memoria astratta
La memoria astratta è un insieme finito di celle contigue di memoria, ciascuna con un indirizzo (locazione) univoco ed un contenuto (valore della cella).  
Questa struttura permette operazioni di scrittura e lettura.  
Possiamo rappresentare quindi le operazioni matematicamente, prendendo ad esempio l'operazione di lettura:  
$\text{memoria } \sigma: \underbrace{Loc}_{\text{Locazione di memoria}} \to \underbrace{Val}_{\text{Valore della cella}}$  

Una delle operazioni più importante è l'assegnamento, che consiste nell'assegnamento.  
L'assegnamento si preoccupa di scrivere valori all'interno della locazione di memoria  
Valuta l'espressione a destra dell'operatore (che spesso è il simbolo di uguaglianza, `=`) nella locazione di memoria rappresentata dalla variabile (o identificatore) a sinistra

![](assets/lrvalues.png)

#### Processore astratto

Il processore astratto permette di fare calcoli e si occupa (virtualmente) di eseguire le operazioni che andiamo a rappresentare poi con le regole di inferenza.  
Si assume che le operazioni di letture es esecuzione id una computazione o scrittura impieghino una stessa unità di tempo costante.  

### Identificatori ed ambiente
Abbiamo parlato poco fa di identificatori, cerchiamo quindi di dare una spiegazione più formale:  

!!! definition "Definizione di Identificatore"
    Un'identificatore è una sequenza di caratteri (è una stringa) e permette di dare nomi alle locazioni (~il loader traduce i nomi in indirizzi fisici~) all'interno di un ambiente.  

!!! definition "Definizione di Ambiente"
    Un'ambiente è una funzione che associa nomi mnemonici alle locazioni  
    Come per la memoria, possiamo rappresentare l'ambiente con una funzione:  
    $\text{ambiente } \rho: \underbrace{Id}_{\text{Identificatore}} \to Loc$

### Variabili
Identificano le locazioni di memoria, il cui contenuto può essere variato durante l'esecuzione  
L'istruzione `a=b` si traduce in $\sigma(\underbrace{\rho(a)}_{\text{Indirizzo}}) = \underbrace{\sigma(\rho(b))}_{\text{Valore}}$  

### Costanti
Le costanti sono identificatori che individuano variabili che non cambiano durante l'esecuzione. Nell'ambiente quindi, invece di avere un mapping ad una locazione di memoria, abbiamo direttamente il valore contenuto:  
$\rho: Id \to Loc \cup Var$ (che significa che dall'ambiente possiamo ottenere sia un valore (nel caso di una variabile) che una locazione di memoria (nel caso di una costante)).  

??? example "Esempio"
    Per valutare l'espressione `a = b + pi` dove `b` è una variabile e `pi` è una costante, l'espressione risultante sarà $\theta(\rho(a)) = \theta(\rho(b)) + \rho(pi)$


## Categorie sintattiche

### Dichiarazioni
Definiscono gli identificatori quando sono introdotti per la prima volta.  
Associano gli identificatori ad uan locazione di memoria libera, scrivendo il valore iniziale.  
Si **elaborano** per costruire l'ambiente.  

```js
var x = 4;
```
Che si traduce in:  
$\theta(\text{new } \rho(x)) = 4$  
Che viene dall'elaborazione della dichiarazione, che estende l'ambiente $\Delta$ in $\Delta^I$:  
$\Delta \vdash_d D: \Delta^I$ (che significa che dato un ambiente statico $\Delta$, elaborando la dichiarazione D, l'ambiente viene esteso, trasformando l'ambiente statico $\Delta$ in $\Delta^I$)

### Comandi
I comandi descrivono il cambiamento di stato e modificano la memoria o lo stato delle periferiche.  
I comandi si **ESEGUONO**  

```js
x = y + x;
```
Si traduce in  
$\sigma(\rho(x)) = \sigma(\rho(y)) + \sigma(\rho(x))$, elaborato dalla regola  
$C: \Delta \vdash_c C$  
Dato un ambiente $\Delta$, **eseguendo** il comando con i tipi definiti in $\Delta$ è tutto corretto

### Espressioni
Le espressioni rappresentano i valori su cui si opera **NON** modificano la memoria.  
Le espressioni si valutano  

```js
2*(x+y)
```
Che si traduce in:  
$E: \Delta \vdash_e: \tau$  
Dato un ambiente $\Delta$, l'espressione è ben formata ed è di tipo $\tau$


## Classi di complessità

Le classi di complessità ci permettono di categorizzare gli algoritmi in funzione della grandezza dell'input.  
Il tipo di comparazione che viene fatta è molto _spannometrica_, nel senso che spesso si tende a definire l'ordine di grandezza con cui l'algoritmo cresce, oppure il massimo (o minimo) tempo garantito che l'algoritmo impiegherà a fornire una risposta in funzione della grandezza dell'input. Il tutto approssimando il risultato a monomi (quindi ad esempio $log(n)$,$n$,$n^2$, $n!$, $n^n$, etc...)  
Questo tipo di valutazione ci consente di categorizzare gli algoritmi e poterli comparare in semplicità.  

I tipi di categorizzazione più usati sono spesso limite superiore e limite inferiore.  
Come si può intuire dal nome, questi limiti ci permettono di definire un tempo di esecuzione che sicuramente l'algoritmo (rispettivamente) non supererà o non migliorerà.  

Per questo motivo il limite superiore (conosciuto come Big O notation, o semplicemente O) è usato per individuare il costo delle soluzioni.  
Allo stesso modo, il limite inferiore (conosciuto come $\Omega$, o big omega) ci permette di individuare la complessità del problema che stiamo risolvendo.  

Quindi, per riassumere:

| Simbolo | Lettura     |       Tipo di limite          |          Significato           |
|:-------:|:-----------:|:-----------------------------:|:------------------------------:|
|   O     | O-grande    | Limite superiore asintotico   | Peggior situazione possibile   |
| $\Omega$|Omega Grande |Limite inferiore asintotico    | Migliore situazione possibile  |
| $\Theta$|Theta        | Limite asintotico stretto     | Complessità della soluzione    |

(asisntotico si può leggere come "_per valori che tendono a $\pin$_")

<!-- Le costanti, le basi dei logaritmi etc non contano -->

### Big-O

### Big Omega

### Theta

### Relazioni di ricorrenza

## Complessità della ricorsione

### L'approccio Divide-and-conquer
Il divide-et-impera è un paradigma di programmazione ricorsiva.

Si basa su 3 concetti:

- Divide: dividere il problema in sottoproblemi che sono istanze più piccole del problema base
- Conquer: Risolvere il sottoproblema
- Combine: Combinare le soluzioni dei sottoproblemi in maniera ricorsiva fino a generare una soluzione per il problema originale

La ricorsione termina quando arriva 'alla fine della corsa' (ovvero non è più possibile dividere il problema in ulteriori sottoproblemi dello stesso tipo dei precedenti).  

Questo tipo di approccio è spesso utilizzato da algoritmi ricorsivi

!!! definition "Definizione di algoritmo ricorsivo"
    Si dice algoritmo ricorsivo quell'algoritmo che come parte della sua soluzione, chiama sé stesso ricorsivamente una o più volte per risolvere un sottoproblema strettamente correlato. 

#### Analisi degli algoritmi divide-and-conquer

Quando un algoritmo effettua una chiamata ricorsiva a sé stesso, spesso è possibile descrivere il suo tempo di esecuzione facendo uso di una equazione (o relazione) di ricorrenza, che descrive il tempo di esecuzione dell'algoritmo dato un problema di grandezza n.  

!!! definition "Ricorrenza"
    La ricorrenza è un'equazione o diseguaglianza che descrive una funzione in termini di sé stessa ma su valori più piccoli  
    Nell'esempio sotto riportato, abbiamo che T(n) è il tempo di esecuzione del programma.  
    La forma dell'equazione di un algoritmo dividi-et-impera è la seguente:  
    
    $$
    T(n) = \begin{cases}
    C                                   & \text{ se } n \le k \\
    \underbrace{D(n)}_{\text{Dividi}} + \underbrace{\sum^{h}_{i = 1} T(n_i)}_{\text{impera}} + \underbrace{C(n)}_{\text{combina}} & \text{ se } n > k
    \end{cases}
    $$  
    
    Ovvero, semplificando:  
    
    $$
    T(n) = \begin{cases}
    \Theta(1)                   & \text{ se } n \le k \\
    aT(\frac n b) + D(n) + C(n) & \text{ se } n > k
    \end{cases}
    $$

    In questo caso `a` è il numero di sottoproblemi, `b` è la dimensione dei sottoproblemi, `D(n)` è il costo della divisione dei sottoproblemi e `C(n)` è il costo della combinazione dei sottoproblemi. 

Per risolvere un'equazione di ricorrenza (ovvero trovare il $\Theta$ asintotico _(che tende ad infinito)_), ci sono vari metodi:

- Il metodo di sostituzione  
    Il metodo di sostituzione si basa sull'indovinare un limite, per poi fare uso dell'induzione matematica per dimostrarlo 
- Con un albero di ricorrenza  
    Un albero di ricorrenza ci permette di convertire il problema in una struttura ad albero, in cui ogni nodo rappresenta il costo che si ha ai vari livelli della ricorsione.  
    Esistono quindi tecniche per sommare i vari limiti e risolvere quindi la relazione
- Il [master theorem](#il-master-theorem)

### Metodo di sostituzione

### Albero di ricorrenza

### Il master theorem
Il master theorem è un procedimento che permette di valutare attraverso una formula un'equazione di ricorrenza, risolvendola molto velocemente, senza necessità di alberi.  

L'equazione deve essere della forma $aT(\frac{n}{b}) + f(n)$ con $a \geq 1$ che rappresenta il numero di sottoproblemi e $b > 1$, che descrive la grandeza di ogni sottoproblema (che è maggiore di uno, altrimenti la complessità non diminuisce con le iterazioni) ed infine $f(n)$ che descrive il tempo necessario ad effettuare la combinazione dei sottoproblemi  

L'idea base teorema si basa sul comparare due funzioni e scegliere quella che cresce più velocemente (che tende a vincere):  

$$
n^{log_b(a)}
\text { vs }
f(n)
$$

Dove `a`, `b` ed `f(n)` sono gli stessi parametri che troviamo nell'equazione di ricorrenza.  

Ci sono quindi 3 possibili casi, quando si comparano le due funzioni:

1. $n^{log_b(a)} > f(n)$ (vince $n^{log_b(a)}$)  
    In questo caso $f(n) = O(n^{log_b(a) - \epsilon}) . \epsilon > 0$ (`f(n)` ha come limite superiore (big O) la funzione $n^{log_b(a) - \epsilon}$ per un $\epsilon$ maggiore di 0).  
    Questo significa che f(n) cresce polinomialmente[^1] più lentamente rispetto a $n^{log_b(a)}$ (e quindi elevando f(n) a qualche termine sarebbe possibile "equiparare le velocità")

    [^1]: 
        Una funzione cresce in modo polinomialmente differentemente quando la "velocità di crescita" differisce di un polinomio (o un monomio).  
        Un polinomio è un'espressione della forma $a_nx^n + a_{n-1}x^{n-1} + ... + a_1x + a_0$.  
      
    La soluzione all'equazione di ricorrenza è quindi $T(n) = \Theta(n^{log_b(a)})$

2. $n^{log_b(a)} < f(n)$ (vince $f(n)$)  
    Questo significa che $f(n) = \Omega(n^{log_b (a) + \epsilon}). \epsilon > 0$ (che significa che $f(n)$ cresce più velocemente di un fattore $n^\epsilon$).  
    
    Questa condizione tuttavia richiede una seconda clausola: la **condizione di continuità**.  
    $a\cdot f(\frac n b) \le c \cdot f(n)$ e $c < 1 \land n > n_0. T(n) = O(f(n))$  
    Questa condizione serve per assicurarsi che la funzione cresca molto più velocemente anche per una frazione del risultato, rispetto ad una frazione del dominio (il numero in input, per numeri abbastanza grandi).  
    Ad esempio, prendendo $a=2$, $b=2$, $c=0.5$ e $f(n) = n^3$, per $n=6$ avremmo $2\cdot f(\frac 6 2) \le \frac {f(6)} {2}$ e quindi $2\cdot3^3 \le \frac {6^3} {2} = 54 \le 108$

    In questo caso la soluzione è $T(n) = O(f(n))$

3. $n^{log_b(a)} = f(n)$ (sono uguali)  
    Infine, $f(n) = \Theta(n^{log_b(a)} \cdot log^k(n)$ con $k \ge 0$  
    Questo significa che $f(n)$ e $n^{log_b(a)}$ crescono allo stesso modo.  

    Il che significa $T(n) = \Theta(n^{log_b(a)} log^{k+1} (n))$

??? definition "Dimostrazione del master theorem"
    [Da fare...](../assets/DimostrazioneMasterTheorem.pdf)