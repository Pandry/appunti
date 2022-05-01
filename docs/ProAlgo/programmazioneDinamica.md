# Programmazione dinamica

Un problema risolvibile in programmazione dinamica è simile ad un algoritmo di ricorsione, in cui però si presentano pochi sottoproblemi diversi che si presentano più volte.  
È quindi un problema di ottimizzazione.  
La soluzione ai problemi che si ripresentano più volte viene quindi salvata per quando servirà nuovamente il risultato.  
Questo ci permettere di risolvere ogni sottoproblema una ed una sola volta.  

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

### Zaino




