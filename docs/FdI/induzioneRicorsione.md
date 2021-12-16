# Induzione strutturale e ricorsione
La maggior pparte degli oggetti nell'informatica sono definiti induttivamente, ovvero su istanze più piccole di loro stessi.  
Le definizione induttive garantiscono la correttezza di una tecnica di dimostrazione chiamata principio di induzione strutturale.  
Le definizione induttive sono un caso specifico di definizioni ricorsive, che permettono di di definire una funzione in termini del suo valore su oggetti arbitrari (non necessariamente più piccoli).  

## Liste
Le liste sono sequenze di dati di lunghezza variabile, tipicamente di valore omogeneo.  
Gli oggetti sono in genere denotati tra parentesi quadre `[` e `]`.  
La lista buona è denotata dal simbolo `[]` e rappresenta una sequenza senza elementi.  
Una cosa importante è che le liste sono sempre **sequenze finite**.  

Così come tutti i numeri naturali possono essere formati partendo da 0 e facendo uso dell'operazione `_ + 1`, possiamo fare lo stesso partendo dalla lista vuota `[]` usando l'operazione `a:_`, che aggiunge un elemento $a \in A$ in testa alla lista.  

!!! example "Lista [1,1,2,3]"
    La lista `[1,1,2,3]` è ottenibile come $1:(1:(2:(3:[])))$.  

!!! abstract "Definizione di lista (induttiva)"
    L'insieme $L_A$ delle liste degli elementi di A è il più piccolo insieme che soddisfa:  

    - Clausola base: $[] \in L_A$ (la lista vuota)
    - Passo induttivo: Per ogni $a \in A$ se $lst \in L_A$, allora $a:lst \in L_A$ (se la lista appartiene a $L_A$, continuerà ad appartenere aggiungendo un nuovo elemento in A)

### Funzioni su liste
È possibile sfruttare la definizione induttiva di lista per definire induttivamente funzioni su $L_A$.  
!!! info "Definizione di lunghezza"
    La funzione $les: |L_A \rightarrow \mathbb N$è definita per induzione come:  

    0. Clausola base: $len([]) =0$
    1. Clausola induttiva: $len(a:lst) = len(lst) + 1$ per ogni $a \in A$


!!! info "Definizione di somma su lista"
    La funzione $sunList(lst): L_{\mathbb N} \rightarrow \mathbb N$ è definita induttivamente come:

    0. Clausola base: $sumList([]) = 0$
    1. Clausola induttiva: $sumList(n:lst) = sumList(lst) + n$ per ogni $n \in \mathbb N$

!!! info "Definizione di appartenenza ad una lista"
    Le funzione $belList: L_A \times A \rightarrow Bool$ è definita (induttivamente) come:

    0. Caso base: $belList([],b) = f$ per ogni $b \in A$
    1. $belList(a:lst, b) = t$ per ogni $a,b \in A$ tali che $a=b$
    2. $belList(a:lst, b) = belList(lst,b)$ per ogni $a,b \in A$ tali che $a \ne b$

Questo algoritmo appena descritto si può pensare come ad un algoritmo che controlla la lista da sinistra a destra e restituisce **t** appena trova l'elemento, altrimenti continua fino ad esaurire gli elementi della lista.  

!!! abstract "Concatenazione"
    La funzione $app: L_A \times L_A \rightarrow L_A$ si può definire come:

    0. $app([], lst_2) = lst_2$
    1. $app(a:lst_1, lst_2) = a:app(lst_1, lst_2)$

!!! abstract "Inversione di liste"
    La funzione $rev: L_A \rightarrow L_A$ si definisce come:
    
    0. $rev([]) = []$
    1. $rev(a:lst) = app(rev(lst), a:[])

### Il principio di induzione sulle liste

