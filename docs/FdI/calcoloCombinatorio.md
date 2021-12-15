# Il calcolo combinatorio
Il calcolo combinatorio è quella branca della matematica che studia i modi per raggruppare o ordinare secondo delle regole date gli elementi di un insieme finito di oggetti.  
Possiamo vedere un esempio per quanto riguarda la cardinalità di alcune operazioni che abbiamo visto fin'ora:

- $|\varnothing| = 0$
- $|n| = n$
- $|A \backslash B| = |A| - |A \cap B|$
- $|A \cup B| = |A|+|B|-|A \cap B|$
- $|A \times B| = |A| \cdot |B|$
- $|A \times B \times C| = |A| \cdot |B| \times |C|$
- $|\mathcal P (A)| = 2^{|A|}$
- $|\mathcal P_k (A)| = \bigl({|A| \atop k}\bigr)$ (prodotto binomiale) = $\bigl({n \atop k}\bigr)$ = Composizione(n,k) = $\frac{n!}{n!(n-k)!}$
- $|Rel(A,B)| = 2^{|A| \cdot |B|}$
- $|Fun(A,B)| = |B|^{|A|}$
- $|Bii(A,B)| = \begin{cases}
    0 & \text{ se } |A| \neq |B| \\
    |A|! & \text{ se } |A| = |B|
    \end{cases}$
- $|A^n| = |A|^n$

## Operazioni su insiemi e cardinalità
Una tecnica per contare gli elementi in un insieme consiste nel partizionamento di un insieme, e la successiva conta di ogni elemento nella partizione, che sommato per ogni sottoinsieme restituirà la cardinalità di dell'insieme.  
Ad esempio, dato un insieme $A$, $\mathcal F = \{A_i | i \in I\}$ sarà una famiglia di sottoinsiemi cui:

- $\cup_{i \in I} A_i = A$ (copertura di A)
- Per ogni coppia di indici $(i,j) \in I$ con $i \ne j$, si ha che $A_i \cap A_j = \varnothing$ (gli insiemi sono disgiunti)

Allora $|A| = \sum_{i \in I} |A_i|$  

Notare che $\mathcal F$ non è una partizione, in quanto possono esistere insiemi vuoti, che non andrebbero ad intaccare il risultato della cardinalità.  

!!! example "Il principio di inclusione-esclusione"
    Presi _r_ insiemi $S_1,S_2,...S_r$ abbiamo la seguente uguaglianza, dove $(-1)^i$ vale 1 se i è un numero pari e vale -1 se è dispari:

    $$
    \bigg| \bigcup^r_{j=1}S_j \bigg | = \sum_{I \subseteq \{1,2,...,r\}, I \ne \varnothing} (-1)^{|I| +1} \bigg | \bigcap_{i \in I} S_i \bigg |
    $$

Ciò significa che per trovare la cardinalità dell'unione di R insiemi, calcoliamo la cardinalità di ogni insieme e le sommiamo tutte.  
Procediamo poi con il sottrarre la cardinalità delle intersezioni con tra insiemi quando il numero di insiemi nell'operazione di intersezione è pari, mentre aggiungiamo i valori se il numero di insiemi coinvolti è dispari.  
Quindi, se ad esempio abbiamo $|S_1 \cap S_2|$, abbiamo due insiemi, che significa che andremo a **sottrarre**, essendo 2 pari.  
Al contrario, se abbiamo $|S_1 \cap S_2 \cap S_3|$, andremo ad aggiungere il valore, essendo 3 dispari.  


$$
\displaylines{
A = \{a, b\} \\ B = \{b,c\} \\
C = \{c,d\} \\\\
R = \{A,B\} \\
S = \{A,B,C\} 
\\
\bigg| \bigcup^r_{j=1}R_j \bigg| = |A| + |B| - |A \cap B| \\
\bigg| \bigcup^r_{j=1}S_j \bigg| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|
}
$$

> Da rivedere se sono stato chiaro

## Relazioni e cardinalità
Dato che ogni relazione è un insieme, possiamo parlare di cardinalità delle relazioni.  
Possiamo ad esempio intuire che $|R| \leq |A \times B|$.  

Ma possiamo fare anche altre affermazioni sulla base della natura della relazione:  

- Se $R$ è totale, allora $|A| \leq |R|$
- Se $R$ è univalente, allora $|R| \leq |A|$
- Se $R$ è surgettiva, allora $|B| \leq |R|$
- Se $R$ è iniettiva, allora $|R| \leq |B|$

Quindi, se $R: A \rightarrow B$ è una funzione, allora $|R| = |A|$.  

!!! example "Principio delle buche e dei piccioni / pidgen principle"
    Dati due insiemi $P$ e $C$, se $|P| > |C|$, non esiste nessuna relazione $R: P \leftrightarrow C$ che sia totale ed iniettiva: infatti abbiamo più elementi nel dominio che nel codominio, ed almeno una eventuale relazione dovrà per forza essere non essere univalente  

