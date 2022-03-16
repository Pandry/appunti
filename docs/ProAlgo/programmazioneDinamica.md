# Programmazione dinamica

Un problema risolvibile in programmazione dinamica è simile ad un algoritmo di recursione, in cui però si presentano pochi sottoproblemi diversi che si presentano più volte.  
È quindi un problema di ottimizzazione.  

I problemi risolvibili attraverso la programmazione dinamica:

- Devono avere sottostruttura ottima
    La soluzione ottima del problema deriva dalle soluzioni ottime dei sottoproblemi

- I problemi deovono essere sovrapponibili (si ripetono)
    Il problema deve presentare pochi stottoproblemi riptetuti più volte.  
    La soluzione deve essere polinomiale nella dimensione dell'input

La struttura di una soluzione scritta in programmazione dinamica è divisa in 4 fasi:

1. Definizine dei sottoprobemi e dimensionamento della tabelle
2. Soluzione dei sottoproblemi e memorizzazione della soluzione nella tabella
3. Definizione delle regole di riempimento della tabella (?) 
    Regole di ricorsione per ottenere la soluzione di un sottoproblema a partire dalle soluzioni dei sottoproblemi già risolti
4. Restituzione del risultato relativo al problema originale


Longest Common Subsequence
Date 2 stringhe di caratteri, trovare la sottosequenza comune più lunga
