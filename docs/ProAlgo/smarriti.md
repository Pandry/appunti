
--- 

Questa roba non so dove vada 

### Funzioni

Parametri formali

Passaggio per riferimento e per valore

### Record di attivazione

Contiene: 

- Identità
- Chiamante 
- A chi restituire
- Corpo della funzione corrente

---


# valutazione di un algoritmo

Analizzare un algoritmo significa predire le risorse che l'algoritmo richiederà.  
Si possono predire risorse come la memoria, la larghezza di banda per la comunicazione o qualche altra risorsa prima, ma tendenzialmente si tende a calcolare il tempo di computazione.  
Per farlo è necessario fare uso di un modello che rappresenta l'implementazione che andremo ad usare (e quindi un modello per le risorse che andremo ad utilizzare).  

Il tempo di esecuzione di un algoritmo su un dato input è il numero di operazioni primitive (o passi) eseguiti.  
È conveniente definire la nozione di passo per essere il più astratta e distaccata dalla macchina possibile.  

Il caso peggiore del tempo di esecuzione di un algoritmo ci fornisce il numero massimo di tempo che l'algoritmo impiegherà per un dato input. Ciò fornisce la garanzia che l'algoritmo non impiegherà mai più tempo del caso peggiore.  

Nei casi particolari nei quali si è interessati ai casi medi, è necessario ricorrere a tecniche di analisi probabilistica: potrebbe infatti non essere scontato cosa costituisce l'input di un problema medio.  

È possibile poi applicare uno strato di astrazione: l'ordine di crescita (o rapporto di crescita): da un polinomio, prendiamo solo il monomio di grado superiore, ignorando i restati monomi di ordine inferiore. Oltre questo, ignoriamo anche il coefficiente del monomio che prendiamo in considerazione, che non risulta essere troppo influente sulla rapporto di crescita per grandi input.  

Possiamo quindi comparare 2 algoritmi sulla base della loro efficienza.  

## La recurisione e l'approccio divide-and-conquer

Si basa su 3 concetti:

- Divide: dividere il problema in sottoproblemi che sono istanze più piccole del problema base
- Conquer: Risolvere il sottoproblema
- Combine: Combinare le soluzioni dei sottoproblemi in maniera recursiva fino a generare una soluzione per il problema originale

La recursione termina quando arriva 'alla fine della corsa' (ovvero non è più possibile dividere il problema in ulteriori sottoproblemi dello stesso tipo dei precedenti).  

Questo tipo di approccio è spesso utilizzato da algoritmi ricorsivi

!!! definition "Definizione di algoritmo recursivo"
    Si dice algoritmo recursivo quell'algoritmo che come parte della sua soluzione, chiama sé stesso recursivamente una o più volte per risolvere un sottoproblema strettamente correlato. 

### Analisi degli algoritmi divide-and-conquer

Quando un algoritmo effettua una chiamata recursiva a sé stesso, spesso è possibile descrivere il suo tempo di esecuzione facendo uso di una equazione (o relazione) di ricorrenza, che descrive il tempo di esecuzione dell'algoritmo dato un problema di grandezza n.  

!!! definition "Ricorrenza"
    La ricorrenza è un'equazione o diseguaglianza che descrive una funzione in termini di sé stessa ma su valori più piccoli

Per risolvere un'equazione di ricorrenza (ovvero trovare il $\Theta$ asintotico _(che tende ad infinito)_), ci sono vari metodi:

- Il metod[o di sostituzione  
    Il metodo di sostisuzione si basa sull'indovinare un limite, per poi fare uso dell'induzione matematica per dimostrarlo 
- Con un albero di ricorrenza  
    Un albero di ricorrenza ci permette di convertire il problema in una struttura ad albero, in cui ogni nodo rappresenta il costo che si ha ai vari livelli della ricorsione.  
    Esistono quindi tecniche per sommare i vari limiti e risolvere quindi la relazione
- Il master theorem
    Il master theorem è un teorema che ci permtte di risolvere velocemente equazioni della forma $aT(\frac{n}{b}) + f(n)$, con $a \geq 1$ che rappresenta il numero di sottoproblemi e $b > 1$, che descrive la grandeza di ogni sottoproblema e $f(n)$ che descrive il tempo necessario ad effettuare la combinazione dei sottoproblemi  
    **RISCRIVERE SEGUENDO GLI APPUNTI DEL PROF**

---

se io ho la chiamata ricorsiva n/2 allora è log in base 2 di n  
n/4 l'altezza è log in base 4 di n  
il numero di chiamate ricorsive è il numero di figli di ogni nodo  



## Tipologia di linguaggi
### Linguaggio interpretato
### Linugaggio compilato