### Regola di biiezione
!!! abstract "Regola di biiezione"
    Per tutti gli insiemi $A,B$, vale che se esiste una biiezione allora $|A| = |B|$  

Questa regola si può verificare assumendo 2 insiemi A e B con cardinalità n.  Per simmetria e transitività di $\cong$, possiamo dire che $|A|=|B|=n \Rightarrow |A| \cong n \ e\ |B| \cong n \Rightarrow A \cong B$

Grazie a questa regola possiamo verificare le regole sulla cardinalità in modo semplice:  

!!! info "Cardinalità di Fun(A,B)"
    Per ogni coppia di insiemi A e B vale che $|Fun(A,B)| = |B|^{|A|}$.  
    Per verificare questa regola, ci basta verificare la biiezione.  

## Permutazioni, disposizioni e combinazioni
### Permutazioni
Le permutazioni ci permttono di studiare i possibili modi in cui gli elementi di un certo insieme si possono ordinare

!!! abstract "Permutazione"
    Dato un insieme finito A con $|A| = n$, una permutazione di A è una sequenza ordinata $a_1,...,a_n$ dove tutti gli elementi di A appaiono esattamente una volta

    L'insieme di tutte le permutazioni di un dato insieme A con cardinalità maggiore di 0 si calcola come:

    $$
    P(n) = n!
    $$

### Anagrammi e permutazioni con ripetizioni
Un esempio interessante di permutazione è un anagramma, dato che spesso possono verificarsi delle ripetizioni di una lettera.  
Il motivo è che le parole non sono un ineieme di lettere, ma una sequenza o tupla di lettere, in cui la stessa lettera più comparire più volte.  

In questo caso il numero di permutazioni distinte si ottiene considerando le occorrenze di ogni singola lettera


!!! abstract "Permutazioni con ripetizione"
    Sia $S = s_1,s_2,...,s_k$ una sequenza di elementi di un insieme A di cardinalità n, ogni elementi di A può comparire una o più volte in S.  
    Per ogni $i \in \{1,2,...,n\}$, $c_i$ è il numero di volte che l'elemento $a_i$ compare nella sequenza S.  
    Il numero di permutazioni con ripetizione è dato quindi dalla formula

    $$
    \frac{n!}{c_1! \cdot c_2! \cdot ... \cdot c_n!}
    $$

### Disposizioni
!!! abstract "Disposizioni"
    Dato un insieme finito A con $|A| = n$ ed un intero $k \leq n$, una disposizione degli elementi di A in k posti è una sequenza ordinata $a_1,...,a_k$
    Il suo valore è calcolato con la formula:

    $$
    D(n,k) = \frac{n!}{(n-k)!}
    $$

### Combinazioni
!!! abstract "Combinazioni"
    Sia $A$ un insieme di cardinalità $n$ e sia $k$ un naturale tale che $k \leq n$.  
    Una combinazione di k elementi di A è un k-**insieme**, ovvero un sottoinsieme di A con cardinalità K.  
    L'insieme di tutte le combinazioni è quindi denotato come $\mathcal P_k(A)$.  
    Il numero di combinazioni di k elementi in un insieme di cardinalità n è chiamato coefficiente binomiale ed è indicato come $({n \atop k})$.  
    La formula è denominata anche _formula dei tre fattoriali_:  

    $$
    \bigg({n \atop k}\bigg) = \frac{n!}{k!(n-k)!}
    $$

La formula delle combinazioni può anche essere vista in funzione delle disposizioni, e quindi delle permutazioni:  

$$
C(n,k) = \bigg({n \atop k}\bigg) = \frac{D(n,k)}{P(k)} = \frac{\frac{P(n)}{(n-k)!}}{k!} = \frac{\frac{n!}{(n-k)!}}{k!} = \frac{n!}{k!(n-k)!}
$$

## Contare nei grafi

### Contare negli alberi
Un albero pieno di altezza $h$ ha $2^h$ foglie e $2^h-1$ nodi interni, per un totale di $2^{h+1}-1$ nodi.  
Un nodo (radice compresa) si dice unario quando ha solo un figlio.  
Il numero di nodi non unari in T è al massimo $f-1$ (dove f è il numero di foglie).  

### Quanti grafi non orientati esistono?
Contare il numero di grafi possibile corrisponde a prendere un sottoinsieme dei possibili archi $E = V \times V$.  
Tuttavia essendo i grafi non orientati, si presentano delle restizioni nella scelta:  

- Non possiamo scegliere dei cappi
- Un arco $\{x,y\}$ è del tutto equivalente ad un arco $\{y,x\}$

