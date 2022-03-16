

## Insiemi numerici
$\mathbb N$: Numeri interi non negativi (0, 1, 2, 3, ...)  
$\mathbb Z$: Numeri interi positivi e negativi (-2, -1, 0, 1, 2, ...)  
$\mathbb Q$: Numeri razionali (classi di equivalenza di frazioni $\frac{p}{q}$ con $p,q \in \mathbb Z, q \ne 0$ )  
$\mathbb R$: Numeri reali. Razionali e "non" (e.g. $\sqrt 2, \pi, e$)

## Intervalli

!!! definition "Intervalli di $\mathbb R$"
    $I \in \mathbb R$ si dice intervallo se $\forall x,y \in I$ con $x < y$, dato $z$ tale che $x < z < y$ risulta che $z \in I$

Ovvero dati due elementi, è possibile trovare un elemento "in mezzo" ai due, che a sua volta farà parte dell'intervallo.  

### Tipi di intervallo
Ci possono essere diversi tipi di intervallo

#### Aperto
In un intervallo aperto, scritto come `(a,b)`, gli estremi sono esclusi, quindi:  
$I = \{ x \in \mathbb R | a < x < b  \}$

#### Chiuso
In un intervallo chiuso, scritto come `(a,b)`, gli estremi sono inclusi, quindi:  
$I = \{ x \in \mathbb R | a \le x \le b  \}$

#### Semiaperto/semichiuso
Un intervallo semiaperto o semichiuso è un mix dei due tipi appena descritti, in cui i due estremi sono discordi:  

- $[a,b) = \{ x \in \mathbb R | a \le x < b \}$
- $(a,b] = \{ x \in \mathbb R | a < x \le b \}$

#### Semiretta
Esiste poi un ulteriore tipo di intervallo, chiamato semiretta, che include l'infinito come uno dei due estremi.  
Anche questo può essere sia chiuso, che aperto, e possono essere sia a destra che a sinistra.  
Una semiretta è aperta o chiusa si riferisce al termine razionale:  
Una **semiretta chiusa a destra**:  
$[a, + \infty ) = \{ x \in \mathbb R | a \le x \}$  
  
Una **semiretta aperta a sinistra**:  
$(- \infty, a) = \{ x \in \mathbb R | a > x \}$  

Con il simbolo $(- \infty, + \infty)$ si intende tutta la retta reale.

## Funzioni
Una funzione è una terna di oggetti $(A,B,f)$, dove:  
A e B sono insiemi e, A si dice dominio, B si dice codominio ed f è una legge che lega gli elementi di A a quelli di B.  
Il simbolo matematico è $f: A \rightarrow B$  
F mette in corrispondenza ogni elemento di A con uno ed un solo elemento di B.  

!!! definition "Immagine attraverso f"
    Data una funzione $f: A \rightarrow B$ e $D \subset A$ e $f(D) = \{ f(x) : x \in D \}$  
    $f(D)$ si dice immagine di D attraverso f.  
    $f(D) \subset B$  

!!! definition "Immagine"
    Quando si parla invece di immagine (di f), si intende immagine di tutto il dominio, quindi:  
    $Imm(f) = f(A)$  

Vediamo quindi i concetti di surgettività ed iniettività:
!!! definition "Surgettività"
    Una funzione $f: A \rightarrow B$ si dice surgettiva se
    $\forall y \in \exists \text{ almeno un elemento } x \in A$ tale che (t.c.) $f(x) = y$.  

Che significa che ogni elemento nel codominio "proviene" da un elemento del dominio (nel codominio non ci sono elementi "scoperti")

!!! example "Cambiamento del dominio per rendere una funzione surfgettiva"
    La funzione $g: \mathbb R \rightarrow \mathbb R$, $g(x) = x^2$ non è surfgettiva.  
    Questo perché nessun numero razionale elevato al quadrato restituirà un valore negativo. La funzione non è quindi surgettiva  
    La stessa funzione ma definita come $g: \mathbb R \rightarrow [0, + \infty )$ è surgettiva.

Possiamo quindi dire che una funzione è surgettiva solo se la sua immagine coincide con il codominio.  

Per capire velocemente da un grafico se una funzione è surgettiva, possiamo pensare di tracciare una linea orizzontale, se non intercetta almeno una volta la funzione, questa non è surgettiva:  

![](assets/funcNonSurgettiva.png)

---

!!! definition "Iniettività"
    Una funzione $f: A \rightarrow B$ si dice iniettiva se
    $\forall x_1,x_2 \in A \text{ con } x_1 \ne x_2 \text{ risulta che } f(x_1) \ne f(x_2)$  
    La funzione è monotona (cresce o decresce e basta; Non si "appiattisce)

Se una funzione non è iniettiva, ci possono comunque essere dei "trucchi" che ci consentono di farla diventare iniettiva, ad esempio scartando parte del dominio.  

!!! example "Cambiamento del dominio per rendere una funzione iniettiva"
    La funzione $g: \mathbb R \rightarrow \mathbb R$, $g(x) = x^2$ non è iniettiva.  
    La stessa funzione ma definita come $g: [0, + \infty ) \rightarrow \mathbb R$ è iniettiva.

Per capire velocemente da un grafico se una funzione è iniettiva, possiamo pensare di tracciare una linea orizzontale, se questa intercetta più di una volta la funzione, questa non è iniettiva:  

![](assets/funcNonIniettiva.png)

---

!!! definition "Funzione bigettiva"
    una funzione $f$ si dice bigettiva/biunivoca/invertibile se è sia iniettiva che surgettiva

Se una funzione è bigettiva posso costruire la funzione inversa $f^{-1}: B \rightarrow A$.  
Datp un elemento $b \in B$ esiste un elemento $a \in A$ tale che $f(a) = b$ (perché f è surgettiva).
L'elemento a è unico perché f è iniettiva

quindi $f^{-1}(b)=a \Leftrightarrow f(a) = b$

La radice quadrata è la funzione inversa di f(x) = x^2 qunado dominio e codominio sono entrambi [0,+ \infty)
Che è come mai \sqrt 2 = 2 (che è diverso da dire che x^2 =4, che ha due soluzioni)
Per questo motivo \sqrt {x^2} = |x|

--- 

Proprietà dai grafici

