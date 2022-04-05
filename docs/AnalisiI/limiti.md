!!! definition "Limite"
    Dato l'insieme $A \subset \reals$, la funzione $f: A \rightarrow \reals$ ed $x_0$ [punto di accumulazione](../calcoloDifferenziale#punti-di-accumulazione) per A,  
    $L \in \bar \reals$ è il limite per _x che tende a_ $x_0$ di $f(x)$ (scritto $\lim_{x \rightarrow x_0} f(x) = L$ )  
    se $\forall V$ intorno di $L$ (ovvero sull'asse delle y) esiste $u$ intorno di $x_0$ (il punto sulle x) tale che $x \in u \cap A \backslash \{x_0\} \Rightarrow f(x) \in V$  

    Quindi un x nell'intorno di U (e nel dominio della funzione), ma diverso dal punto $x_0$, "finisca" nell'intorno V di L, sull'asse delle y)  

    ![Definizione di limite grafica](assets/definizioneLimite.png){ loading=lazy height=100 style="height:400px" }

Questo significa che, dato un punto $x_0$ ed $L=f(x_0)$, quando mi muovo intorno ad $x_0$ vado a finire in un intorno di L.  

!!! tip "In tutto ciò NON ci interessa quanto vale la funzione nel punto $x_0$!"

Come per la continuità, prendiamo un intorno V di L e mi domando se esiste un intorno di $x_0$ tale che la funzione nell'intorno di $x_0$ va a finire nell'intorno di L determinato prima.  

??? info "Detto in un altro modo:"  
    $$
    \lim_{x \rightarrow a} f(x) = L \Leftrightarrow \forall \epsilon > 0 \; \exists \delta > 0 . (|x - a| < \delta \rightarrow |f(x) - L| < \epsilon)
    $$

!!! observation "Il limite può essere di un punto NON appartenente al dominio, basta sia di accumulazione"
    Nella definizione di limite non serve che $x_0$ sia nel dominio della funzione.  
    Basta che sia un [punto di accumulazione](../calcoloDifferenziale#punti-di-accumulazione) per il dominio (ovvero, un punto nel dominio o "_appiccicato_" al dominio).

Questa definizione vale quando $x_0$ e $L$ sono nei reali, che quando sono $\pm \infty$  

??? example "Dimostrazione della definizione con $x_0$ ed $L$ $\in \reals \cup {\pm \infty}$"
    === "$x_0 \in \reals, \; L \in \reals$"
        L'intorno $u$ di $x_0$ è $V=(x_0 - \delta, x_0 + \delta)$ come da definizione  
        E, sempre da definzione, $V$ intorno di $L$ (sulle y) è $V= (L - \epsilon, L + \epsilon)$  
        Possiamo quindi dire $x \in u$ (con $|x-x_0| < \delta$) e $f(x) \in V$ (ovvero $f(x_0)-\epsilon < f(x) < f(x_0) + \epsilon$ )  
        La definizione quindi è questa:  

        $$
        \lim_{x \rightarrow x_0} f(x) = L \Leftrightarrow \forall \epsilon > 0 \; \exists \delta > 0 \; . \; \biggr(x \in A, |x - x_0| < \delta \text{ e } x \ne x_0 \rightarrow |f(x) - f(x_0)| < \epsilon \biggr)
        $$

    === "$x_0 \in \reals, \; L = + \infty$"
        Stavolta, $V$ intorno di $+ \infty$ (sulle y) è una semiretta $V= (a, + \infty)$  
        Quindi $f(x) \Leftrightarrow f(x) > a$ (infinito è più grande di ogni numero reale a)  

        $$
        \lim_{x \rightarrow x_0} f(x) = + \infty \Leftrightarrow \forall a \in \reals \; \exists \delta > 0 \; . \; \biggr(x \in A, |x - x_0| < \delta \text{ e } x \ne x_0 \rightarrow f(x) > a \biggr)
        $$

    === "$x_0 \rightarrow + \infty, \; L \in \reals$"
        Quando la funzione ad infinito ha un numero nei reali, stiamo semplicemente dicendo che c'è un valore di x oltre il quale, anche se x assume un valore più grande a numero reale,

        $$
        \lim_{x \rightarrow + \infty} f(x) = L \Leftrightarrow \forall \epsilon > 0 \; \exists a \in \reals \; . \; \biggr(x > a \rightarrow |f(x) - L | < \epsilon \biggr)
        $$

    === "$x_0 \rightarrow + \infty, \; L \in + \infty$"

        $$
        \lim_{x \rightarrow + \infty} f(x) = + \infty \Leftrightarrow \forall a \in \reals \; \exists b \in \reals \; . \; \biggr(x > b \rightarrow f(x) > a \biggr)
        $$
    
    Ovviamente le stesse cose valgono anche con $- \infty$

### Parallelismo con la continuità

Il concetto di limite è molto simile a quello di continuità.  
La differenza principale è che:  

- Nel limite non guardiamo il punto $x_0$ ma il suo intorno.  
    Inoltre consideriamo solo i punti di accumulazione (quindi anche punti esterni al dominio (come 0 con la funzione $\frac 1 x$). Inoltre non consideriamo i punti isolati in quanto non sono di accumulazione)
- Nella continuità guardiamo il valore $x_0$ ed un suo intorno, considerando ogni punto nel domino (quindi anche i punti isolati)

Inoltre nella continuità $x_0$ può essere uguale ad x, quindi $x_0 = x \Rightarrow f(x) - f(x_0) = 0$  

La definizione di limite e continuità infine possono essere viste compatibili se (oltre al requisito $x \ne x_0$) si scambiano tra di loro L ed $x_0$

## Teorema dell'unicità del limite

!!! theorem "Teorema dell'unicità del limite"
    Se il limite esiste, allora è unico.  
    Questo perché dire che una funzione tende ad un valore $L_1$ per x che tende a $x_0$ significa che si avvicina a quel valore quando x si avvicina a $x_0$, quindi non può tendere contemporaneamente ad $L_2$ perché non può avvicinarsi a due valori distinti contemporaneamente.  

## Limiti destri e sinistri

!!! definition "Definzione di limite destro e sinistro"
    $A \subset \reals, x_0 \in Acc(A), x_0 in \reals$  
    $f: A \rightarrow \reals$,  l in $\bar \reals$ è il limite di f(x) per x che tende a $x_0$ da destra e si scrive

    $$
    \lim_{x \rightarrow x_0^+} f(x) =f
    $$

    Se $\forall V$ intorno di l esiste $\delta >0$ tale che $x_0 < x < x_0 + \delta, x \in A \Rightarrow f(x) \in V$.  
    Qui si possono notare due cose:

    1. Il fatto che x sia diverso da $x_0$ si può osservare dall'uso del minore stretto (quindi non mi interessa neanche in questo caso quanto vale la funzione del punto)
    2. Il motivo per il quale $x_0$ è finito (in $\reals$) è perché non ha senso avvicinare $+\infty$ da destra

    ---

    Da sinistra, se $x_0 - \delta < x < x_0, x \in A \Rightarrow f(x) \in V$

Questo significa che nella definizione di limite, si considerano solo i "_mezzi intorni_" a desta o a sinistra  

??? example "Esempio di limite da destra e da sinistra"
    Prendendo la funone $f: (-\infty, 0) \cup (0, + \infty) \rightarrow \reals$  
    Definita come  
    $f(x)= \begin{cases}
    -1 \text{ se } x < 0 \\
    1 \text{ se } x > 0
    \end{cases}$  

    ![Esempio di limite](assets/esempioLimite.png){ loading=lazy }

    In questo caso, il limite per x che tende a 0 da destra di f(x) vale 1 ($\lim_{x \rightarrow 0^+} f(x) = 1$) e quello che tende a 0 da sinistra -1 ($\lim_{x \rightarrow 0^-} f(x) = -1$).  
    
    In questo caso non esiste il limite per f(x) che tende a 0, perché il limite che tende a 0 da destra è diverso dal limite per x che tende a 0 da sinistra.  

!!! observation "Il limite esiste solo se i limiti da destra e da sinistra sono uguali"
    $$
    \lim_{x \rightarrow x_0} f(x) = L \Leftrightarrow \lim_{x \rightarrow x_0^+} f(x) = \lim_{x \rightarrow x_0^-} f(x) = L
    $$
    
    Nella definzione di limite destro si usa solo il "_mezzo intorno_" destro e stessa cosa con quello sinistro.  
    Se vengono messi insieme si ottiene la definizione di limite.  

### Funzione definitivamente positiva e negativa

!!! definition "Funzione definitivamente positiva e negativa"
    $A \subset \reals, f: A \rightarrow \reals, x_0 \in Acc(A)$  
    Si dice che $\lim_{x \rightarrow x_0} f(x) = L^+$ (con $L \in \reals$), se:  

    1. $\lim_{x \rightarrow x_0} f(x) = L$
    2. Esiste u intorno di $x_0$ tale che $x \in u \cap A \{x_0\} \Rightarrow f(x) > L$  

    Ciò significa che la funzione "tende" al valore ma da 'sopra':  
    ![Limite positivo e negativo](assets/LimitePositivo.png)

    La stessa definizione vale per $L^-$

??? example "Esempio di limite positivo"

    $$
    f(x) = \frac 1 x \qquad \lim_{x \rightarrow + \infty} f(x) = 0^+
    $$

    ![1/x](assets/func1SuX.png){ loading=lazy }

    Questo perché considerare la funzione vicino $+ \infty$, la funzione tende a 0.  
    Scegliendo una semiretta (e quindi un intervallo $(a, + \infty)$) come intorno u  
    $a > 0 \Rightarrow f(x) > 0$ (in questo caso 0=l), e quindi possiamo dire che la funzione è definitivamente positiva  
    In questo caso a noi interessa che la funzione sia positiva in un intorno del punto di cui calcoliamo il limite

### Teorema della permanenza del segno


!!! definition "Teorema della permanenza del segno"
    $A \subset \reals, f: A \rightarrow \reals, x_0 \in Acc(A)$  
    Se esisiste $\lim_{x \rightarrow x_0} f(x) = L \in \bar \reals$ e $L \ne 0$
    allora esiste un intorno u di $x_0$ tale che se $x \in A \cap u \{x_0\}$ allora f ha lo stesso segno di L.  

[44:00]


### Continuità di una funzione a destra o sinistra

!!! definition "Funzione continua a destra o sinistra" 
    Dato $A \subset \reals, x+0 in A, x_0 \in Acc(A)$  
    Se $\lim_{x \rightarrow x_{0^+}} f(x) = f(x_0)$, allora si dice che f è continua a destra in $x_0$.  
    Se $\lim_{x \rightarrow x_{0^0-} f(x) = f(x_0)$, allora si dice che f è continua a sinistra in $x_0$.  


??? example "Funzione continua a destra o sinistra"
    Riprendendo l'esempio della funzione vista prima e modificandola appena, di dà la seguente funzione:  
    $f(x)= \begin{cases}
    -1 \text{ se } x < 0 \\
    1 \text{ se } x > 0
    \end{cases}$  

    In questa funzione, il limite per x che tende a $0^+$ vale quanto la funzione a 0.  
    Quando la funzine presenta questo comportamento, viene detta funzione continua a destra.  
    Ovviamente lo stesso discorso vale anche per il discorso "a sinistra"  

## Teorema di confronto

!!! definition "Teorema di confronto" 
    $A \subset \reals, x_0 \in Acc(A), f,g: A \rightarrow \reals$  
    Se esistono $\lim_{x \rightarrow x_0} f(x) = L_1$ e $\lim_{x \rightarrow x_0} g(x) = L_2$  
    Se esiste u intorno di $x_0$ tale che $x \in u \cap A \backslash \{x_0\} \Rightarrow f(x) \le g(x)$, allora $L_1 \le L_2$.  

Ovvero, se si hanno due funzioni in cui nel grafico una delle due funzioni assume valori maggiori allo stesso punto, la disuguaglianza "_passa_" al limite. Nelle ipotesi corrette quindi:  

$$
f(x) \le g(x) \Rightarrow \lim_{x \rightarrow x_0} f(x) \le \lim_{x \rightarrow x_0} g(x)
$$

!!! observation "Il teorema non funziona con minore/maggiore stretto"
    Se $f(x) > g(x)$ potrei concludere che $\lim_{x \rightarrow x_0} f(x) < \lim_{x \rightarrow x_0} g(x)$?  
    No, perché prendendo ad esempio le funzioni $g(x) = \frac 1 x$ e $f(x) = - \frac 1 x$ su $x > 0$, entrame le funzioni tendono a 0; ed ecco che una disuguaglianza stretta diventa debole.  
    Quindi $f(x) < g(x) \Rightarrow \lim_{x \rightarrow x_0} \lim_{x \rightarrow x_0} f(x) \le \lim_{x \rightarrow x_0} g(x)$  
    
    Le disuguaglianze passano quindi al limite ma diventano deboli.  

## Teorema dei carabinieri

!!! definition "Teorema di dei carabinieri"
    $A \subset \reals, x_0 \in Acc(A), f,g, h: A \rightarrow \reals$  
    Se esistono $\lim_{x \rightarrow x_0} f(x)= L$ e $\lim_{x \rightarrow x_0} h(x)= L$ (L in questo caso ha lo stesso valore).  
    Se esiste un intorno $u$ di $x_0$ tale che $x \in A \cap u \backslash \{x_0\} \Rightarrow f(x) \le g(x) \le h(x)$, allora esiste $\lim_{x \rightarrow x_0} g(x) = L$ 

Ovvero, se abbiamo tre funzioni, dall'esistenza dei limiti di f ed h (uguali tra loro) deduco che esiste il limite di g.  
Rispetto al teorema di confronto, dove si sa che i limiti delle funzioni g ed h esistono, in questo caso non so se esiste il limite di G ma sapendo che la funzione è compresa tra due funzioni ed il limite delle due funzioni è L, deduco che il limite di g sia L.  

!!! observation 'Uso di "metà" del teorema'
    Se la funzione di sinistra va a $\pin$, spinge a $\pin$ tutto quanto (quindi ogni funzione alla destra della disequazione non può che essere qualcosa che va a più infinito).  
    Lo stesso concetto lo ho quando la parte della disequazione più a sinistra va a $\min$  
    Ho bisogno di entrambe le metà quando il limite è un numero finito ed ho bisogno delle altre funzioni per "schiaccia" sia da sopra che da sotto la funzione in mezzo.  

## Teorema di somma e prodotto di limiti

!!! definition "Teorema di somma e prodotto di limiti"
    $A \subset \reals, x_0 \in Acc(A), f,g: A \rightarrow \reals$  
    Supponiamo esistano i limiti $\lim_{x \rightarrow x_0} f(x) = L_1$ e $\lim_{x \rightarrow x_0} g(x) = L_2$ con $L_1, L_2 \in \bar \reals$  
    Allora:  

    1. Se ha senso $L_1 + L_2$, allora esiste $\lim_{x \rightarrow x_0} (f+g)(x) = L_1+L_2$
    2. Se ha senso $L_1 \cdot L_2$, allora esiste $\lim_{x \rightarrow x_0} (f \cdot g)(x) = L_1 \cdot L_2$

## Casi di indeterminazione

Il "Se ha senso" nella definizione precedente serve per escludere i **casi di indeterminazione**:

- $+ \infty \cdot - \infty$ e viceversa
- $\pm \infty \cdot 0$

### Esempi di casi di indeterminazione

??? example "Somma di $+ \infty$ con $- \infty$"
    Ponendo $f(x) = 2x$ e $g(x) = -x$  
    Le due funzioni hanno i limiti che a $+ \infty$ valgono rispettivamente $+ \infty$ e $- \infty$.  
    La loro somma è quindi questa:  

    $$
    \lim_{x \rightarrow + \infty} (f + g)(x) = \lim_{x \rightarrow + \infty} (2x - x) = \lim_{x \rightarrow + \infty} x = + \infty
    $$

    In questo caso avremmo che $(+ \infty) + (- \infty) = + \infty$

    Se invece prendo $f(x) = \frac x 2$ e $g(x) = -x$, allora i rispettivi termini per x che tende a $+ \infty$ varranno $+ \infty$ e $- \infty$  
    Ma se proviamo a fare il discorso che abbiamo appena fatto:  

    $$
    \lim_{x \rightarrow + \infty} (f + g)(x) = \lim_{x \rightarrow + \infty} (\frac x 2 - x) = \lim_{x \rightarrow + \infty} - \frac x 2 = - \infty
    $$

    In questo caso avremmo che $(+ \infty) + (- \infty) = - \infty$  

    Dato che il risultato di una somma deve essere costante, scegliamo di trattare le operazioni tra infiniti come casi particolari e quindi di non risolverle algebricamente.  
    Non ha senso parlare di somma.  
    Per questo motivo $(+ \infty) + (- \infty)$ non ha senso e si dice che il limite è indeterminato.  

    ---

    Il prodotto $0 * + \infty$ si considera allo stesso modo rispetto alla somma:  
    Considerando la funzione $f(x) = \frac 1 x$ (che tende a 0) e la funzione $g(x) =x$, che tende a $+ \infty$

    $$
    \lim_{x \rightarrow + \infty} (\frac 1 x \cdot x) = \lim_{x \rightarrow + \infty} 1 = 1
    $$

    Ed in questo caso avremmo $(0) \cdot (+ \infty) = 1$  

    Prendendo invece $f(x) = \frac 1 x$ (che tende a 0) e la funzione $g(x) =x^2$, che tende a $+ \infty$

    $$
    \lim_{x \rightarrow + \infty} (f \cdot g)(x) = \lim_{x \rightarrow + \infty} (\frac 1 x \cdot x^2) = \lim_{x \rightarrow + \infty} x = + \infty
    $$

    Quindi avremmo $0 \cdot (+ \infty) = + \infty$.  
    Quindi $0 \cdot (+ \infty)$ non ha senso.  

### Risoluzione dei casi di indeterminazione

!!! theorem "Una funzione che tende ad un numero finito è limitata"
    $A \subset \reals, x_0 \in Acc(A), f: A \rightarrow \reals$  
    Se esiste $\lim_{x \rightarrow x_0} f(x) = L$ e $L \in \reals$ ($L$ non è $\pm \infty$), allora f è limitata in un intorno di $x_0$.  
    Ovvero esiste un intorno $u$ di $x_0$ ed $\exists M \in R, M > 0$ tale che $x \in u \cap A \Rightarrow |f(x)| \le M$

Quindi una funzione che tende ad un numero finito, vicino al punto deve essere finita (limitata).  

??? example "Esempio di funzione limitata che tende a 0"
    $f(x) = \frac 1 x$ è limitata in un intorno di $+ \infty$ perché ($\lim_{x \rightarrow + \infty} f(x) = 0$

    E da un certo punto in poi la funzione sta tra $\pm M$, dato che la funzione tende ad un numero finito (e quindi da un certo punto in poi è finita, essendo la funzione limitata)

    ![Esempio di funzione limitata](assets/funzioneLimitataEsempioIndeterminazione.png)

#### Funzione infinitesima

!!! definition "Funzione infinitesima, divergente e convergente"
    Se $\lim_{x \rightarrow x_0} f(x) = 0$, allora si dice che f è **infinitesima** per x che tende a $x_0$.  
    Se $\lim_{x \rightarrow x_0} f(x) = + \infty$, si dice che f diverge positivamente per x che tende ad $x_0$.  
    Se $\lim_{x \rightarrow x_0} f(x) = - \infty$, si dice che f diverge negativamente per x che tende ad $x_0$.  
    Se $\lim_{x \rightarrow x_0} f(x) = L$ e $L \in \reals$, f converge a L per x che tende ad $x_0$.  

!!! observation ""
    Se f è limitata inferiormente in un intorno di $x_0$ e $\lim_{x \rightarrow x_0} g(x) = + \infty$, allora il limite per $\lim_{x \rightarrow x_0} (f+g)(x) = + \infty$.  
    Se f è limitata superiormente in un intorno di $x_0$ e $\lim_{x \rightarrow x_0} g(x) = - \infty$, allora il limite per $\lim_{x \rightarrow x_0} (f+g)(x) = - \infty$.  
    Se f è limitata superiormente in un intorno di $x_0$ e $\lim_{x \rightarrow x_0} g(x) = 0$, allora il limite per $\lim_{x \rightarrow x_0} (f \cdot g)(x) = 0$.  
    Una funzione infinitestima per una limitata è una funzione infinitesima  

La somma f + g è indeterminata quando una funzione va a + infinito ed una a - infinito; quindi mi basta che la funzione sia limitata inferiormente (perché è un caso in cui la funzione non va a - infinito) per dire che la somma va a più infinito (e viceversa).  
Nel caso di prodotto di una funzione limitata per una infinitesima: per rimuovere l'indeterminazione mi "basta dire" che la seconda funzione è limitata.  

!!! observation "Tutte queste cose appena evidenziate derivano dal teorema dei carabinieri"

??? example "Esempio: Applicazione del teorema sul limite della somma con funzioni senza limite"
    Prendendo la funzione $\limit {+ \infty} x + sin(x)$, possiamo scomporla in due:  
    $\limit {+ \infty} x = + \infty$  
    $\limit {+ \infty} sin(x)$ che non esiste  
    In questo caso non si può applicare il teorema sul limite della somma (che richede che entrambi i limiti esistano).  
    Tuttavia sin(x) è una funzione limitata inferiormente; Quindi:  

    $$
    \limit \pin x + sin(x) = \pin
    $$

    Questo perché $x-1 \le x+sin(x)$ (perché $sin(x)$ è limitat inferiormente): per il teorema dei carabinieri $x-1$ tende a $\pin$, quindi anche $x + sin(x)$ tende a $\pin$.

