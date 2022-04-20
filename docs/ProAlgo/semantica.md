# Semantica
Si divide in  

- Statica (denotazionale)  
    La semantica statica non coinvolge l'esecuzione  
    Effettua un controllo sui tipi e se questi vengono usati coerentemente nel resto del programma (associa ad ogni identificatore (variabile) un tipo)  
- Dinamica (operazionale)  
    La semantica dinamica si occupa di **simulare** l'esecuzione del programma: come agisce un'istruzione in memoria in una macchina astratta

Si occupa quindi di mappare un'identificatore ed il suo valore su T:  

$$
\underbrace{\text{ambiente statico } \Delta}_{\text{funzione}}: \underbrace{id}_{identificatore} \cup Val \to \underbrace{T}_{\text{tipo  }} \cup T_{\text{loc}}
$$

## Tipi di comandi

<!-- Capire cosa significhi il vdash; Dovrebbe essere l'applicazione della regola, tipo un \to -->

### Comando
Un comando non ha effetti sull'ambiente (che a questo punto può essere pensato come alla memoria)  
Un comando ben formato ha la forma $C: \Delta \vdash_C C$

### Espressione
Un'espressione porta ad un valore, che ha quindi anche un tipo.  
Se un'espressione è ben formata, posso determinarne il tipo.  
Un'espressione ben formata ha la forma $E: \Delta \vdash_E E : \tau$ (dove tao ($\tau$) è il tipo)  
Una volta associata la semantica statica delle espressioni, diventa possibile associare un tipo ad ogni espressione corretta, operando per induzione sulla struttura della grammatica.

### Dichiarazione
Una dichiarazione ha un'effetto sull'ambiente, in quanto quando si dichiara qualcosa, l'ambiente ($\Delta$) cresce  
Ha la forma $D: \Delta \vdash_D D : \Delta^I$  
Dove $\Delta$ è l'ambiente, D è la dichiarazione e $\Delta^I$ è il nuovo ambiente, esteso dopo la dichiarazione

## Semantica Statica
La semantica statica si occupa di verificare formalmente un programma dal punto di vista della sintassi e delle regole dei tipi utilizzati, considerando quindi le sue espressioni.  

Le regole della semantica statica sono codificate sotto forma di regole d'inferenza, in cui se una serie di **premesse** risulta essere soddisfatta, allora ciò **implica** una **conclusione**.  

Un'espressione si dice ben formata quando, partendo da un certo ambiente statico, all'espressione posso associare un tipo $\tau$ (letto tao)  
Un'espressione è inoltre composta da letterali (come costanti, identificatori, etc...), che a loro volta sono composti da operatori unari e binari (e simboli dell'alfabeto)  

Si basa su tre principi:  

- **Regole di inferenza** (scritte come $\frac{\text{premesse}}{\text{conclusione}}$)  
    Una regola di inferenza ci permette di dire che se è vera la premessa, allora è vera anche la conclusione:  
    $\frac{A_1,...,A_n}{B}$ equivale a $A_1 \land ... \land A_n \then B$  
    Se ogni premessa $A_i$ è vera, allora B è vera
- **Assioma** (regole di inferenza senza premessa, quindi sempre vere)  
    $\frac{\varnothing}{B} \equiv \frac{}{B} \equiv \varnothing \to \varnothing \So \bar B$
- **Dimostrazione**  
    Si effettua con un albero, in cui ogni componente è una parte della regola da dimostrare:  
    La radice è l'asserzione da dimostrare  
    Le foglie sono assiomi
    I nodi intermedi sono costruiti applicando le regole semantiche (regole di inferenza)

### Principio della composizionalità

- Componenti elementari  
    Produzioni della grammatica associate a regole semantiche
- Composizione  
    Composizione, che permette di arrivare alla sematica di tutte le espressioni possibili:  
    Il significato di un'espressione è una funzione del significato dei suoi componenti elementari

### Principio di oscuramento ed estensione
Oscuramento in semantica ed estensione

$$
\Delta \underbrace{[\Delta^I]}_{\text{Esteso}} (x) = \begin{cases}
\Delta^I(x) & \text{ se } \Delta^I(x) è definito \\
\Delta(x)   & \text{ altrimenti}
\end{cases}
$$

## Scoping
Lo scope è la porzione di un programma in cui l'identificatore può essere referenziato.  

Un identificatore si dice **legato** se esiste una dichiarazione a cui si "appoggia".  
Non è legato (**libero**) quando l'identificatore non è presente nell'ambiente $\Delta$.  
Un identificatore usato senza essere stato definito o al di fuori dello scope di dichiarazione si dice libero.  
Se esistono occorrenze di identificatori liberi, il programma non è corretto staticamente.  

Quando un identificatore è definito, si dice che è un **posizione di definizione** e costituisce quindi un'**occorrenza di legame** per le altre occorrenze nello scope.  

Quando l'identificatore viene usato all'interno dello scope di definizione, si dice legato dalla sua occorrenza di legame corrispondente.  


### Block scope

Il block scope delimita il campo d'azione dello scope basandosi su blocchi di codice.  
Una valora è visibile solo nella parte di blocco seguente a quella in cui è stata definita (ed eventuali blocchi annidati a quello corrente e successivi alla dichiarazione).  
La vita di una variabile inizia quindi quando viene dichiarata, e termina quando il blocco di definizione termina.  

#### Information hiding 
Un identificatore definito in un blocco annidato interno, nasconde/oscura la visibilità dell'identificatore con lo stesso nome ma definito nel blocco più esterno  

### Scoping Statico

Posso vedere la vita dell'identificatore a tempo di compilazione attraverso l'albero sintattico

Lo scoping permette di decidere se un identificatore è legato e, nel caso, da quale occorrenza di legame dell'albero di sintassi

### Scoping Dinamico

Non è ricavabile a tempo di compilazione


## Principio del privilegio minimo
Ogni versione del programma deve avere i privilegi necessari per accedere alle risorse ed identificatori minimi necessari per svolgere il sui compito

## Type checking

Riceve un albero di sintassi le cui foglie sono le stringhe del linguaggio  
Funziona tra due insiemi, che associa significati e simboli  
Il dominio sintattico non è finito
Indicare i componenti elementari (`for`, `while`, `+`, `*`)  
Il significato di una qualunque frase viene fornito in componenti elementari  
Serve una caratterizzazione formale e finita del dominio semantico