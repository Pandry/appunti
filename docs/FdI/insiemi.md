---
title: Insiemi
description: Definizioni di insiemi e rappresentazione
---
# Gli insiemi

!!! abstract "Definizione di insieme"
    Un **insieme** è una collezione di oggetti, chiamati **elementi**.  
    Dato un oggetto a ed un insieme A, scriviamo $a \in A$ per dire che $a$ 
    è un elemento di $A$.  
    Ugualmente, scriviamo $a \notin A$  per dire che $a$ non è un elemento
    di $A$.  
    Il simbolo $\in$ è il simbolo di appartenenza

Per gli insiemi valgono questi concetti:  

- **L'ordine** in cui sono presentati gli elementi non è rilevante  
- **Il numero** di ripetizioni con cui sono presentati gli oggetti non è rilevante

Gli insiemi sono usati per raggruppare oggetti

## Definizione di insiemi
Gli insiemi possono definire in diversi modi.  
Vale la pena specificare che spesso gli insiemi sono spesso definiti con lettere maiuscole, mentre gli elementi con lettere minuscole.  

### Definzione per Enumerazione
L'enumerazione (o __modo estensionale__) consiste nell'elencare tutti gli elementi dell'insieme, separati da virgole.  

!!! example "Esempio"
    $Bool = {t,f}$

!!! info "Puntini"
    Per quanto riguarda insiemi molto grandi, si possono usare i puntini ($...$) per sottointendere una regola di enumerazione.  
    Notare che questa notazione è **informale**!

#### L'insieme vuoto
L'insieme vuoto è l'insieme che non contiene nessun elemento ed è rappresentato con il simbolo $\varnothing$.  

!!! abstract "L'insieme vuoto"
    $\varnothing = \{\}$

### Definizione per Proprietà
È possibile descrivere un insieme anche mediante una _proprietà_ che tutti i suoi elementi soddisfano (anche conosciuto come _modo intensionale_).  
Per farne uso indichiamo con $P$ una generica proprietà e con $P(a)$ indichiamo che l'elemento $a$ soddisfa la proprietà $P$.  
In questo caso stiamo assumento che per ogni elemento $a$, questo o soddisfa la proprietà, o no.  
!!! abstract "Definizione per proprietà"
    $X = \{ x | x \in A \land P(x) \}$  
    In questo caso l'operatore $\land$ indica un "e", mentre il simbolo $|$ si legge "tale che" e serve a specificare una condizione.  
    L'equazione descritta si può poi semplificare:  
    $X = \{ x \in A | P(x) \}$  
    E se $A$ è implicito nel contesto:  
    $X = \{ x | P(x)\}$ 

## I paradossi
In base alle definizioni date, si possono verificare dei paradossi.  

### Il paradosso di Russel
Il paradosso di Russel è un'_antinomia_ (ovvero proposizione che risulta autocontraddittoria sia nel caso che sia vera, sia nel caso che sia falsa).  
Il segue questo tipo di ragionamento:

1. Esistono insiemi che possono contenere loro stessi (ad esempio il numero di insiemi non vuoti è contenuto: $X = \{ x | x \in x \}$)
2. Esistono insiemi in cui essi stessi non risultano (ad esempio insiemi che contengono un solo elemento: $X = \{ x \space | \space |x| = 1 \}$ )  
3. Se definiamo $R$ come l'insieme che non appartengono a sé stessi, otteniamo $R = \{ x | x \notin x\}$.
    A questo punto:
    - :white_check_mark: Se l'affermazione è vera :
        - $R$ appartiene a sé stesso
        - $R$ soddisfa la definizione
        - $R$ è un insieme che appartiene a sé stesso
        - $R$ non può appartenere a sé stesso, che va contro il primo enunciato
    - :x: Se invece la consideriamo falsa:
        - $R$ **non** appartiene a sé stesso
        - $R$ **non** soddisfa la definizione
        - $R$ **non** appartenendo a sé stesso dovrebbe essere incluso nell'insieme
        - $R$ appartiene a sé stesso, che va contro il primo enunciato


## Diagrammi di Eulero-Venn

