# Grammatiche
Una grammatica è una notazione concisa per descrivere la sintassi (una frase ben formata) di un linguaggio.  
Sono costituite da produzioni  

!!! definition "Definizione di Grammatica"
    Una grammatica è una quadrupla $G = \langle N, \Sigma, P, S \rangle$  
    Dove:  

    - $N$ sono i simboli non terminali
    - $\Sigma$ sono i simboli terminali
    - $P$ sono le produzioni
    - $S$ è il simbolo iniziale

Detto informalmente, una grammatica è quindi un insieme di regole che permette di costruire frasi corrette in un linguaggio.  

## Componenti di una grammatica

### Simboli non terminali
Caratteri che NON compaiono nelle frasi _finali_.  
($N \neq \varnothing$)

### Simboli terminali
Caratteri che compaiono nelle stringhe delle linguaggio (elementi dell'alfabeto)

### Produzioni
Le produzioni sono un sottoinsieme del prodotto tra la chiusura di Kleene e la chiusura positiva:  
$P \subseteq (N \cup \Sigma)^+ \times (N \cup \Sigma)^\star$  
Sono quindi funzioni o relazioni $N \cup \Sigma \cup P \rightarrow N \cup P$ <!--(ricontrollare lezione 4 03:31)-->  

Una produzione è formalizzata attraverso una notazione a coppia, dove al primo elemento si trova la categoria sintattica (o simbolo non terminale) e al secondo si trova uno o più simboli terminali o non.  
L'insieme delle produzioni permettono quindi di esprimere qualunque stringa nel linguaggio.  


### Simbolo iniziale
Simbolo che rappresenta l'inizio della grammatica, ovvero il simbolo da cui si parte per creare la frase.  


## Esempio di una grammatica

??? example "Esempio di una grammatica"
    $\langle \underbrace{\{D\}}_{\text{ Non terminali }}, \underbrace{\{0,...,9\}}_{\text{Terminali}}, \underbrace{\{(D,0),(D,1),...,(D,9),(D,0D),...,(D,9D) \}}_{\text{Produzioni}}, \underbrace{D}_{\text{Simbolo iniziale}} \rangle$  

    In questo esempio, G è una grammatica che ci permette di esprimere ogni numero nei reali.  

Il linguaggio generato da un grammatica G è l'insieme delle stringhe di caratteri terminali che si possono ottenere applicando un numero qualsiasi di produzioni a partire dal simbolo iniziale:  
$L(G) = \{ \omega | \omega \in \Sigma^\star \land S \rightarrow^\star \omega \}$

Che si legge che il linguaggio L data la grammatica G è composto da stringhe ($\omega$) fatte di terminali ($\omega \in \Sigma^\star$) e derivabili in un numero arbitrario di passi, partendo dal simbolo iniziale ($S \rightarrow^\star \omega$)

## Espressibilità di un linguaggio
È possibile classificare le grammatiche basandosi sul tipo di produzioni che permettono di fare.  
Qui di seguito troviamo diverse grammatiche, scritte in ordine dalla meno alla più specifica:  
Notare che con A si intende, nel contesto di una produzione, la categoria sintattica (o simbolo non terminale) e con B si intende il simbolo terminale o non terminale derivato dalla produzione.  
In termini di notazione invece:  

- $\Sigma $ (sigma) è l'alfabeto e N è l'insieme dei non terminali.  
- $\delta \in (N \cup \Sigma)^+$ (delta) è una stringa non vuota di caratteri terminali e non terminali
- $\gamma \in (N \cup \Sigma)^\star$ è una stringa di caratteri terminali e non terminali
- $\delta$ derivativo immediato di $\gamma$ ($\gamma \to \delta$) $\Leftrightarrow$ $\delta$ si può ottenere da $\gamma$ applicando **una** produzione della grammatica
- $\delta$ derivativo di $\gamma$ ($\gamma \to^\star \delta$) significa applicare un numero qualsiasi di produzioni
- Derivazione canonica destra: Simbolo non terminale ad essere sostituito è quello più a destra nella stringa
- Derivazione canonica sinistra: simbolo non terminale ad essere sostituito è quello più a sinistra nella stringa

### Tipi di grammatiche

- Grammatica di tipo 0  
    Una grammatica di tipo 0 è associabile ad una macchina di Turing (essere più specifici qui)  
    $(\alpha, \beta), \alpha \in (N \cup \Sigma)^+, \beta \in (N \cup \Sigma)^\star$
- Grammatica dipendente dal contesto  
    $(\gamma A \delta, \gamma \ro \delta), \gamma, \gamma \in (N \cup \Sigma)^\star, \ro \in (N \cup \Sigma)^+$
    In questa categoria possiamo trovare gli automi lineari
- Grammatica libera da contesto  
    In questa categoria troviamo i linguaggi di programmazione comuni  
    Hanno una forma del tipo $(A, \Beta), \Beta \in (N \cup \Sigma)^+$  
    Automi a pila
    forma delle produzioni
    Non ho un consto e a sinistra posso solo non avere terminali (L4 13:57)
    Stringa len \ge 1 destra
- Grammatica regolare o lineare destra  
    $(A,b), (A, bA)$  
    Automa a stati finiti


## Backus-Naur Form
È facilmente riconoscibile il fatto che scrivere grammatiche come quadruple è molto oneroso in termini di spazio e non risultando comunque chiarissime.  
Per questo è stata inventa la **Backus-Naur Form** (abbreviata a **BNF**)  
Una produzione in questa forma ha questo aspetto:  
$E ::= E+E | E-E | E * E | ...| I | V$

Dove il primo carattere E rappresenta il simbolo iniziale (o categoria sintattica) e le produzioni sono separate dal trattino verticale  
A destra troviamo infatti sia simboli terminali (come +, - e *) che non terminali (come E, I e V, che saranno poi scritte in altre produzioni)  
Il "corpo" della produzione è quindi l'insieme dei simboli che compaiono a destra dell'uguaglianza

## Principio di corrispondenza
La dichiarazione di corrispondenza è il riuso della sintassi per cose svolgono lo stesso compito.  
Questo permette di avere una maggiore facilità di apprendimento ed interpretazione, anche tra vari linguaggi.  

L'idea è che se per un array in un linguaggio, accendiamo alle celle indicando l'indice tra parentesi quadre, probabilmente non vogliamo progettare un linguaggio in cui dobbiamo inserire un indice tra due punti e virgola.  

# Linguaggi

## Identificatori
Gli identificatori servono per identificare delle zone di memoria.  
Vengono 

Possono essere liberi o legati. La differenza è che un identificatore legato risulta in un ambiente, e quindi ha un corrispettivo valore o punta ad una locazione di memoria.  
Un identificatore libero, è un identificatore che viene usato all'interno del codice, tuttavia non risultando nell'ambiente non è possibile correlarlo ad un valore, rendendo la sua valutazione impossibile. Avere identificatori liberi nel codice di un programma è quindi un errore, che tendenzialmente porta il programma a non poter essere eseguito correttamente.

Si collocano in un ambiente, ovvero una funzione che ci permette di "mappare" gli identificatori con i rispettivi valori (nel caso di costanti) o locazioni di memoria (nel caso di variabili e funzioni)

Un identificatore si dice essere in posizione (o occorrenza) di legame quando abbiamo una definizione, e quindi _leghiamo_ l'identificatore (il nome) ad una locazione di memoria.  


## Principio di Astrazione
Il principio di astrazione permette di ridurre la duplicazione di informazione nei programmi (quindi scrivere meno codice codice) usando (e riusando) sia funzioni definite dal programmatore che rese disponibili dal linguaggio (per non _reinventare la ruota_)  
È un principio che quindi ci invita a generalizzare il codice per evitare di copiarlo e incollarlo  
Il sottoproblema dovrebbe poi essere decomposto in sotto funzioni (ove necessario), riapplicando il principio  
Scrivere funzioni permette di aumentare la correttezza, in quanto una volta scritta e verificata, quella parte di codice è corretta  
Ovviamente il linguaggio deve permettere di **definirle** e usarle

### Funzioni
<!-- L16 -->
Quasi tutti i linguaggi moderni fanno uso delle funzioni.  
Una funzione in un linguaggio di programmazione prende il concetto da una funzione matematica: permette di mappare uno o più parametri (che chiameremo formali) in un valore.  

Le funzioni ci permettono di non ripetere codice, ma di renderlo invece modulare, permettendoci di creare sottoprogrammi che svolgono un compito specifico, garantendoci una miglior mantenibilità.  
Grazie a questo aspetto, le funzioni ci permettono inoltre di avere una maggior confidenza nel codice, data dall'aumento della correttezza del codice: una volta che una funzione è garantita essere corretta, si può presumere che quella parte di codice non dovrà essere esaminata ulteriormente.  

Il tipo della funzione è il tipo del valore che la funzione ritornerà (il suo codominio).  
Una funzione ritorna spesso un valore (spesso proprio mediante la keyword `return`, seguita da un'espressione, che sarà dello stesso tipo della funzione)  

Un'altra cosa univoca delle funzioni è la signatura: la signatura può essere vista come una tripla, che include l'identificatore della funzione (il suo nome), i suoi parametri formali (i valori che prende in ingresso) ed infine il tipo che ritornerà.  

Da un punto di vista sintattico, le funzioni vengono definite attraverso una dichiarazione.  
Possiamo aspettarci quindi che in un linguaggio (come [L]([../l])) la funzione si trovi insieme alle dichiarazioni:  
`D::= nil | const id[:T]=E | var id[:T]=E | D;D | function Id(form) -> T {C}`  
(In questo caso `Id` è l'identificatore della funzione, il suo nome, `form` è l'elenco dei formali, `T` è il tipo e `C` il corpo della funzione)

Quando invece sono utilizzate, si dice che vengono invocate, e la loro invocazione rientra nei tipi delle espressioni.  

Una funzione avrà quindi la seguente forma:  
```js
function nome(formali...) tipo 
```

e sarà invocata con una forma simile a questa:  
```js
nome(attuali...)
```
considerando gli attuali come una lista di espressioni.  

Sotto il punto di vista dell'invocazione, si può pensare che una chiamata ad una funzione sospenda l'esecuzione del chiamate (da un punto di vista formale), in attesa che la funzione termini e restituisca il valore rispetto ai parametri attuali forniti (gli argomenti con cui la funzione è stata chiamata).  
Formali ed attuali dovranno essere due liste di variabili con lo stesso numero di elementi e di tipi concordi.  

I controlli che verranno effettuati durante la compilazione saranno i seguenti:  

- Assicurarsi che il numero di argomenti attuali (quelli forniti alla funzione) sia uguale al numero di argomenti attuali
- Assicurarsi che i nomi dei parametri formali siano distinti (altrimenti due parametri potrebbero avere lo stesso nome, generando confusione ed ambiguità)
- Assicurarsi che i tipi dei parametri attuali e formali per la stessa posizione siano uguali (non ha senso dire che il valore "ciao" è un numero)
- Assicurarsi che non ci siano variabili libere nel corpo della funzione 
- Assicurarsi che la funzione abbia un `return`
    - ed il tipo ritornato sia lo stesso dichiarato nella signatura 


Dato che una funzione è una dichiarazione, l'ambiente viene esteso in seguito ad una dichiarazione. Ciò significa che è possibile usare una funzione nel suo stesso corpo. Questa tecnica è detta ricorsione e ci permette di lavorare con strutture iterative come i grafi con estrema facilità, rispetto ad un approccio più tradizionale (iterativo), che è più difficile in fase di ragionamento e quindi più soggetto ad errori (e più lungo da scrivere ed ideare).  
Ovviamente questa tecnica non è efficiente da un punto di vista della memoria, tuttavia è un tradeoff che spesso vale la pena adottare.  

#### Segnatura di una funzione
nome, parametri formali, e tipo di ritorno  
La dichiarazione richiede anche un corpo, in cui si ritorna anche il tipo  

#### Il record di attivazione
<!-- L17 -->
Ogni volta che si invoca una funzione, viene generato un corrispettivo record di attivazione (o stack frame)  
Un record di attivazione è una struttura dati che ci permette di tenere traccia dei dati necessari all'esecuzione delle funzioni.  

Un record di attivazione è composto da 7 valori fondamentali:  

- **Puntatore alla catena dinamica**  
    La catena dinamica tiene traccia del record di attivazione della funzione chiamante. Quindi quando una funzione ne chiama una seconda, la seconda avrà come puntatore nella catena dinamica il record di attivazione del chiamante
- **Puntatore alla catena statica**  
    La catena statica punta al record di attivazione della funzione chiamante.  
    Permette quindi di effettuare la risoluzione degli identificatori non presenti nel blocco corrente (con scoping statico)  
    La catena statica è visibile come un array di "chiamate" (e ci rientrano i parametri formali con cui sono state invocate le funzioni precedenti)  
    Permette di vedere tutto ciò che è accessibile dall'ambiente in uno specifico momento  
    Permette inoltre di effettuare information hiding: (dato come esempio un programma in cui la funzione A chiama la funzione B, che chiama a sua volta la funzione C) se un parametro formale della funzione B ha lo stesso nome di un parametro della funzione A, il parametro della funzione B prende precedenza e quindi non è possibile accedere al parametro della funzione A. Vince l'ultima cosa dichiarata.  
- **Indirizzo di ritorno**  
    L'istruzione da eseguire al ritorno della funzione corrente
- **Indirizzo del risultato**  
    L'indirizzo della locazione dove salvare il risultato che la funzione restituirà
- **Parametri (attuali e formali)**  
    Associazione dei parametri formali ed attuali
- **Variabili locali**  
    L'ambiente dove risiederanno le variabili locali della funzione
- **Risultati temporanei**  
    Uno spazio di memoria dove risiederanno le variabili temporanee generate dal compilatore

Catena dinamica (call chain)  
    La catena dinamica è una sequenza di chiamate e serve per garantire l'ordine di esecuzione.  
    È una struttura dati di tipo LIFO (Last In, Fist Out), una pila

catena statica (da rivedere)  
    La catena statica si occupa di implementare lo scoping statico, ovvero individuare gli identificatori necessari in base alla visibilità  
    È quindi un ambiente derivato dalla dichiarazione di variabili e costanti  
    Garantisce che i nomi siano referenziati rispetto alla visibilità di variabili e funzione

