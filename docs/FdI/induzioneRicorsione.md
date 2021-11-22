
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
    $$ sono termini di F.  

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
    La funzione $add: \mathcal NTerm X \mathcal NTerm \rightarrow \mathbb N$ può essere definita induttivamente seguendo le proprietà appena descritte:

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
    Una funzione è detta **ricorsiva** se il valore della funzione per un certo argomento è espresso in termini del valore della stessa funzione applcata a uno o più argomenti, non necessariamente più piccoli.