1. Sintassi e grammatiche
    - Definizione di grammatica  
      > Una grammatica è una quadrupla $G = \langle N, \Sigma, P, S \rangle$  
      > Dove:  
      >
      > - $N$ sono i simboli non terminali
      > - $\Sigma$ sono i simboli terminali
      > - $P$ sono le produzioni
      > - $S$ è il simbolo iniziale
    
    - Definizione di linguaggio  

        > Un linguaggio è l'insieme delle stringhe ammissibili (in base al linguaggio, che può essere generativo, riconoscitivo o algebrico), sottoinsieme della chiusura positiva dell'alfabeto  
    
    - Le fasi di un compilatore  

        > - Analizzatore lessicale/lexer/scanner
        > - Analizzatore sintattico/parser
        > - Analizzatore semantico
        > - Eventuale passaggio di ottimizzazione del codice
        > - Generatore del codice oggetto
        > - Linker

    - BNF e sintassi di un linguaggio di programmazione  
     
        > Backus-Naur form, è una sintassi per esprimere in modo conciso le produzioni di una grammatica in funzione dei simboli non terminali.  
        > La sintassi è $N ::= (N) | NN$ ,dove N è un non terminale ed i caratteri esempio `(` e `)` fanno parte dei terminali. Più produzioni sono separate da una barra verticale (`|`)

2. Linguaggio L (vedi LinguaggioL-CheatSheet)
    - BNF e Sintassi
    - Regole semantica statica
        - Espressioni
        - Comandi
        - Dichiarazioni
        - Funzioni: dichiarazione e chiamata
        - Funzioni ricorsive (dichiarazione e chiamata)
    - Scoping e blocchi (identificatori liberi e legati)
    - Record di attivazione
    - Regole semantica dinamica
        - Espressioni
        - Comandi
        - Dichiarazioni
        - Funzioni: dichiarazione (lambda astrazione e chiusure) e chiamata
        - Funzioni ricorsive (dichiarazione e chiamata)
3. Complessità degli algoritmi
    - Definizione formale di O, Ω, Θ, o, ω (vedi Cormen)
4. Algoritmi di ordinamento
    - Ordinamento per confronti
        - Insertion e Selection sort
            - Dimostrazione di correttezza e complessità (vedi Cormen)
        - Mergesort
            - Dimostrazione di correttezza e complessità (vedi Cormen)
        - Quicksort (vedi Cormen)
            - Dimostrazione di correttezza
            - Complessità al caso peggiore
            - Dimostrazione complessità al caso medio
        - Dimostrazione lower bound Ω(n log n) problema di ordinamento per
        confronti
    - Ordinamenti senza confronti (vedi Cormen e appunti)
        - Counting sort
        - Radix sort
5. Divide-et-impera: definizione e problemi
6. Il problema delle selezione: selezione randomizzata (vedi Cormen)
7. Equazioni di ricorrenza e loro risoluzione (vedi Cormen)
    - Metodo iterativo
    - Risoluzione mediante albero
    - Master Theorem
        - Enunciato
        - Dimostrazione
8. Ricerca di un elemento in una collezione
    - Ricerca lineare (progettazione algoritmo, correttezza, limite inferiore al problema e complessità della soluzione progettata)
    - Ricerca binaria mediante divide-et-impera (progettazione algoritmo, correttezza e complessità)
9. Heap
    - Proprietà strutturale e sulle informazioni (di massimo e di minimo)
        
        > Albero quasi-completo e i cui nodi non foglie hanno una chiave di valore maggiore (quando di massimo) rispetto ai due figli

    - Costruire uno heap (correttezza e complessità)
        
        > Richiede uso di heapify, ha costo O(altezza)

    - Inserimento di un nodo e estrazione della radice

        > Inserimento: 
        > Si inserisce una nuova foglia a sinistra e si procede con un heapify
        > Estrazione della radice:
        > Si sostituisce l'ultima foglia con la radice, si elimina la radice e si procede con il max-heapify

    - Heapsort (correttezza e complessità)
10. Tabelle e funzioni hash (vedi Cormen)
    - Gestione collisioni
        - Chaining (liste di trabocco)
        - Probing-Open hash (lineare, quadratico, doppio hash)
        - Costi e complessità (dimostrazioni al caso medio, almeno l’idea
        intuitiva)
11. Alberi binari
    - Definizione, e altezza nel caso peggiore e ottimo
    - Visite: simmetrica, anticipata e posticipata
12. Alberi Binari di Ricerca (vedi Cormen)
    - Definizione, e altezza nel caso peggiore e ottimo
    - Interrogazioni (ricerca, Min, Max, Successore, Predecessore) e operazioni di
modifica (inserimento, cancellazione) e loro costi
13. 2-3 Alberi (dispensa di Pino Italiano, su Classroom alla Lezione 46 - 2022)
    - Definizione, e altezza nel caso peggiore e ottimo
    - Operazioni di ricerca, inserimento e cancellazione e loro costi
14. Programmazione dinamica
    - Longest Common Subsequence
    - Edit Distance
    - Zaino
15. Greedy (zaino frazionario)
16. Grafi
    - BFS (vedi Cormen, con dimostrazione di: Lemma 22.1, 22.2, e Teorema
    22.5, almeno l’idea intuitiva)
    - DFS (vedi Cormen, con dimostrazione dei Teoremi 22.7, 22.8 e 22.10,
    almeno l’idea intuitiva)
    - Topological sort (vedi Cormen, con dimostrazione del Lemma 22.11 e del
    Teorema 22.12)
17. P - NP (vedi appunti)
    - Definizioni di P, NP, NP-arduo, NP-completo
    - Esempio di riduzione 3SAT