I diagrammi di Eulero-Venn sono uno strumento per facilitare il ragionamento facneod uso di una notazione grafica intuitiva.  
In questa notazione, l'universo $\mathcal U$ viene rappresentato come un rettangolo, che conterrà tutti gli elementi.  
Gli elementi sono poi identificati da punti.  
Infine, possiamo fare uso di forme come ellissi e circonfenreze per rappresentare gli insiemi.  

```
  ┌───────────────────────────────────────────────────────────────┐
u │                                                               │
  │         •                                                     │
  │                 •                                      •      │
  │                               •         •                     │
  │       /─────────\                                             │
  │      /  •        \   •               •            •           │
  │     /             |                                           │
  │     |          •  |                                           │
  │    /   •      ─────         •             •                   │
  │    |          |                                       •       │
  │    |───────────  •                                            │
  │                                 •         •     •             │
  │         •                                                     │
  │                                                               │
  │                                   •                           │
  │              •        •                  •              •     │
  │     •                                                         │
  │                                                               │
  └───────────────────────────────────────────────────────────────┘
```

## I confronti tra insiemi
### Uguaglianza
!!! abstract "Uguaglianza tra insiemi"
    Due insiemi sono uguali $A = B$, se hanno gli stessi elementi.  
    Due insiemi sono diversi $A \neq B$ se hanno elementi diversi (uno dei 2 contiene almeno un elemento che non appartiene all'altro).  

    Ricordando quindi la definizione, se due insiemi differiscono solo nella ripetizione e l'ordine degli elementi ($A = \{1,2\}$, $B = \{2, 1, 2, 2\}$), sono lo stesso insieme ($A = B$).

### Inclusione

!!! abstract "Inclusione tra insiemi"
    $A$ è **sottoinsime** di $B$ ($A \subseteq B$) se ogni elemento di $A$ è anche elemento di $B$.  
    $A$ è **sottinsieme proprio** di $B$ ($A \subset B$) se $A \subseteq B \land A \neq B$.  
    Due insiemi sono disgiunti se non hanno elementi in comune. 

Quindi:

- Per mostrare che $A \subseteq B$, basta mostrare che ogni elemento di $A$ appartiene a $B$.  
- Per mostrare che $A = B$, basta mostrare che ogni elemento dell'uno appartiene all'altro, quindi $A \subseteq B \land B \subseteq A$.  
- Per mostrare che $A \neq B$, basta esibire un elemento di un elemento che non appartiene all'altro.  
- Per dismotrare che $A \subset B$, con $A \subseteq B$ basta mostrare che un elemento di $B$ che non appartiene ad $A$.  
- Per dimostrare che i due insiemi sono disgiunti basta mostare che per ogni elemento di $A$ non c'è un elemento contenuto in $B$.

## Operazioni su insiemi

### Unione

!!! abstract "Definizione di unione"
    L'operazione di unione tra due insiemi A e B, denotata dalla formula $A \cup B$, è l'insime che contiene tutti gli elementi di A e di B.  
    In formule:  

    $$
    A \cup B = \{x | x \in A \text{ oppure } x \in B\} \qquad A \cup B = \{ x | x \in A \lor x \in B \}
    $$

Quindi, avendo $A = \{1, 2, 3\}$ e $B = \{ 3, 4, 5\}$, $A \cup B = \{1, 2, 3, 4, 5\}$.  

### Intersezione

!!! abstract "Intersezione"
    L'operazione di intersezione tra A e B, denotata dalla formula $A \cap B$, è l'insieme degli elementi contenuti **contemporaneamente** sia da $A$ che da $B$.  
    In formule:

    $$
    A \cup B = \{x | x \in A \text{ e } x \in B\} \qquad A \cup B = \{ x | x \in A \land x \in B \}
    $$

Quindi, riproponendo l'esempio precedente, $A \cap B = \{3\}$

### Differenza

!!! abstract "Differenza"
    L'operazione di differenza tra A e B, denotata dalla formula $A \ B$, è l'insieme degli elementi contenuti solo e soltanto da $A$ e non $B$. Se un elemento appartiene sia ad $A$ che a $B$, non apparterrà all'insieme $A \ B$.    
    In formule:

    $$
    A \text{ \ } B = \{x | x \in A \land x \notin B\}
    $$

Quindi, continuando con l'esempio precedente, $A \ B = \{1, 2\}$

### Complemento

!!! abstract "Complemento"
    L'operazione di complemento si basa su un solo insieme, ma rispetto ad un altro: se $B \in A$, allora $A \ B$ è il complemento di B **rispetto ad A**.  
    Se dal costesto è evidente l'insieme di riferimento (ad esempio $A = \cal U$), allora si può scrivere:

    $$
    \overline B = \{x | x \notin B\}
    $$

## Operatori booleani

I principali operatori booleani che vediamo sono disgiunzione ($\lor$), congiunzione($\land$) e negazione (\neg).  
I significati che possiamo attribuire, aiutandoci con il linguaggio naturale, sono i seguenti:  

| Operazione   | Operatore | Significato in linguaggio naturale |
|:------------:|:---------:|:----------------------------------:|
| Disgiunzione | $\lor$    | "O", intesa come NON mutualmente esclusivo: se si propone A o B, anche entrambe le opzioni possono essere vere. |
| Congiunzione | $\land$   | "E", che richiede che entrambi i parametri siano veri |
| Negazione    | $\neg$    | Opposto del valore |


Questi operatori sono trattati in maniera più approfondita nel [capitolo sulla logica](/FdI/logica), e per quanto riguarda il loro significato, questo è spiegato nella [sezione sulla semantica](/FdI/logica/#la-semantica).  

## Le leggi

Alcune formule valgono per tutti gli insiemi (ad esempio $(A \cup B) \cup C \equiv (A \cup C) \cup B$ ), ma questo non vale per tutte le formule.  
Dato che non è possibile verificare le eguaglianze per ogni insieme (in quanto esistono infiniti insiemi), si fornisce una _prova_ o __dimostrazione__.  
Mentre per smentire un'eguaglianza, è sufficiente fornire un _controesempio_, dimostrando quindi che non è universale.  
Possiamo trovare qui alcune leggi che valgono per tutti gli insiemi A, B e C in qualunque universo $\cal U$

| Legge           | Formula             |
|:---------------:|:-------------------:|
| associatività   | $(A \cup B) \cup C = A \cup (B \cup C)$ <br/> $(A \cap B) \cap C = A \cap (B \cap C)$ |
| unità           | $A \cup \varnothing = A$ <br/> $A \cap \mathcal U = A$ |
| commutatività   | $A \cup B = B \cup A$ <br/> $A \cap B = B \cap A$ |
| idempotenza     | $A \cup A = A$ <br/> $A \cap A = A$ |
| assorbimento    | $A \cup \mathcal U = \mathcal U$ <br/> $A \cap \varnothing = \varnothing$ |
| distributività  | $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$ <br/> $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ |
| assorbimento    | $A \cup (A \cap B) = A$ <br/> $A \cap (A \cup B) = A$ |
| complemento     | $A \cup \overline A = \mathcal U$ <br/> $A \cap \overline A = \varnothing$ <br/> $A \cup (\overline A \cap B) = A \cup B$ <br/> $A \cap (\overline A \cup B) = A \cap B$ <br/> $\overline A \cup (A \cap B) = \overline A \cup B$ <br/> $\overline A \cap (A \cup B) = \overline A \cap B)$|
| differenza      | $A \text{ \ } B = A \cap \overline B$ |
| convoluzione    | $\overline {(\overline A)} = A$ |
| De Morgan       | $\overline {A \cup B} = \overline A \cap \overline B$ <br/> $\overline {A \cap B} = \overline A \cup \overline B$ |
| $\mathcal U: \varnothing$ | $\overline \varnothing = \cal U$ <br/> $\overline {\mathcal U} = \varnothing$ |

Si può osservare l'uso delle parentesi tonde nelle formule.  
Le parentesi hanno lo scopo di specificare l'ordine delle operazioni all'interno della formula: le operazioni all'interno di una coppia di parentesi tonde viene eseguita prima di un'operazione all'esterno.  

Alcune leggi inotre ci permettono di semplificare alcune operazioni, come ad esempio quella della distribuitività, che ci permette di ridurre un calcolo di 3 operazioni in 2. Questo permette di aumentare l'**efficienza** della formula, che avendo un numero inferiore di formulepermette di eseguire l'operazione con meno tempo e risorse computazionali.  

## Dimostrazioni

Le dimostrazioni ci servono per dimostrare la validità delle nostre formule.  
Ne esistono diversi tipi, dalle più formali alle più discorsive

### Dimostrazione grafica
La dimostrazione grafica si basa sulla notazione di Eulero-Venn, che ci permette di dimostrare una formula mediante un mezzo visivo.  

### Dimostrazione per sostituzione
Le dimostrazioni per sostituzione ci consentono di effettuare una dimostrazione basandoci su formule dimostrate precedentemente.  
Sono estremamente formali e convincenti, ma possono essere lunghe e difficili da completare.

!!! example "Esempio di dimostrazione per sostituzione"
    Proviamo a dimostrare la legge di convoluzione ($\overline{(\overline A)} = A$)  

    - $A = A \cup \varnothing$ (unità)
    - $= A \cup (\overline A \cap \overline{(\overline A)})$ (complemento)
    - $= A \cup \overline{(\overline A)}$ (complemento, rimuovendo $\overline A \cap$)
    - $= \overline{(\overline A)} \cup A$ (commutatività)
    - $= \overline{(\overline A)} \cup (\overline A \cap A)$ (complemento, all'opposto)
    - $= \overline{(\overline A)} \cup \varnothing$ (complemento)
    - $= \overline{(\overline A)}$ (unità)

### Dimostrazione discorsive

Le dimostrazionio hanno lo scopo di rendere più semplice effettuare una dimostrazione alternando linguaggio naturale e formule matematiche, rappresentando i vari passaggi talvolta anche oralmente

## Insiemi di insiemi

Come visto per il paradosso di Russel, alcuni insiemi possono racchiudere altri insiemi.  

Per questo è importante notare che $\{a\}$ ed $a$ sono elementi diversi.  
Infatti $\{a\} \in \{ \{ a \}, \{a, b\}, \{a, b,c\} \}$, ma $a \notin \{ \{ a \}, \{a, b\}, \{a, b,c\} \}$  
Allo stesso modo, $\{a\} \ne \{\{a\}\}$  

Possiamo ora definire cosa si intende con **insieme delle parti**:

!!! abstract "Insieme delle parti"
    Dato un insieme $A$, il suo **Insieme delle parti** $\mathcal P(A)$ è quell'insieme contenente tutti i possibili sottoinsiemi di A:  
    $\mathcal P(A) = \{ x | x \subseteq A \}$  

    È inoltre utile notare che il numero di elementi (cardinalità) dell'insieme sarà pari a $2^n$, dove $n$ rappresenta il numero di elementi nell'insieme $A$.  

Possiamo inoltre affermare che 

- $\varnothing \in \cal P(A)$
- $A \in \mathcal P(A)$

### Famiglie di insiemi

Una famiglia $\cal F$ di insiemi non è altro che un insieme di insiemi.  
Per distinguere i sottoinsiemi, usiamo un pedice, che associamo al sottoinsieme.  

Più formalmente:

!!! abstract "Famiglia di insiemi"
    Sia $I$ un insieme tale che per ogni $i \in I$, esista e sia definito un certo insieme $A_i$.  
    L'insieme $\cal F$ contiene tutti gli elementi $A_i$ e viene detto **famiglia indicizzata da** $I$.  
    In formule: $\mathcal F = \{ A_i | i \in I\} = \{A_i\}_{i \in I}$

Sulla base di questa definizione vengon poi generalizzati anche i concetti di unione ed intersezione:  

- $\cup \mathcal F = \cup _{i \in I} \  A_i$
- $\cap \mathcal F = \cap _{i \in I} \  A_i$

Inoltre quando $I = \{1, 2, ..., n\}$, è possibile usare la notazione $\cup^n_{i=1}$ invece di $\cup_{i \in I}$

### Partizioni 
Una partizione è un particolare tipo di famiglia.  
È chiamato in questo modo in quanto _partiziona_ gli elementi di un certo elemento $A$ in elementi separati.  

!!! abstract "Partizione"
    Dato un insieme $A$, una partizione è una famiglia di insiemi $\mathcal F= \{ A_i \}_{i \in I}$ tali che:

    - Ogni insieme $A_i$ è diverso da \varnothing (il sottoinsieme non è vuoto)
    - $\cup_{i \in I} A_i = A$ (Copertura di A: l'unione di ogni insieme della partizione rappresenta A)
    - Presi 2 indici qualsiasi $i$ e $j$ con $i \neq j$, si ha che $A_i \cap A_j = \varnothing$ (tutti i sottoinsiemi sono disgiunti)

Notare che la partizione rappresenta la famiglia, non l'elemento della famiglia (parliamo di partizione riferendosi a tutte le _sotto-partizioni_ o "sezioni" dell'insieme, non ad una singola "sezione")

### Numeri naturali come insiemi

È possibile usare i numeri naturali $\mathbb N$ per denotare insiemi:

!!! abstract "Naturali come insiemi"
    Per ogni $n \in \mathbb N$, denotiamo con $n$ l'insieme $\{m \in \mathbb N | m < n \}$.  
    In alternativa, possiamo definire per enumerazione $n = \{0, 1, 2, ..., n-1\}$

Data questa definizione, avremo che:

- $0 = \{\}$ (L'insieme vuoto $\varnothing$)
- $1 = \{0\}$
- $2 = \{0, 1\}$
- $3 = \{0, 1, 2\}$
- $... = ...$

In questo caso, l'insieme $n$ avrà proprio cardinalità $n$ (cioè $|n| = n$).  
Possiamo inoltre espandere gli insiemi appena definiti:  

- $0 = \{\}$ (L'insieme vuoto $\varnothing$)
- $1 = \{0\} = \text{ { {} } }$
- $2 = \{0, 1\} = \text{ { {}, {{}} } }$
- $3 = \{0, 1, 2\} = \text{ { {}, {{}}, {{{}}} } }$
- $... = ...$

## Il prodotto cartesiano

Come detto, l'ordine e la rindondanza di un elemento in un insieme non è imporante.  

Prima di procedere con il prodotto cartesiano, è opportuno esprimere una notazione che invece ci permetta di rappresentare collezioni ordinate, come $(a_1, a_2, a_3, ..., a_n )$, per rappresentare stringhe ordinate o vettori. 
(In alcuni casi è possibile ossevare l'utilizzo delle parentesi angolari $\langle a,b \rangle$, ma non è questo il caso).  

Possiamo quindi ora dire che le coppie $(a,b)$ e $(b,a)$ sono diverse, a differenza degli insiemi $\{ a, b\} = \{b, a \}$.  

!!! abstract "Prodotto cartesiano"
    Siano $A$ e $B$ due insiemi, il _prodotto cartesiano_ di A per B $A \times B$ è formato da tutte le coppie ordinate $(a,b)$ tali che $a \in A$ e $b \in B$.  
    In formule: $A \times B = \{ (a,b) \ | \ a \in A, b \in B \}$

È importante notare che il prodotto cartesiano non è associativo ($A \times (B \times C) \neq (A \times B) \times C$) né commutativo($A \times B \neq B \times A$)

## La cardinalità

La cardinalità è la quantità che rappresenta il numero di elementi in un insieme.  

!!! abstract "Cardinalità"
    Sia $A$ un insieme contenente esattamente $n$ elementi distinti tra loro (con $n \in \mathbb N$).  
    Diciamo che $A$ è un insieme finito e che $A$ ha **cardinalità** $n$ $|A| = n$

Notiamo che l'insieme vuoto $\varnothing = \{\}$ ha cardinalità 0: $|\varnothing| = 0$.  

Esistono poi anche insiemi _infiniti_, come $\mathbb R$ o $\mathbb N$.


---

## Proprietà 

Assicurarsi che questi vengano trattati più avanti

- transitività (se $A=B$ e $B=C$ allora $A=C$)
- simmetria (se $A=B$ allora $B=A$)
- antisimmetria (se $A \subseteq B$ e $B \subseteq A$ allora $A=B$)
- riflessività ($A = A$)
   
- Albero dell'insieme delle parti