!!! abstract "Il principio di induzione sulle liste"
    Il principio di induzione sulle liste stabilisce che:

    0. Caso base: se $P([])$ è vera, e
    1. Passo induttivo: per ogni $a \in A$, per ogni lista $lst^{'} \in L_A$ se $P(lst^{'})$ è vera, allora anche $P(a:lst^{'})$ è vera.  

    Allora $P(lst)$ è vera per ogni lista in A.  
    Possiamo scrivere questo principio anche come formula di inferenza:  

    $$
    \frac{P([]) \quad \forall a \in A.\forall lst^{'} \in L_A.P(lst^{'}) \Rightarrow P(a:lst^{'})}{\forall lst \in L_A.P(lst)} \quad \text{ P.I. su }L_A
    $$

## Alberi binari

!!! abstract "Alberi binari"
    L'insieme BT degli alberi binari è il più piccolo insieme che soddisfa:  

    1. $\lambda in BT$ l'albero vuoto
    2. se $t_1,t_2 \in BT$ allora $N(t_1,t_2) \in BT$, un nodo con due sottoalberi

I due sottoalberi $t_1$ e $t_2$ sono chiami sottoalbero sinistro e sottoalbero destro.  
Un nodo è una foglia se entrambi i suoi sottoalberi sono vuoti, altrimeni è un nodo interno.  

Un esempio di albero binario è il seguente:  

$$
t = \underbrace{N}_\text{radice}(N(\lambda,N(\lambda,\lambda)),N(N(\lambda,N(\lambda,\lambda)), N(\lambda,\lambda)))
$$

### Funzioni su alberi binari

Come per le liste, possiamo sfruttare la definizione induttiva degli alberi binari per generare le funzioni.  

!!! note "Dimensione"
    La funzione $size: BT \rightarrow \mathbb N$ è definita come:  

    0. $size(0) = 0$
    1. $size(N(t_1, t_2)) = size(t_1) + size(t_2) + 1

    La funzione size associa ad ogni albero la sua dimensione (ovvero il numero di nodi)

!!! note "Altezza"
    La funzione $height: BT \rightarrow \mathbb N \cup \{-1\}$ è definita come:  

    0. $height(\lambda) = -1$
    1. $height(N(t_1, t_2)) = max(height(t_1), height(t_2)) + 1

    La funzione height associa ad ogni albero la sua altezza, ovvero la lunghezza massima di un tral che vada dall radice al nodo più distante

###  Principio di induzione sugli alberi binari

!!! abstract "Principio di induzione sugli alberi binari"
    Il principio di induzione sugli alberi binari stabilisce che: 

    0. Caso base: $P(\lambda)$ è vera
    1. Passo induttivo: Per ogni $t_1, t_2 \in BT$, vale che se $P(t_1)$ è vera e $P(t_2)$ è vera, allora anchr $P(N(t_1,t_2))$ è vera.   

    Allora $P(t)$ è vera per ogni $t \in BT$.  
    Possiamo esprimere questo concetto anche attraverso una regola di inferenza:  

    $$
    \frac{P(\lambda) \quad \forall t_1,t_2 \in BT.(P(t_1) \land P(t_2) \Rightarrow P(N(t_1,t_2)))}{\forall t \in BT. P(t)} \text{ P.I. su BT}
    $$

!!! info "Per tutti gli alberi, height(t) <= size(t)"
    0. Caso base: t = $\lambda$  
        $height(\lambda) = -1$ (clausola base height) 
        $-1 \leq 0$  
        $= size(\lambda)$
    1. Passo induttivo:  
        $height(N(t_1, t_2)) = max(height(t_1), height(t_2)) +1$ (Clausola induttiva height)  
        $\leq max(size(t_1), size(t_2)) +1$ (Ipotesi induttiva)  
        $\leq size(t_1) + size(t_2) + 1$  
        $= size(N(t_1, t_2))$ (Clausola induttiva size)

## Alberi binari etichettati

!!! abstract "Definizione strutturale di alberi binari etichettati"
    L'insieme $BT_A$ degli alberi binari etichettati con elementi di un dato insieme A, è il più piccolo insieme che soddisfa:  

    1. $\lambda \in BT_A$ (L'albero vuoto)
    2. se $t_1,t_2 \in BT_A$ allora$N(t_1, a, t_2) \in BT_A$ per ogni $a \in A$

### Funzioni su alberi binari etichettati

!!! info "Appartenenza ad un albero"
    La funzione $belBT: BT_A \times A \rightarrow Bool$ è definita come:  
    
    1. $belBT(\lambda,b) =f $
    2. $belBT(N(t_1,a, t_2),b) = t$ per ogni $a,b \in A$ tale che $a \neq b$
    3. $belBT(N(t_1,a,t_2),b) = belBT(t_1,b) \lor belBT(t_2,b)$ per ogni $a,b \in A$ tale che $a \neq b$

!!! info "Somma su albero"
    La funzione $sumBT: BT_N \rightarrow \mathcal N$ è definita come induzione come

    1. $sumBT(\lambda) = 0$
    2. $sumBT(N(t_1,n,T_2)) = sumBT(t_1) + sumBT(t_2) + n$

    Questa funzione prende l'etichetta $n$ in ogni nodo e la somma con tutti gli altri nodi

!!! info "Visita di un albero in ordine simmetrico"
    La funzione $visit: BT_A \rightarrow L_A$ è definita come:

    1. $visit(\lambda)=[\ ]$
    2. visit(N(t_1,n,t_2)) = app(visit(t_1),a,visit(t_2))

    Questa funzione visita l'albero in ordine simmetrico da sinistra a destra, dato ch eper ogni nodo viene prima visitato il figlio sinistro, poi il nodo stesso e poi il nodo destro.  
    L'ordine della visione può essere modificato attraverso l'ordine dei parametri della seconda funzione.  



###  Principio di induzione sugli alberi binari etichettati

!!! abstract "Principio di induzione sugli alberi binari etichettati"
    Il principio di induzione sugli alberi binari stabilisce un concetto simile a quello che vale per gli alberi binari, con l'unica accortezza di ferificare P su che: 

    0. Caso base: $P(\lambda)$ è vera
    1. Passo induttivo: Per ogni $a \in A$, per ogni $t_1, t_2 \in BT_A$, vale che se $P(t_1)$ è vera e $P(t_2)$ è vera, allora anchr $P(N(t_1,a,t_2))$ è vera.   

    Allora $P(t)$ è vera per ogni $t \in BT_A$.  
    Possiamo esprimere questo concetto anche attraverso una regola di inferenza:  

    $$
    \frac{P(\lambda) \quad \forall a \in A, \forall t_1,t_2 \in BT_A.(P(t_1) \land P(t_2) \Rightarrow P(N(t_1,a,t_2)))}{\forall t \in BT_A. P(t)} \text{ P.I. su } BT_A
    $$



## L'induzione strutturale
L'induzione strutturale ci permette di:

- Definire in maniera induttiva delle strutture (dati)
- Definire induttivamente delle funzioni sulle strutture
- Dimostrare delle proprietà sulle strutture dati usando il principio di Induzione

Il tutto in maniera generale ed usando una struttura chiamata `termini`, definiti parametricamente su una `segnatura`.  

!!! abstract "Definizione di Segnatura"
    Una **segnatura** è una famiglia di insiemi indicizzata da $\mathbb{N}$ ($\mathcal{F} = \{\mathcal{F}_n\}_{n \in \mathbb{N} }$) i cui elementi di ogni famiglia sono detti **simboli**.  
    Questi elementi ci permettono di elencare e descrivere i simboli di un linguaggio formale.
    $\mathcal{F}_n$ è l insieme dei simboli di arietà n (o con n argomenti).  
    I simboli di arietà 0 sono detti **simboli di costante**.

Si può pensare ai simboli $\mathcal{F}$ come funzioni, la cui arità definisce il numero di argomenti che le funzioni in quella famiglia prenderanno in input.  

In base al numero di argomenti, le funzioni possono assumere diversi nomi:  

| Arietà | Simboli    |
|--------|------------|
| 0      | Constanti  |
| 1      | Unari      |
| 2      | Binari     |
| k      | k-arai     |

!!! example "Esempio di segnatura"
    Prendiamo in considerazione la segnatura $\mathcal{F}$:  

    $$
    \mathcal{F}_0 = \\{ a, b \\} \qquad
    \mathcal{F}_1 = \\{ f \\} \qquad
    \mathcal{F}_2 = \\{ g \\} \qquad
    \mathcal{F}_n = \varnothing ~ per ~ ogni ~ n ~ \geq 3
    $$
    
    Quindi $a$ e $b$ sono termini costanti, $f$ è un termine unario e $g$ è un termine binario.



!!! abstract "Definizione di Termine"
    Data una segnatura $\mathcal{F}$, l'insieme $\mathcal{F}Term$ degli  $\mathcal{F}$-termini è il più piccolo insieme che soddisfa:  

    1. Per ogni simbolo $c \in \mathcal{F}_0, c \in \mathcal{F}Term$  
        (Ogni simbolo costante è un (F-)termine)
    2. Per ogni $n \geq 1$ ed ogni simbolo $f \in \mathcal{F}_n$  
     se $t_1,...,t_n \in \mathcal{F}Term$ allora $f(t_1,...,t_n) \in \mathcal{F}Term$  
     (Per ogni segnatura in ogni famiglia, se la segnatura è chiamata con un numero di argomenti pari alla sua arità, la segnatura è un (F-)termine)

!!! example "Esempio di termini"
    Continuando con l'esempio riportato sopra, $\mathcal{F}$:  

    $$
    \mathcal{F}_0 = \\{ a, b \\} \qquad
    \mathcal{F}_1 = \\{ f \\} \qquad
    \mathcal{F}_2 = \\{ g \\} \qquad
    \mathcal{F}_n = \varnothing ~ per ~ ogni ~ n ~ \geq 3
    $$

    Essendo $a$ e $b$ termini costanti, sono termini di F.  
    Essendo $f$ un termine unario, scritture come 

    $$
    f(a)\qquad
    f(b)\qquad
    f(f(a))\qquad
    f(f(b))\qquad
    f(f(f(f(b))))\qquad
    $$

    sono termini di F.  
    Essendo $g$ un termine binario, scritture come 

    $$
    g(a,b)\qquad
    g(b,a)\qquad
    g(f(a), b)\qquad
    g(f(f(b)),a)\qquad
    $$
    
    sono termini di F.  
    **Non** sono invece termini scritture come le seguenti:

    $$
    f(a,b)\qquad
    g(a) \qquad
    g(a,a,b) \qquad
    g \qquad
    f \qquad
    f(b,b,b,b,b)
    $$


### Rappresentazione grafica dei termini
È inoltre possibile rappresentare i termini in maniera grafica sottoforma di alberi radicati.  
Ogni nodo dell'albero avrà un'etichetta con un simbolo in $\mathcal{F}$.  
  
![Rappresentazione grafica dei termini](assets/alberoTermini.svg)

### Alberi
TODO
#### Rappresentazione di alberi binari come termini
Gli alberi binari possono essere rappresentati la seguente segnatura $\mathcal{BT}$:

$$
\mathcal{BT}_0 = \\{\lambda\\} \qquad
\mathcal{BT}_1 = \varnothing \qquad
\mathcal{BT}_2 = \\{N\\} \qquad
\mathcal{BT}_n = \varnothing ~ per ~ ogni ~ n ~ \geq 3
$$

### Liste
TODO
#### Rappresentazione di liste come termini
Le liste possono essere rappresentate utilizzando la seguente segnatura $\mathcal{L}^A$:

$$
\mathcal{L}^A_0 = \\{[ ~ ]\\} \qquad
\mathcal{L}^A_1 = \\{a: ~ | ~ a \in A\\} \qquad
\mathcal{L}^A_n = \varnothing ~ per ~ ogni ~ n ~ \geq 2
$$

Che avrà quindi come unica costante la segnatura $[ ~ ]$ ed un operatore unario $a :$ per ogni $a \in A$

### Naturali
Anche i Naturali possono essere rappresentati come termini, con la seguente segnatura:

$$
\mathcal{N}_0 = \\{Z\\} \qquad
\mathcal{N}_1 = \\{S\\} \qquad
\mathcal{N}_n = \varnothing ~ per ~ ogni ~ n ~ \geq 2
$$


### Funzioni su termini
È possibile definire delle funzioni (fin'ora definite induttivamente) in maniera più generale facendo uso dei termini.  
Definire una funzione su $\mathcal FTerm$ (insieme dei termini per una segnatura $\mathcal F$) è possibile in 2 passi:

1. Definire il valore della funzione per i simboli di arietà 0 (le costanti).
2. Definire il valore della funzione per ogni simbolo di arietà $n \geq 1$.  
    Ricordare è che possibile usare il valore appena calcolato per ogniuno degli altri n-valori. 

!!! example "Valutazione di $\mathcal N$-Termini"
    La funzione $val: \mathcal NTerm \rightarrow \mathbb N$ può essere definita induttivamente seguendo le proprietà appena descritte:

    1.  $val(Z) = 0$
    2. $val(S(x)) = val(x) + 1$

    Che con l'esempio $val(S(S(S(Z))))$ può essere sviluppata in questo modo:  
    
    $val(S(S(S(Z))))=$  
    $val(S(S(Z))) + 1=$ (clausola induttiva)  
    $val(S(Z)) + 1 + 1=$ (clausola induttiva)  
    $val(Z) + 1 + 1 + 1=$ (clausola induttiva)  
    $0 + 1 + 1 + 1=$ (clausola base)  
    $3$  
    
!!! example "Somma di $\mathcal N$-Termini"
    La funzione $add: \mathcal NTerm \times \mathcal NTerm \rightarrow \mathbb N$ può essere definita induttivamente seguendo le proprietà appena descritte:

    1. $add(x, Z) = x$
    2. $add(x, S(y)) = S(add(x,y))$

    Che con l'esempio $add(S(S(S(Z))), S(S(Z)))$ può essere sviluppata in questo modo:  
    $add(S(S(S(Z))), S(S(Z)))=$  
    $S(add(S(S(S(Z))), S(Z))=$ (clausola induttiva)  
    $S(S(add(S(S(S(Z))), Z)))=$ (clausola induttiva)  
    $S(S(S(S(S(Z)))))=$ (clausola base)  

## Il principio di Induzione Strutturale
Il Principio di Induzione Strutturale viene anche chiamato Principio di Induzione sui termini e stabilisce che:

!!! abstract "Principio di Induzione Strutturale"
    1. (Caso base)  
        Se per ogni simbolo $c \in \mathcal F_0, P(c)$ è vera  
          
        _(la proprietà $P$ è vera per ogni simbolo costante)_
    2. (Passo induttivo)  
        Se per ogni $n \geq 1$,  
        per ogni simbolo $f \in \mathcal F_n$,  
        per tutti i termini $t_1,...,t_n \in \mathcal FTerm$,  
        vale che se $P(t_1),...,P(t_n)$ sono vere,  
        allora anche $P(f(t_1,...,t_n))$ è vera  
          
        _(per ogni simbolo non costante di arità N, se $P$ vale per tutti gli N argomenti F-Termini, allora $P$ vale anche per il simbolo)_  
    3. allora $P(t)$ è vera per ogni $t \in \mathcal FTerm$  

        Ma non l'ho già detto?

Trascrivere a p. 7-21 esempio di val(add(x,y)) = val(x) + val(y)??

Molto povera questa sezione, da capire bene

## Funzioni ricorsive
Le funzioni definite induttivamente sono un caso particolare di funzioni ricorsive.  

!!! abstract "Definizione ricorsiva"
    Una funzione è detta **ricorsiva** se il valore della funzione per un certo argomento è espresso in termini del valore della stessa funzione applcata a uno o più argomenti, non necessariamente più piccoli

Il numero di passi per la risoluzione di una funzione non sempre segue una regola precisa.  
Inoltre non sempre una funzione ricorsiva risulta calcolabile:  
Il **Teorema di Rice** (facente parte del _Teorema della Calcolabilità_) afferma che ~non esiste un procedimento universale~ che permtta di determinare con esattezza se una funzione recursiva è totale (e quindi è una funzione; in caso contrario sarebbe una _funzione parziale_)  
  
È possibile però individuare delle condizioni sufficienti che ci permettano di garantire che una definizione ricorsiva sia **ben data** (o ben definita).  

Ci interessa che la funzione ricorsiva sia totale perché se così non fosse, implicherebbe che valutando tale funzione incorreremmo in una computazione infinita.  


!!! abstract "Relazione di precedenza indotta da una funzione ricorsiva"
    Data una definizione ricordiva di $rec: A \rightarrow B$, la lreazione di precedenza indotta è la relazione $\prec_{rec} \in Rel(A,A)$ definita come:

    Per ogni $x,y \in A, x \prec_{rec} y$ se e solo se $rec(y)$ è definita direttamente in termini di $rec(x)$  

    Questa definizione non è necessariamente aciclica

Quindi, data la definizione di precedenza, possiamo presentare alcune relazioni di precedenza:  

- $\prec_{due} \in Rel(\mathbb N,\mathbb N)$, definita come $n+1 \prec_{due}n$ se $n \leq 100$
- $\prec_g \in Rel(\mathbb N,\mathbb N)$ definita come $n+1\prec_g n$ se $n > 0$
- $\prec_f \in Rel(\mathbb Z,\mathbb Z)$ definita come $n-1 \prec_f n$ se $n \in \mathbb Z$
- $\prec_h \in Rel(\mathbb N,\mathbb N)$ definita come $\prec_h = \{ (n-2,n) | n \geq 2 \} \cup \{(3,1)\}$

Quindi, se $b \prec_{rec} a$, devo valutare $rec(b)$ per poter valutare $rec(a)$.  
Ma se una funzione è definita solamente in termin di sé stessa, la valutazione non termina mai.  

!!! abstract "Relazione ben fondata"
    Una relazione $\sqsubset$ su un insieme A, definita come $\sqsubset \in Rel(A,A)$, si dice ben fondata se non esiste una catena infinita decrescente  
    
    $$ 
    a_1 \sqsupset a_2 \sqsupset a_3 \sqsupset ...
    $$

    di elementi $a_i$ su A

Possiamo quindi dire che una funzione non è ben fondata quando è definita infinite volte su se stessa.  

Al contrario, una definizione ricorsiva di $rec: A \rightarrow B$ è ben data (ovvero è totale ed univalente) quando:  

1. Per ogni elemento $a \in A$ c'è esattamente una clausola della definizione applicabile per valutare $rec(a)$
2. La relazione $\prec_{rec}$ è ben fondata

Le definizioni induttive sono sempre ben date:  

!!! abstract "relazioni di precedenza indotta da definizione induttiva"
    Data una definizione induttiva di un insieme A, la relazione di precedenza indotta è $\prec_A \in Rel(A,A)$.  
    Questo è dato dal fatto che, se per la clausola induttiva l'elemento a appartiene all'insieme ci appartengono $a_1,...,a_n$:  
    $a_1 \prec_A a,a_2 \prec_A a,...,a_k \prec_A a$

Questa definizione può essere applicata a qualunque definizione induttiva, mantenuta così generale grazie al concetto di [f-termine](#linduzione-strutturale):  
Per ogni $n \geq 1$, per ogni $f \in \mathbb F$, $t_1 \prec f(t_1, ...,t_2), \quad t_2 \prec f(t_1,...,t_2),..., t_n \prec f(t_1,...,t_n)$  

Quindi una relazione definita tramite induttiva è ben data poihcé l'insieme caratterizzato è il più piccolo che soddisfa clausola base e passo induttivo: ogni elemento dell'insieme appartiene ad una sequenza finita di di applicazioni della clausola induttiva, che garantisce che la relazione $\prec$ è ben fondata.  

Possiamo quindi determinare delle proprietà:  

- Se $\sqsubset$ è ben fondata, e $\sqsubset_1 \subseteq \sqsubset$, allora anche $\sqsubset_1$ è ben fondata.  
- Una relazione $\sqsubset$ è ben fondata solo se lo è la sua chiusura transitiva $\sqsubset^+$ 

### La congettura di Collatz

La congettura di Collatz afferma che una funzione come questa:  

$$
f(n) = \begin{cases}
1 & \text{ se } n \leq 1 \\
f(n/2) & \text{ se } n >1 \text { ed è pari} \\
f(3 \cdot n+1) & \text{ se } n>1 \text { ed è dispari}
\end{cases}
$$

è totale, tuttavia non è stato determinato se è così per ogni valore $k \in \mathbb N$


## Tipologie di ricorsione
Esistono vari tipi di ricorsione, oltre alla tipologia vista fin'ora, chiamata **Ricorsione diretta**

### Ricorsione annidata
Questo tipo di ricorsione si ha quando una funzione ricorsiva richiama, nel proprio corpo, sé stessa E sé stessa come parametro, chiamando la funzione 2 volte

!!! example "Esempio di ricosione annidata"
    Un esempio di ricorsione annidata è data dall'equazione di McCarthy:  

    $$
    f(n) = \begin{cases}
    n-10 & \text{ se } n>100 \\
    f(f(n+11)) & \text{ se } n \leq 100
    \end{cases}
    $$


### Ricorsione mutua

La recusione si dice mutua quando la chiamata avviene indirettamente, ovvero da parte di una seconda funzione chiamata a suoa volta direttamente o indirettamente dalla prima.  


!!! example "Esempio di ricosione mutua"

    $$
    ping(n) = \begin{cases}
    0 & \text{ se } n=0 \\
    pong(n-1) & \text{ altrimenti }
    \end{cases}

    pong(n) = \begin{cases}
    0 & \text{ se } n=100 \\
    ping(n-1) & \text{ altrimenti }
    \end{cases}
    $$


### Ricorsione procedurale

Le ricorsioni procedurali sono funzioni scritte attraverso linguaggi di programmazione, che possono avere collaterali come input, output, stampa a schermo ecc...  

```c
void stampa_array(int a[], int i, int n){
    if (i < n){ // Clausola ricorsiva: c'è andora qulcosa da stampare
        printf("%d", a[i]);
        stampa_array(a, i+1, n);
    } //Clausola base: i == n; l'array a[i..n-1] è vuoto, la procedura termina
}
```