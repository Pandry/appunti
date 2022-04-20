
La sintassi si occupa di controllare se una stringa è legale (ovvero rispetta le regole della grammatica)

Ogni elemento (o carattere) del codice di un programma è un simbolo e fa parte della sintassi.  
La sematica (non la sintassi) si occupa di "dare" il significato ad ogni simbolo.  
La sintassi è quindi la _struttura_ dei costrutti di cui il linguaggio di programmazione farà uso.  

La sintassi si basa sul lessico, e ci permette quindi di effettuare due operazioni:

- Analisi Lessicografica (controllare che i termini siano validi)
- Grammatiche (tutte le frasi legali che posso esprimere nel linguaggio che sto definendo)  
    Ci permette quindi di:
    - **Definire** un linguaggio durante la fase di creazione
    - **Leggere e studiare** un nuovo linguaggio in fase di apprendimento

!!! definition "Definizione di Alfabeto"
    Insieme finito e non vuoto di simboli o caratteri

!!! definition "Definizione di lessico"
    Insieme delle parole del linguaggio composte a partire da un **insieme** di **simboli atomici** detti **caratteri** che rappresentano l'**alfabeto** del linguaggio.  
    Le parole saranno poi utilizzate per formare _frasi_ esprimibili in quel linguaggio


!!! definition "Definizione di parola legale"
    Le parole legali sonon un sottoinsieme di tutte le parole che si possono costruire.  
    Una parola legale sarà quindi una parola appartenente a questo sottoinsieme 


!!! definition "Definizione di stringa"
    Una stringa è il risultato della concatenazione di elementi di un insieme (finito o vuoto) di simboli (un alfabeto)

!!! definition "Linguaggio di Programmazione"
    un linguaggio di programmazione è l'insieme delle stringhe ammissibili, che prendono il nome di programmi.  


ASCII è un alfabeto. La maggior parte dei linguaggi si basa su un sottoinsieme di questo alfabeto (insieme riferito come "printable characters" o caratteri stampabili, come quelli di cui è composta questa pagina)

## Operazioni sui caratteri

### Concatenazione
Operazione definita sui simboli di un alfabeto: $\forall a,b \in A . a \cdot b = b a$

### Esponenziale
Dato $x^0 = \epsilon$ (dove $\epsilon$ = stringa vuota), $x^n = x \cdot x^{n-1}$  

### Prefisso
Stringa con uno scarto della coda

### Suffisso
Stringa con uno scarto dalla testa

### Sottostringa
Stringa senza prefisso e suffisso (prefisso e suffisso risultano cancellati)


### Lunghezza di una stringa
Si indica con i trattini verticali (che richiamano alla cardinatlià) ed indicano il numero di elementi dell'alfabeto nella stringa:  
$|ciao| = 4$

### Chiusira di Kleene *
Insieme di simbioli contentente tutte le stringhe di tutte le lunghezze (0($\epsilon$),1,2,3,...) formabili concatenando un alfabeto

#### Chiusura positiva +
Chiusira di Kleene con lunghezza > 0


## Linguaggi

### Linguaggio infinito
Definibile attraverso 3 metodi ed è definibile enumerando tutti i suoi elementi (ove non infiniti)  

    Un linguaggio L su un alfabeto A è un sottoinsieme della chiura di Kleene (considerando insiemi non vuoti e non banali)
    Un linguaggio di programmazione classico può essere pensato come un sottoinsieme di ASCII*

#### Generativo
Insieme delle stringhe generate (che seguono le regole) da una grammatica


#### Riconoscitivo


#### Algebrico

## Albero di derivazione

L'albero di devivazione è un albero radicato non vuoto.  
In un albero:  

- Un nodo singolo è detto radice
- La radice è connessa ad un insieme di albero. Ogni albero è connesso tramite un solo arco alla radice (questa definizione è ricorsiva)

La stringa da cui si genera l'albero si è la frontiera, e si ottiene prendnedo le foglie da destra a sinistra

Ogni sottoalbero risulta essere l'applicazione di una produzione  
Ad ogni albero sono associate più derivazioni, a seconda dell'ordine in cui vengono applicate le derivazioni.  

Esiste una corrispondenza biunivoca tra alberi di derivazione e derivazioni canonice: se derivo sempre da destra (o sinistra), ottengo sempre lo stesso albero.  
Ciò significa che se derivo sempre da destra (o sinistra) ottengo sempre lo stesso albero.  

### Grammatica ambigua
Lo stesso linguaggio si può ottere con 2 algeri diversi (ovvero, ci può essere indecusione su quale può essere l'albero da usare). 
La produzione non riesce a determinare una precedenza con gli operatori. 
Ciò porta il parser a decidere arbitrariamente l'ordine prima di passare all'organizzatore sematico

La soluzione a questo problema è data dall'aggiunta di operatori per non permettere alla scelta di poter esistere.  
Questo perché l'analizzatore sintattico (parser) usa grammatiche non ambigue per determinare la precedenza tra operatori. Se così non fosse, potrebbero verificarsi "underfined behaviour"  


### Albero di sintassi
Un albero di sintassi risulta essere una versione compatta dell'albero di derivazione

??? example "Esempio di albero di sintassi"
    prendendo come regole scritte in BNF le seguenti produzioni:  
    $E ::= E + T | T$  
    $T ::= T \star F | F$  
    $F ::= a | b | c | (E)$  

    Possiamo prendere la stringa $a \star (b + c)$ ed effettuare una trasformazione delle produzioni partendo da E come simbolo iniziale:  
    $E \to T \to T \star F \to T \star (E) \to T \star (E+T) \to T \star (E+F) \to T \star (E+c) \to$  
    $\to T \star (T+c) \to T \star (F+c) \to T \star (b+c) \to F \star (b+c) \to a \star (b+c)$  

    ![Albero di sintassi](assets/alberoDiSintassi.png){ loading=lazy }

---

##### Categorie sintattiche 
###### Dichiarazioni
###### Comandi 
###### Espressioni

##### Lessico
##### Grammatica