Il numero di archi possibili è quindi $m_{max} = \frac{n(n-1)}{2}$  
Per ogni elemento $i =\{0,...,m_{max}\}$, il numero di grafi su n nodi con i archi corrisponde al numero di sottoinsiemi di i archi grandi. Ricordiamo che tutti i sottoinsiemi di cardinalità k è uguale all'insieme delle parti $\mathcal P(k)$.  
La cardinalità di $\mathcal P(k)$, ovvero il numero di sottoinsiemi, corrisponde a tutti i modi di scegliere quali elementi includere: per ogni arco in $V \times V$ poissiamo scegliere se includerlo o no, ottenendo quindi $2^k$ possibili combinazioni.  

$$
\mathcal P(m_{max}) = \sum_{i \in \{0,...,m_{max}\}} \cb{m_{max}}{i} = 2^{m_{max}} = 2^{\frac{n(n-1)}{2}}
$$

È importante tuttavia notare che alcuni di questi grafi risultano [isomorfi](../grafi/#isomorfismo).  
Non abbiamo modo di determinare quindi quanti grafi non isomorfi tra di loro abbiamo dato un certo insieme di grafi.  

Abbiamo inoltre potuto osservare un'importante conseguenza della sommatoria con il coefficiente binomiale:  

$$
\sum_{i\in \{0,...,k\}} \cb{k}{i} \text { e quindi } \forall k>0,i\ge 0 . \cb{k}{i} < 2^k
$$

### Quanti grafi orientati esistono?
Rispondere a questa domanda diventa livemente più semplice in quanto non abbiamo più le restrizioni imposte dai grafi non orientati:  
Abbiamo quindi $|V \times V| = n^2$ possibili archi.  
Dato che come abbiamo detto, ogni arco può far parte o meno del grafo, otteniamo che il numero di grafi possibili sarà quindi $2^{n^2}$.  

### Complemento di un grafo
Dato un grafo, possiamo definire il suo complemento $H = (V,E^{'})$ che ha come archi solo quelli che mancano in G.  
In formule quindi, il complemento di $G=(V,E)$ è $H = (V,E^{'})$, dove $E^{'}$ è definito come $E^{'} = \{ xy \in V\times V | xy \notin E\}$.  
Notiamo che ogni grafo ha un complemento e la relazione complemento $C \subseteq G_n \times G_n$ è una biiezione.  
Osserviamo che $C^{-1} = C$  

### Contare cammini in grafi notevoli

#### Cammini in una cricca
!!! abstract "Definiznione di cricca"
    Una cricca di n nodi è un grafo dove ogni coppia di nodi è connessa.  
    La cricca biene anche denotata come $K_n$ e _grafo completo_
In una circca avremo quindi che il path più corto tra due nodi è di lunghezza 1.  
Inoltre ogni sequenza di nodi senza ripetizioni corrisponde ad un path. Qualunque permutazione $V!$ dei nodi corrisponde quindi ad un **path hamiltoniano**. 
Ma dato che ogni nodo è connesso a tutti gli altri, ne deriva che ogni path hamiltoniano è anche un ciclo hamiltoniano.  
Tuttavia un ciclo come $1,2,3,4$, è l'opposto del ciclo $4,3,2,1$, ma rappresentano lo stesso ciclo. Allo stesso modo, ripetendo due volte il cliclo $1,2,3,4,1,2,3,4$, iniziando da qualunque altro nodo che non sia il primo permetterà di ottenere un nuovo ciclo hamiltoniano basato sugli stessi archi (chiameremo questo nuovo ciclo _rotazione_).  
Per ottenere quindi il numero di cicli tra loro non equivalenti, dovremo dividere per i casi opposti (2) e per il numero di possibili rotazioni.  
Abbiamo quindi che $K_n$ ha $\frac{n!}{2n}$ cicli hamiltoniani non equivalenti.  
Inoltre il numero di sequenze di lunghezza k sarà pari al prodotto binomiale del numero dei nodi su k $\cb{n}{k}$

### Cammini nel grafo bipartito completo
!!! abstract "Grafo bipartito"
    Un grafo si dive bipartito se almeno una condizione è vera (le condizioni sono equivalenti):

    - G non contiene cicli di lunghezza dispari
    - Esiste una patizione $V_1, V_2$ di V tale che non esistono archi tra nodi nella stessa partizione.  Per ogni arco $xy \in E$ vale che $x \in v_1 \Rightarrow y \in V_2$
    - Dati due colori, è possibile colorare ogni nodo di G con un colore in modo che i due estremi di ongi acrvo abbiano sempre colori diversi (2-colorazione)

Gli alberi non sono cicli, e quindi non possono avere cicli dispari. Di conseguenza ogni albero è un grafo bipartito.  

Inoltre dato un grafo bipartito esiste una sola bipartizione $v_1, v_2$