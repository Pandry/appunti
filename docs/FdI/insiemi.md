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

Continuare da Pag. 1-5