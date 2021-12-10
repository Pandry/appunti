## Relazioni

Esaminiamo qui la nozione di relazione. Ma cos'è una relazione?  

!!! abstract "Definizione di Relazione"
    Una relazione $R$ tra l'insieme $A$ e l'insieme $B$ è un sottoinsieme del prodotto cartesiano $A \times B$, quindi $R \subseteq A \times B$.  
    Indichiamo poi l'insieme di tutte le relazioni tra $A$ e $B$ con la notazione $Rel(A,B)$.  
    Indichiamo quindi che $R$ è una relazione tra $A$ e $B$ scrivendo $R \in Rel(A,B)$, o più comunemente:  
    $R: A \leftrightarrow B$  
    Dove $A$ è detto insieme di partenza e $B$ insieme di arrivo. 

Segue quindi che $Rel(A,B) = \mathcal P(A \times B)$.  

Data inoltre una relazione $R: A \leftrightarrow B$, avendo $a \in A$ e $b \in B$, se $(a,b) \in R$, allora possiamo dire che $a$ è in relazione $R$ con $b$.  

Possiamo quindi vedere una relazione:  

```
                        ┌──────────────┐
                        │              │
     ┌──────────────────┼───►  a       │
     │                  │              │
┌────┼────┐             │              │
│    │    │             │              │
│    │    │             │              │
│    x────┼─────┐       │              │
│         │     │       │      b       │
│         │     │       │              │
│    y    │     │       │              │
│         │     │       │              │
│         │     │       │              │
└─────────┘     └───────┼────► c       │
                        │              │
                        │              │
                        └──────────────┘
```


Possiamo ora definire quindi 3 occorrenze speciali

!!! info "Relazione completa"
    Definiamo una relazione come completa quando il prodotto cartesiano $A \times B$ è una relazione in $Rel(A,B)$.  

Ecco un esempio di relazione completa:

```
┌──────────────────────────────────┐
│                           ┌──────┼───────┐
│                           │      ▼       │
│        ┌──────────────────┼───►  a       │
│        │                  │              │
│   ┌────┼────┐             │              │
│   │    │    │             │              │
│   │    │    │             │              │
│   │    x────┼─────┐       │              │
│   │         │     ├───────┼────► b       │
│   │         │     │       │      ▲       │
└───┼────y────┼─────┼───────┼───┬──┘       │
    │         │     │       │   └──┐       │
    │         │     │       │      ▼       │
    └─────────┘     └───────┼────► c       │
                            │              │
                            │              │
                            └──────────────┘
```

!!! info "Relazione vuota"
    Chiamiamo relazione vuota quella relazione derivante dal fatto che $\varnothing \subseteq A \times B$, che è quindi una relazione in $Rel(A,B)$.  
    La relazione vuota viene denotata con $\varnothing _ {A,B}$

Ecco una relazione che contiene solo la relazione vuota
```
                        ┌──────────────┐
                        │              │
                        │      a       │
                        │              │
┌─────────┐             │              │
│         │             │              │
│         │             │              │
│    x    │             │              │
│         │             │      b       │
│         │             │              │
│    y    │             │              │
│         │             │              │
│         │             │              │
└─────────┘             │      c       │
                        │              │
                        │              │
                        └──────────────┘
```

È poi possibile osservare che l'insieme di partenza e di arrivo possono coincidere.  
Questo dettaglio ci tornerà utile per definire il concetto di relazione di identità:

!!! info "Relazione di identità"
    Per ogni insieme A, chiamiamo la relazione $\{(x,x) | x \in A \} \subseteq A \times A$ **Relazione Identità** e la richiamiamo con la notazione $Id_A : A \leftrightarrow A$

```
┌──────────────┐               ┌──────────────┐
│              │               │              │
│      a ──────┼───────────────┼────► a       │
│              │               │              │
│              │               │              │
│              │               │              │
│              │               │              │
│              │               │              │
│      b ──────┼───────────────┼────► b       │
│              │               │              │
│              │               │              │
│              │               │              │
│              │               │              │
│      c ──────┼───────────────┼────► c       │
│              │               │              │
│              │               │              │
└──────────────┘               └──────────────┘
```

---

Per quanto riguarda notazioni molto grandi, è possibile fare uso dei punti per sottointendere la regola, come vediamo accadere per molte relazioni matematiche.  
Ad esempio la relazione $Succ = \{ (x,y) \in \mathbb N \times \mathbb N | y = x + 1 \} : \mathbb N \leftrightarrow \mathbb N$ si può semplificare in questo modo:  
$Succ = \{ (0,1), (1,2), (2,3), ...\} : \mathbb N \leftrightarrow \mathbb N$


