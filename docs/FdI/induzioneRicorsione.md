# Induzione Strutturale e Ricorsione
 
## L'induzione strutturale
L'induzione strutturale ci permette di:

- Definire in manierainduttiva delle strutture (dati)
- Definire induttivamente delle funzioni sulle strutture
- Dimostrare delle proprietà sulle strutture dati usando il principio di Induzione

Il tutto in maniera generaleed usando una struttura chiamata `termini`, definiti parametricamente su una `segnatura`.  

!!! abstract "Definizione di segnatura"
    Una **segnatura** è una famiglia di insiemi indicizzata da $\mathbb{N}$ ($\mathcal{F} = \{\mathcal{F}_n\}_{n \in \mathbb{N} }$).  
    Gli elementi della famiglia sono detti **simboli**.  
    $\mathcal{F}_n$ è l insieme dei simboli di arietà n (o con n argomenti).  
    I simboli di arietà 0 sono detti **simboli di costante**