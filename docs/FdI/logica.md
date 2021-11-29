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
    $\: \langle Prop \rangle \leadsto \langle Atom \rangle | \neg \langle Atom \rangle | \langle Prop \rangle \langle OpB \rangle \langle Prop \rangle$  
    $\langle Atom \rangle \leadsto \textbf T | \textbf F | \langle X \rangle | (\langle Prop \rangle)$ - Questa regola ci permette di genere le formule atomiche  
    $\ \langle OpB \rangle \leadsto \land | \lor | \Rightarrow | \Leftarrow | \Leftrightarrow$ - Questa regola ci permette di generare i connettivi logici  
    $\quad \: \langle X \rangle \leadsto A | B | C | \dots$ - Questa regola indica i simboli proposizionali  

#### I connettivi logici

Per quanto riguarda i connettivi logici sopra descritti, rappresentano i più comuni e possiamo osservare il loro significato :  

| Simbolo             | Nome                | Utilizzo | Lettura |
|---------------------|---------------------|----------|----------|
| $\neg$              | Negazione           | $\neg P$ | "Non P"<br/> "Not P"<br/> "Non è vero che P vale" |
| $\land$             | Congiunzione        | $P \land Q$ | "P e Q"<br/> "P and Q"<br/> "P e anche Q"|
| $\lor$              | Discongiunzione     | $P \lor Q$ | "P o Q"<br/> "P or Q"<br/> "P oppure Q" |
| $\Rightarrow$       | Implicazione        | $P \Rightarrow Q$ | "se P allora Q"<br/> "P implica Q"<br/> "P solo se Q"<br/> "P è condizione sufficiente per Q"|
| $\Leftarrow$        | Conseguenza         | $P \Leftarrow Q$ | "P è conseguenza di Q"<br/> "P se Q"<br/> "P if Q"<br/> "P è condizione necessaria per Q" |
| $\Leftrightarrow$   | Doppia implicazione | $P \Leftrightarrow Q$ | "P sse Q"<br/> "P se e solo se Q"<br/> "P iff Q"<br/> "P è condizione necessaria e sufficiente per Q" | 

Nel caso dell'implicazione, $P$ assume il nome di _premessa_, mentre $Q$ quello di _conseguenza_ o _conclusione_.  

Vale inoltre la pena notare che $P \Leftarrow Q$ è logicamente equivalente a $Q \Rightarrow P$.

#### La formalizzazione di proposizioni
Per _formalizzare_ si intende il processo di estrarre da una proposizione in linguaggio naturale una una formula di calcolo proposizionale che ha la stessa struttura logica

!!! example "Esempio di formalizzazione"
    Avendo la frase "_Piove e fa freddo_", possiamo da questa proposizione estrarre due proposizioni elementari: $P=$ "_Piove_" e $Fr=$ "_fa freddo_".  
    La proposizione risultante sarà quindi $P \land Fr$

### La semantica 

---

## Concetto di Tautologia

!!! abstract "Definizione di Tautologia"
    Una tautologia è una formula proposizionale che risulta sempre vera per ogni interpretazione

    |= P

!!! abstract "Definizione di Contraddizione"
    Formula proposizionale che è sempre falsa in tutte le interpretazioni
    |= not P

!!! abstract "Definizione di Soddisfacibile"
    Ha almeno un'interpretazione che la rende vera
    È vera in almeno un'interpretazione  
    Comprendono anche le tautologie
    per ogni rovesciato P

!!! abstract "Definizione di interpretazione"
    ...


Non tautologie compendono anche le contraddizioni

### Dimostrazioni per sostituzione di tautologie
#### Rimpiazzamento

#### Principio di sostituzione
#### 


## Logica dei predicati