## Operazioni su relazioni

Dal momento che ogni relazione è essa stessa un insieme, possiamo combinare le relazioni con gli operatori insiemistici che abbiamo già visto.  

Quando si combinano le relazioni è sempre bene prestare attenzione agli operatori di partenza e di arrivo.  

Distinguiamo 4 operazioni insiemistiche sulle relazioni: unione, intersezione, differenza e complemento.  

Per gli esempi, consideriamo due relazioni $R: A \leftrightarrow B$ e $S: A \leftrightarrow B$

- $R \cup S: A \leftrightarrow B$ è detta _Unione di R ed S_
- $R \cap S : A \leftrightarrow B$ è detta _Intersezione di R ed S_
- $R \\ S: A \leftrightarrow B$ è detta _Differenza di R con S_
- $(A \times B) \text{ \ } R :A \leftrightarrow B$ è detta _Complemento di R_  
  Il complemento di una relazione $R: A \leftrightarrow B$ è denotato da $\overline R$

Notiamo che quando si parla di relazione tra due insiemi A e B, si fissa sempre come universo $\cal U$ l'insieme $A \times B$

### Composizione

!!! abstract "Definizione di Composizione"
    Consideriamo due relazioni $R: A \leftrightarrow B$ e $S: B \leftrightarrow C$, la composizione di R con S è la relzione $R;S: A \leftrightarrow C$.  
    La definiamo così:  

    $$
    R;S = \{ (x,z) \in A \times C | \text{ esiste almeno un } y \in B \text{ tale che } (x,y) \in R \text{ e } (y,z) \in S \}
    $$

Quindi possiamo vederla in questo modo:  
```
               R;S
┌─────────────────────────────┐
│                             │
│                             │
│      R               S      ▼
• ────────────► • ──────────► •
A               B             C
```


### Quantificatori


Alcune espressioni in matematica rivestono un ruolo particolare.  
Un esempio è l'espressione "esiste almeno".  

**Quantificatore esistenziale**  

Prendiamo l'espressione "esiste almeno".  
Questa espressione viene denotata dal segno $\exists$ e viene chiamato **quantificatore esistenziale**.  

La formula $(\exists a \in A.P(a))$ si legge "esiste almeno un elemento di A tale che la proprietà P è vera".  

**Quantificatore universale**

L'altra espressione è "Per ogni", chiamata quantificatore universale e denotata dal simbolo $\forall$.  

---
Avremo modo di riparlare dei quantificatori con maggior dettaglio quando tratteremo la [logica](../logica)


### Relazione opposta

La relazione opposta è quella relazione che "annulla", una certa relazione.
Se la relazione è una funzione, la relazione opposta sarà equivalente all'identità.  

!!! abstract "Relazione opposta"
    La relazione opposta di $R: A \leftrightarrow$ è la relazione $R^{op}: B \leftrightarrow A$ ed è definita come:  

    $$
    R^{op} = \{ (y,x) \in B \times A \ | \ (x,y) \in R \}
    $$

Fondamentalmente si "inverte" l'ordine delle coppie nella relazione (da $(a,b)$ la relazione diventa $(b,a)$)

Avendo due relazioni $R^{op}: B \leftrightarrow A$ e $S^{op}: C \leftrightarrow B$, queste non possono essere composte ($R^{op};S^{op}$), perché l'insieme di arrivo di $R^{op}$ e quello di partenza di $S^{op}$ non coincidono.  
È possibile però comporre la relazione $S^{op};R^{op}$


## Leggi

Come per gli insiemi, possiamo trovere delle leggi anche per gli insiemi  


