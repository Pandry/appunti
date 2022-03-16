# Linguaggi formali

Nei linugaggi dobbiamo distiguere due parti: 

- Sintassi, che ha a che fare con la struttura
- Semantica, che ha a che fare con il significato delle frasi esprimibili

Partiamo con la definizione di linguaggio:  
Definiamo linugaggio come sinonimo di insieme di frasi sintatticamente ammissibili.  
Fissato un alfabeto di elementi base, detti simboli, il linguaggio è un sottoinsieme di tutte le stringhe, ovvero sequenze di lunghezza arbitraria di simboli.  

Descriere un linguaggio, significa quindi (i due punti sono alternativi):  
- decidere quali srienghe farann part e dell'insieme o quali no
- costuire l'insieme di stringhe enumerando le stringhe che lo compongono

Abbiamo due modi di risovere il come identificare l'insieme dellle stringhe ammissibili che caratterizano un linguaggio:  

1. Usare usare un automa, uno strumento in grado di riconoscere tutte e sole le stringhe che fanno parte di un linguaggio
2. Usare una grammatica, che è in grado di costruire o generare tutte le stringhe che fanno parte del linugaggio

## Alfabeti, Parole e Linguaggi
!!! abstract "Definizione di Alfabeto"
    Un alfabeto è un insieme finito.  
    I suoi elementi sono detti simboli

!!! abstract "Definizione di stringhe"
    Dato un alfabeto $A$, l'insieme $A^*$ delle stringhe su $A$ rappresenta il più piccolo insieme che soddisfa:  

    1. (Clausola base): $\varepsilon \in A^*$, dove $\varepsilon$ è la stringa vuota
    2. (Clausola induttiva): Se $\omega \in A^*$ e $a \in A$, allora $a\omega \in A^*$


Notare che l'insieme delle liste $L_A$ e l'insieme $A*$ sono in biiezione.  

!!! abstract "Concatenazione di stringhe"
    La concatenazione di stringhe è una funzione $\_ \cdot \_: A^* \times A^* \rightarrow A^*$, definita per tutte le stringhe $u,v \in A^*$ come $u \times v = uv$

!!! abstract "Linugaggio"
    Un linguaggio su A è un insieme $L \subseteq A^*$.  
    L'insieme di tutti i linguaggi è denotato come $\mathcal P(A^*)$


## Operazioni su lunguaggi
Per ogni alfabeto A, esistono sempre:  

- Il linguaggio vuoto $\varnothing = \{\}$
- Il linguaggio che contiene solo la stringa vuota ${\varepsilon}$
- Il linguaggio completo $A^*$

I linguaggi possono essere combinate come con le operazioni insiemistiche.  

!!! abstract "Concatenazione di linguaggi"
    La funzione $\_ \cdot \_: \mathcal P(A^*) \times \mathcal P(A^*) \rightarrow \mathcal P(A^*)$ è definita per tutti i linguaggi $L_1, L_2 \in \mathcal P(A^*)$ come $L_1 \cdot L_2 = \{ \omega \in A^* | \text{ esistono } \omega_1 \in L_1, \omega_2 \in L_2 \text { tali che } \omega = \omega_1 \cdot \omega_2 \}$


!!! abstract "Concatenazione n-aria di linguaggi"
    Dato un insieme A ed un linguaggio $L \in \mathcal P(A)$, per ogni numero naturale $n \in \mathbb N$, definiamo $L^n$ induttivamente:

    0. $L^0 = \{ \varepsilon \}$
    1. $L^{n+1} = L \cdot L^{n}$

!!! abstract "Stella di Kleene"
    La stella di Kleene è una funzione $(_)^*: \mathcal P(A^*) \rightarrow \mathcal P(A^*)$ per tutti i linguaggi $L \in \mathcal P(A^*)$ definita come: 
    
    $$
    \bigcup _{n \in \mathbb N} L^n
    $$

## Automi
Gli automi sono chiamati anche macchine a stati, e vengono descritti attraverso transizioni di stato, letture in input e produzioni in output.  
Gli automi sono alberi i cui nodi rappresentano gli stati e gli archi i simboli la cui lettura è necessarie per innescare la transizione.  

!!! abstract "Automa"
    Un automa sull'alfabeto A è una tripla $A=(S,T,F)$, dove:

    - S è un insieme, detto insieme degli stati
    - $T \subseteq (A \times S) \times S$ è una relazione in $Rel(A \times S,S)$ detta relazione di transizione, che associa ad ogni lettera dell'alfabeto $a \in A$ ad ogni stato di partenza $x \in S$ zero o più stati di destinazione
    - $F \subseteq S$ è l'insieme degli stati finali (o stati di accettazione)

    L'automa $\mathcal A$ si dice a stati finiti se l'insieme degli stati S è finito

!!! abstract "Raggiungibilità negli automi"
    Sia A = (S,T,F) un automa sull'alfabeto A, per ogni $a \in A$ si definisce la relazione $T_a \in Rel(S,S)$ come $T_a = \{ (x,y) | ((a,x),y) \in T \}$

    Per ogni stringa in $\omega \in A^*$, defianio per induzione $T_w \in Rel(S,S)$ come:

    0. $T_\omega = id_S$
    1. $T_{aw} = T_a;T_w$

Lo stato y $(x,y) \in T_\omega$ si dice raggiungibile da x con la stringa $\omega$  

!!! abstract "Linguaggio accettato"
    Sia A = (S,T,F) un automa a stati finiti, la funzione $\langle \langle \cdot \rangle \rangle: S \rightarrow \mathcal P(A)$ è definita per ogni stato $x \in S$ come 

    $$
    \langle \langle x \rangle \rangle = \{ \omega \in A^* | \text{ esiste } y \in F \text{ tale che } (x,y) \in T_\omega \}
    $$

Il linguaggio $\langle \langle x \rangle \rangle$ è detto il linguaggio accettato da x.  
Se $\omega \in \langle \langle x \rangle \rangle$ si dice che la stringa $\omega$ è accettata dallo stato x

### Automi deterministici e non 

!!! abstract "Automa deterministico"
    Un automa $A=(S,T,F)$ si dice deterministico se l'operazione di transizione $T \in Rel(A \times S, S)$ è una funzione

### Costruzione dei sottoinsiemi 



### Grammatiche libere da contesto

