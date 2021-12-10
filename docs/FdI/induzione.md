# Induzione matematica
L'induzione è un metodo formale usato effettuare dimostrazioni in modo rigoroso o definiire funzioni o proprietà che valgono per ogni insieme.  


## Definizione induttiva
### Definizione induttiva di un insieme
Una definizione induttiva di un insieme ci permette di definire un insieme e si basa su 3 componenti:

!!! abstract "Passi per una dimostrazione induttiva di un insieme"
    1. **La clausola base**
        Questa clausola serve per stabilire alcuni oggetti che appartengono all'insieme e sono alla base degli altri oggetti che saranno presenti nell'insieme.  
    2. **La clausola induttiva**
        Questa clausola descrive in chhe modo gli elementi dell'insieme possono essere usati per produrre altri elementi delll'insieme
    3. **La clausola**
        Questa clausola viene usata quando l'insieme che si sta definendo non contiene ulteriori elementi dopo quelli appena descritti.  
        Questo fa sì che l'insieme definito sia il più piccolo insieme in grado di soddisfare le due condizioni precedenti.

!!! example "Esempio di definizione induttiva di $\mathbb N$"
    1. $0 \in \mathbb N$
    2. Se $n \in \mathbb N$ allora $(n+1) \in \mathbb N$
    3. Nessun altro elemento appartiene ad N

    In questo insieme diamo come sottointeso il concetto di numero e di addizione.  
    Inoltre stiamo definendo N, ma in funzione di un insieme di numeri più grande.  

    Con la formula appena descritta possiamo definire tutti i naturali, come 1 ($0 + 1 \in \mathbb N$), 3 ($2+1 \in \mathbb N$) e così via.  

### Definizione induttiva di una funzione
La definizione di una funzione è molto simile a quella insiemistica.  
Infatti la definzione di una funzione richiede:

1. Il valore della funzione su elementi che riconducono alla clausola base
2. Una regola per calcolare il valore degli elementi che riconduca alla definizione data nella clausola base

Notiamo che non è presente una clausola terminale. Questo perché siamo certi che i primi due punti siano sufficienti a definire la funzione.  

!!! example "Dimostrazione induttiva dei numeri triangolari"
    Un numero triangolare $T_n$ è un numero uguale alla solla di tutti i numeri precedenti:  

    $$
    T_n = \sum_{i=0}^n i
    $$

    Possiamo definire induttivamente con queste due clausole:

    1. $T_n = 0$
    2. $T_{n+1} = T_n + (n+1)$

### Principio di induzione sui naturali

Il principio di induzione sui naturali è un'asserzione che può essere vera o falsa al variare di $n \in \mathbb N$.  

!!! abstract "Principio di induzione sui naturali"
    Se (Caso base) $P(0)$ è vera, e se (Passo induttivo) per ogni $n \in \mathbb N$ vale che $P(n)$ è vera, allora anche $P(n+1)$ lo è.  
    Ma se lo è , allora $P(m)$ è vera per ogni $m \in \mathbb N$

---

Possiamo quindi espimere in modo più compatto il principio di induzione come una formula di inferenza:  

$$
\frac{P(0) ~ \forall n \in \mathbb N .(P(n) \Rightarrow P(n+1))}{\forall m \in \mathbb N.P(m)} \quad \text{ Principio di induzione}
$$

### Principio di induzione forte sui naturali

In alcuni casi il principio di induzione non basta in quanto 

Il princpio dei naturali forte permtte di rafforzare le ipotesi del passo induttivo per effettuare la dimostrazione in maniera più semplice.  
Questo viene fatto (formalmente) inglobando il passo base nell'unica premessa:

$$
\frac{\forall n . (P(0) \land P(1) \land ... \land P(n-1) \Rightarrow P(n))}{\forall m .P(M)} \quad \text{ Induzione forte}
$$


Da controllare ed eventualmente migliorare