| Legge           | Formula             |
|:---------------:|:-------------------:|
| associatività   | $(R \cup S) \cup T = R \cup (S \cup T)$ <br/> $(R \cap S) \cap T = R \cap (S \cap T)$ <br/> $R;(S;T) = (R;S);T$|
| unità           | $R \cup \varnothing = R$ <br/> $R \cap (A \times B) = R$ <br/> $Id_A;R = R = R;Id_B$ |
| commutatività   | $R \cup S = S \cup R$ <br/> $R \cap S = S \cap R$ |
| idempotenza     | $R \cup R = R$ <br/> $R \cap R = R$ |
| assorbimento    | $R \cup (A \times B) = (A \times B)$ <br/> $R \cap \varnothing = \varnothing$ |
| distributività  | $R \cup (S \cap T) = (R \cup S) \cap (R \cup T)$ <br/> $R \cap (S \cup T) = (R \cap S) \cup (R \cap T)$ <br/> $R;(S \cup T) = (R;S) \cup (R;T)$ <br/> $(S \cup T);U = (S;U) \cup (T;U)$ <br/> $(R;S)^{op} = S^{op};R^{op}$ <br/> $(S \cup T)^{op} = S^{op} \cup R^{op}$ <br/> $(S \cap T)^{op} = S^{op} \cap T^{op}$ <br/> $(\overline R)^{op} = \overline {(R^{op})}$ |
| assorbimento    | $R \cup (R \cap S) = R$ <br/> $R \cap (R \cup S) = R$ <br/> $R;\varnothing_{B,C} = \varnothing_{A,C} = \varnothing_{A,B};S$ |
| complemento     | $R \cup \overline R = (A \times B)$ <br/> $R \cap \overline R = \varnothing$ |
| differenza      | $R \text{ \ } S = R \cap \overline S$ |
| convoluzione    | $(R^{op})^{op} = R$ |
| opposto-id      | $Id_A^{op} = Id_A$ |
| opposto-complemento| $(A \times B)^{op} = (B \times A)$ |
| opposto-vuoto   | $\varnothing^{op}_{A, B} = \varnothing_{B,A}$ |

## Proprietà di relazioni

### Le proprietà TUSI

In questa sezione vengono introdotte quattro tra le maggiori proprietà, sia nel campo della matematica che dell'informatica.  

!!! abstract "Relazione Totale"
    Data $R: A \leftrightarrow B$ si dice totale se per tutti gli $a \in A$ esiste almeno un $b \in B$ tale che $(a,b) \in R$

Detto in maniera un po' più grezza, ogni elemento di A è in relazione R con almeno un elemento di B.  
Vista graficamente, da ogni elemento di A "parte una freccia" verso B .  

!!! abstract "Relazione Univalente"
    Data $R: A \leftrightarrow B$ si dice univalente per tutti gli elementi $a \in A$ se esiste **al più** un elemento $b \in B$ tale che $(a,b) \in R$

Questa se vogliamo è un po' il complementare della relazione totale, dove si dice che un elemento di A è **al massimo** in relazione con un elemento in B.  
Graficamente, possiamo immaginare come da ogni elemento in A parta al massimo una freccia.  

Notare che le 2 relazioni appena definite non sono mutualmente esclusive, tutt'altro: Per una relazione, essere Totale e Univalente significa che per ogni elemento di A esiste una ed una sola relazione con un elemento in B.  
Questa è l'anticipazione alla definizione di funzione, che vedremo in seguito.  


!!! abstract "Relazione Surgettiva"
    Data $R: A \leftrightarrow B$ si dice totale se per tutti i $b \in B$ esiste almeno un $a \in A$ tale che $(a,b) \in R$

Questo possiamo vederlo come l'equivalente della relazione totale, solo per il codominio (B).  
Viene infatti richiesto che ogni elemento di B sia raggiunto da almeno un elemento di A.  

!!! abstract "Relazione Iniettiva"
    Data $R: A \leftrightarrow B$ si dice univalente per tutti gli elementi $b \in B$ se esiste **al più** un elemento $a \in A$ tale che $(a,b) \in R$

E la relazione iniettiva richiede invece che ogni elemento di B venga raggiunto al più da un elemento di A.  

Questa relazione tra totalità e surgettività e tra univalenza ed iniettività non passa inosservata: viene infatti detto che esiste una **dualità** tra le due coppie di relazioni.  

Possiamo riassumere quindi le quattro proprietà in questo modo:

|     elementi       | insieme di partenza | insieme di arrivo |
|:------------------:|:-------------------:|:-----------------:|
| almeno uno         |    **Totale**       |   **Surgettiva**  |
| al più un elemento |    **Univalente**   |   **Iniettiva**   |


### Risultati di dualità

Come detto, le relazioni che hanno una dualità tra di loro (quindi totale con surgettiva e univalente con iniettiva), ovvero impongono lo stesso vincolo, ma le prime lo esercitano sull'insieme di partenza, mentre le seconde su quello di arrivo.  

Inoltre, come abbiamo visto, l'operazione $\cdot^{op}$ inverte gli insiemi di partenza e di arrivo.  

Questo dualismo può essere quindi arricchito con le relazioni opposte:  

