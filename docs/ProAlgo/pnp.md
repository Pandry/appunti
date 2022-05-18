# Problemi computazionali
<!-- L59 -->

Come abbiamo visto, i problemi si basano su un modello computazionale (che in genere assimiliamo alla macchina di Turing), degli algoritmi e delle strutture dati.  

Tendenzialmente abbiamo 3 macrocategorie di problemi, in ordine di complessità:  

- Decisioni/soddisfacibilità (SAT/B-SAT)  
    Un problema decisionale è un problema il cui codominio è un valore booleano ($\{true, false\}$)
- Ricerca
    Un problema di ricerca è un problema il cui codominio è un numero. Ci aspettiamo quindi che il programma restituisca un numero  
- Ottimizzazione
    Un problema di ottimizzazione si occupa di trovare la migliore soluzione.  
    Risolvere un problema di ottimizzazione è almeno tanto difficile quanto risolvere un problema decisionale.  

Il problema di P=NP (dove NP è Nondetermistic Polynomial-time) si basa sul fatto che nessuno ha provato che il limite inferiore di un problema NP è maggiore dall'essere polinomiale.  

<!-- Time(f(n)) e Space(f(n)) sono gli insiemi dei problemi decisionali risolvibili in tempo e spazio O(f(n)) -->

Possiamo trovare quindi diverse classi di problemi:  

- Classe P (SoT):  
    Appartengono alla classe dei problemi polinomiali tutti quei problemi il cui numero di passi elementari per giungere alla soluzione sono al più (dati $c,n_0 > 0$) $n^c \forall n > n_0$.  
    Sono quindi quei problemi risolvibili in un tempo polinomiale  
    <!--
    $P=U_{c \ge 0} Time(n^c)$  
    $PSpace=U_{c\ge 0} Space(n^c)$  
    $P \subseteq PSpace$  
    $PSpace \subseteq ExpTime$  
    -->
- Classe NP  
    I problemi nella classe NP (Nondetermistic Polynomial-time) sono problemi di decisione che sono verificabili in tempo polinomiale<!-- (da una macchina di Turing)--><!-- o problemi risolvibili da una macchina di Turing non deterministica (che è assimilabile al concetto di [automa non deterministico](../../FdI/linguaggi/?h=determinist#automi-deterministici-e-non) )-->.  
    Un esempio può essere dato dal trovare i due numeri primi dato il prodotto tra i due: un'operazione estremamente difficile da effettuare ma banale nella verifica

- Classe NP-Hard  
    Questa classe può essere pensata in modo informale come "tutti i problemi almeno difficili quanto i problemi più difficili in NP"  
    Questo tipo di problema può essere pensato come ad un insieme di sottoproblemi in cui se uno di questi sottoproblemi potesse essere calcolato in tempo costante <!--(con un oracolo)-->, renderebbe l'algoritmo polinomiale.

- Classe NP-completi  
    I problemi NP-complete sono i più difficili problemi per i quali una soluzione può essere verificata in fretta (in tempo polinomiale).  
    Un problema è NP-completo se è NP e NP-Hard

![](assets/P_np_np-complete_np-hard.svg)

<!--
$P \cap Exptime = \varnothing$, letterali: x,y,z
Espressione congiuntiva: una proposizione espressa come congiunzione di clausole.  
Quantificata: predecuto da quantificati esistenzali ed universali che legano tutte le variabili. 
Certificato: una soluzione per un problema
NP classe di problemi che ammettono certificati verificabili in tempo polinomiale
$P \subseteq NP$  
$NP \subseteq PSpace$
-->