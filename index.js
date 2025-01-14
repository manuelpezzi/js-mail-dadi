/*Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota:
Non è necessario provvedere alla validazione delle email
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento!*/
/*
1- creare array lista mail
2-creare un if per controllare se la mail è tra gli invitati
3-creare un promt per chiedere la mail dell invitato se è o non è tra gli invitati stampare l'allert che è o non è stato invitato all evento utilizzando un ciclo for
*/

let emailInvitati = [
    "pezzimanuel@gmail.com",
    "friz@gmail.com",
    "fizzjerald@gmail.com",
    "caciocavallo@gmail.com",
    "ficorifero@gmail.com",
    "ventidisettembre@gmail.com"

]
let emailUtente = prompt("inserisci qui la tua mail")

let emailTrovata = false
for (let i = 0; i < emailInvitati.length; i++) {
    if (emailUtente === emailInvitati[i]) {
        emailTrovata = true;

    }
}
if (emailTrovata) {
    console.log("benvenuto al party")
} else {
    console.log("peccato sarà per la prossima festa")
}


//dado casuale
/*
1-crare un dado per il giocatore ed uno per il computer con il math.floor e il math.random con questa formula math.floor(math.random()*6)+1
2-creare un console.log con il punteggio del giocatore e uno col punteggio del computer
3-creare gli if per decretare il vincitore!
 */
let punteggioDadoGiocatore = Math.floor(Math.random() * 6) + 1 //punteggio giocatore
let punteggioDadoComputer = Math.floor(Math.random() * 6) + 1 // punteggio computer

console.log(punteggioDadoGiocatore)
console.log(punteggioDadoComputer)

if (punteggioDadoGiocatore > punteggioDadoComputer) {
    console.log("il giocatore ha vinto")
} else if (punteggioDadoComputer > punteggioDadoGiocatore) {
    console.log("il computer ha vinto")
} else {
    console.log("è patta")
}