- $R: A \leftrightarrow B \text{ è totale } \Leftrightarrow \text{ (se e solo se) } R^{op} : B \leftrightarrow A \text{ è surgettiva}$
- $R: A \leftrightarrow B \text{ è univalente } \Leftrightarrow \text{ (se e solo se) } R^{op} : B \leftrightarrow A \text{ è iniettiva}$

### Teorema di caratterizzazione

Le proprietà definite poco sopra possono essere caratterizzate attraverso delle operazioni sugli insiemi.  
Data la relazione $R: A \leftrightarrow B$, vale che:

- $R$ è totale se e solo se $Id_A \subseteq R;R^{op}$  
- $R$ è univalente se e solo se $R^{op}; R \subseteq Id_B$
- $R$ è surgettiva se e solo se $Id_B \subseteq R^{op}; R$
- $R$ è iniettiva se e solo se $R;R^{op} \subseteq Id_A$

### Chiusura per composizione

È importante sapere che le proprietà vengono mantenute quando due relazioni vengono composte ed entrambe hanno le stesse funzioni:  
Date le relazioni $R: A \leftrightarrow B$ e $S: B \leftrightarrow C$:  

- Se R ed S sono totali, $R;S$ è totale
- Se R ed S sono univalenti, $R;S$ è univalente
- Se R ed S sono surgettive, $R;S$ è surgettiva
- Se R ed S sono iniettive, $R;S$ è iniettiva

## Funzioni

!!! abstract "Definizione di Funzione"
    Una relazione $R \in Rel(A, B)$ che sia totale ed univalente è detta **funzione**.  

Per ogni $a \in A$ esiste esattamente un $b \in B$ tale che $(a,b) \in R$.  

Le funzioni vengono spesso denotate da lettere minuscole, tipicamente $f$, $g,$, $h$, ...  

In aggiunta una funzione non si dice essere **TRA** A e B, ma **DA** A a B  

L'insieme di tutte le funzioni da A a B è denotato come $Fun(A, B)$, quindi $Fun(A,B) = \{f: A \leftarrow B\}$  

Quando si lavora con le fuznioni è particolarmente importante indicare gli insiemi di partenza e di arrivo.  

Per quanto riguarda le funzioni binarie, che prendono 2 argomenti, invece di usare la **notazione prefissa** ($f(a,b)$), si tende ad usare la **notazione infissa** ($a f b$).  

### Proprietà

Una proprietà è un'entità che pero ogni elemento di un insieme $A$, si dice che l'elemento $a$ soddisfa la proprietà o no.  
Più formalmente, $P$ è una funzione $P: A \rightarrow Bool$

!!! abstract "Definizione di proprietà"
    Una proprietà su $A$ è una funzione $P: A \rightarrow Bool$ che ha come insieme di partenza l'insieme $A$ e come insiemen di arrivo $Bool$.  
    Per ogni elemento $a \in A$, si dice che $a$ soddisfa la proprietà $P$ se $P(a) = t$, mentre si dice che $a$ non soddisfa la proprietà $P$ se $P(a) = f$.  

### Composizione di funzioni

Tornando a trattare le relazioni e le funzioni come relazioni, l'unica operazione insiemistica che preserva le proprietà è la composizione.  

Per tutti gli insiemi A, B, C e per tutte le funzioni $f: A \rightarrow B$ e $g: B \rightarrow C$, la relazione $f;g$ è una funzione.  

Ci possono essere poi svariati modi in cui la composizione può essere scritta: 

- $f;g$
- $f \circ g$
- $f g$

E la stessa cosa vale quando si ha un argomento

- $f;g(a)$
- $g(f(a))$
- $g f (a)$

### Teorema di caratterizzazione

Abbiamo già visto il teorema di caratterizzazione poco sopra.  
Grazie al teorema possiamo caratterizzare le funzioni.  
Il teorema ci dice che, data la relazione $R: A \leftrightarrow B$, questa è una funzione se e solo se $id_A \subseteq R;R^{op}$ e $R^{op}; R \subseteq id_B$  

### Funzioni parziali

!!! abstrat "Definizione di Funzione Parziale"
    Definiamo una relazione solo univalente (quindi non totale) come **funzione parziale**.  

    Quando abbiamo a che fare con una funzione parziale con $a \in A$, diciamo che $R$ è definita su $a$ se esiste un b tale che $b \in B$ e $(a,b) \in R$, altrimenti diciamo che a non è definita su R.

Un esempio di funzione parziale può essere $f(x) = \frac {1}{x}$: dato che la divisione per 0 non è definita, la funzione non è totale, risultando quindi una funzione parziale.  

