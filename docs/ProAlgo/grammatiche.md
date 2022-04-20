# Linguaggi e Grammatiche
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
