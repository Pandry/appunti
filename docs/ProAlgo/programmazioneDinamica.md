# Programmazione dinamica
<!-- L48 -->

La programmazione dinamica è una tecnica algoritmica che ci permette di operare su dati non disgiunti (a differenza di quello che può essere la ricorsione).  
Questo significa che quello che viene fatto è ottimizzare ogni sottoproblema al più una volta (mentre in un algoritmo ricorsivo, è possibile trovarsi a risolvere più volte lo stesso problema)

Un problema risolvibile in programmazione dinamica è simile ad un algoritmo di ricorsione, in cui però si presentano pochi sottoproblemi diversi che si presentano più volte.  
È quindi un problema di ottimizzazione.  
La soluzione ai problemi che si ripresentano più volte viene quindi salvata per quando servirà nuovamente il risultato.  
Questo ci permettere di risolvere ogni sottoproblema una ed una sola volta.  

Si può pensare alla ricorsione come un approccio top-down, mentre alla dinamica come un approccio bottom-up.  


I problemi risolvibili attraverso la programmazione dinamica:

- Devono avere sotto struttura ottima
    La soluzione ottima del problema deriva dalle soluzioni ottime dei sottoproblemi

- I problemi devono essere sovrapponibili (si ripetono)
    Il problema deve presentare pochi sottoproblemi ripetuti più volte.  
    La soluzione deve essere polinomiale nella dimensione dell'input

La struttura di una soluzione scritta in programmazione dinamica è divisa in 4 fasi:

1. Definizione dei sotto problemi e dimensionamento della tabelle
2. Soluzione dei sottoproblemi e memorizzazione della soluzione nella tabella
3. Definizione delle regole di riempimento della tabella (in che modo mettiamo i valori nella tabella) 
    Regole di ricorsione per ottenere la soluzione di un sottoproblema a partire dalle soluzioni dei sottoproblemi già risolti
4. Restituzione del risultato relativo al problema originale


## Esempi

### Longest Common Subsequence
Date 2 stringhe di caratteri, trovare la sotto sequenza comune più lunga

### Edit distance
È un algoritmo che minimizza la 'distanza' (in termini di operazioni) per trasformare una stringa in un'altra.  

### Zaino
<!-- L51 -->
È un esempio di un algoritmo che trova l'ottimo globale attraverso una sottostruttura ottima  

La strategia è greedy/euristica: Ad ogni passo, si effettua una scelta localmente ottima per trovare l'ottimo globale.  

??? tip "Algoritmo euristico"
    L'euristica è una tecnica che non garantisce che la strategia sia ottima e quindi conduca alla miglior soluzione auspicabile.  

Il problema dello zaino è pseudo-polinomiale

!!! definition "Algoritmo pseudo-polinomiale"
    Un algoritmo pseudopolinomiale è un algoritmo il cui costo è polinomiale nel numero delle operazioni, ma esponenziale nello spazio (nel caso dello zaino, è esponenziale nel numero di bit memorizzati)