### Funzioni surgettive ed iniettive

Le funzioni (quindi relazioni _totali_ ed _univalenti_) si diconono surgettive quando godono della proprietà della surgettività, e iniettive quando godono della proprietà dell'iniettività.  

## Biiezioni
Le funzioni biiettive sono funzioni che sono contemporaneamente iniettive e surgettive.  
Queste funzioni vengono dette biiezioni o in biiezione.  


### Caratterizzazione attraverso relazioni invertibili
Notare che se una relazione $R$ è una biiezione, anche il suo opposto $R^{op}$ lo sarà.  

Possiamo quindi definire il concetto di relazione inversa:  

!!! abstract "Relazione inversa"
    Siano $R: A \leftrightarrow B$ e $S: B \leftrightarrow$, si dice che $S$ è l'inversa di $R$ se $R;S = Id_A$ e $S;R = Id_B$.  
    R si dice invertibile se esiste almeno una relazione inversa di R

Possiamo quindi dire che $R$ è una biezione se e solo se è invertibile

### Insiemi in biiezione

!!! abstract "Insiemi in biiezione"
    Due insiemi si dicono in biiezione se esiste una biiezione $i: A \rightarrow B$ tra di loro (o in corrispondenza uno a uno).  
    Questo può essere scritto come $A \cong B$

Questo significa che ad esempio l'insieme $Bool = \{t,f\}$ è in biiezione con $2 = \{0, 1\}$  
Allo stesso modo, se $A \cong \varnothing$, allora $A = \varnothing$. Questo perché essere in biiezione implica che le funzioni siano biiezioni. Se quindi A è in biiezione $\varnothing$, ogni elemento in $\varnothing$ avrà un corrispettivo elemento in A, ma $\varnothing$ non ha elementi, e quindi neanche A ne avrà.  

Possiamo osservare delle proprietà che possiamo osservare tra gli insiemi in biiezione:

- $A \cong A$ (Riflessività)
- Se $A \cong B$ e $B \cong C$, allora $A \cong C$ (Transitività)
- Se $A \cong B$ allora $B \cong A$ (Simmetria)

E altre:  

- $\mathcal P(A) \cong Fun(A, Bool)$ 
- $A \times (B \times C) \cong (A \times B) \times C$
- $A \times 1 \cong A$

È un buon esercizio dimostrare le proprietà appena viste

Potremmo dire che per essere in biiezione, due insiemi hanno bisogno di possedere la stessa cardinalità.  


## n-uple e sequenze

Il risultato del prodotto tra insiemi $A \times B \times C$ ha come risultato una *tripla* $(a,b,c)$  

Lo stesso procedimento si applica ad un prodotto tra n insiemi (quindi con 2 avremo le coppie, con 4 avremo le quadruple, con 5 le quintuple, e così via).  
Questo procedimento si applica per un qualsiasi numero $n \in \mathbb N$.  
Per $n=0$ esiste solo una 0-upla, denotata con $()$.  

Definiamo quindi questi oggetti in maniera più formale:
!!! abstract "Sequenze"
    Una sequenza su un insieme $A$ di lunghezza n è una n-upla ($a_0, a_1,...,a_{n-1}$) dove per ogni indice $i \in \{0,...,n-1\}, a_i \in A$.  
    L'insieme di tutte le sequenze $A^n$ è definito come $A^n = \{ (a_0, a_1,...,a_{n-1}) | (\forall i \in A \{ 0,...,n-1 \}. a_i \in A) \}$ 

Questa struttura dati è molto usata in Matematica e Fisica: quando A è l'insieme dei numeri reali $\mathbb R$, una sequenza di lunghezza n è chiamata _vettore_ di $\mathcal R^n$.  
Questo viene solitamente rappresentato in riga $(r_0, r_1,...,r_{n-1})$ o in colonna: 
$\left ( {\begin{array}r_0\\r_1\\...\\r_{n-1}\end{array}} \right )$

L'insieme di tutte le sequenze $R^n$ prende il nome di spazio vettoriale.  
In informatica queste sequenze sono chiamate _array_.

!!! abstract "Sequenze di lunghezza arbitraria"
    Una sequenza di linghezza arbitraria è una sequenza di lunghezza n (con $n \in \mathbb N$).  
    L'insieme di tutte le sequenze esistenti $A^*$ è quindi definito con l'unione di ogni possibile sequenza:  

    $$
    A^* = \bigcup _ {n \in \mathbb N} A^n
    $$
