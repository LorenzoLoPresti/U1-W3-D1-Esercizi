/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
console.log(`
------------------ esercizio 1 -------------- 
`);

function area(l1, l2) {
    if (typeof l1 !== 'number' && typeof l2 !== 'number') {
        console.log(`Ops nessuno dei due è un numero`);
    } else if (typeof l1 !== 'number' || typeof l2 !== 'number') {
        console.log(`Ops uno dei due valori non è un numero`);
    } else {
    console.log(`L'area del rettangolo sarà: ${l1 * l2}`);
    }
};

area(2, 3);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log(`
------------------ esercizio 2 -------------- 
`);

function crazySum(x, y) {
    if (x !== y) {
        const somma = x + y
        console.log(`la somma dei due valori è: ${somma}`);
        return somma
    } else if (x === y) {
        const sommaPer3 = (x + y) * 3
        console.log(`la somma dei due valori moltiplicata per 3 è: ${sommaPer3}`);
        return sommaPer3
    }
};

crazySum(23, 25);
crazySum(2, 2);

let risultato = crazySum(23, 25)
console.log(risultato);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

console.log(`
------------------ esercizio 3 -------------- 
`);

function crazyDiff (x){
    if (x <= 19) {
        const differenzaAssoluta = 19 - x
        console.log(`la differenza assoluta sarà: ${differenzaAssoluta}`);
        return differenzaAssoluta
    } else if (x > 19){
        const differenzaAssolutaPer3 = (x - 19) * 3
        console.log(`la differenza assoluta per 3 sarà: ${differenzaAssolutaPer3}`);
        return differenzaAssolutaPer3
    }
}

crazyDiff(14)
risultato = crazyDiff(21)
console.log(risultato);



/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

console.log(`
------------------ esercizio 4 -------------- 
`);

function boundary(n) {
    if (n === Math.floor(n)){
        if (n >= 20 && n <= 100){
            const boundary = true
            console.log(`${n} è: ${boundary}`);
            return boundary
        } else if (n === 400){
            const boundary = true
            console.log(`${n} è: ${boundary}`);
            return true
        } else if (n > 100){
            const boundary = false
            console.log(`${n} è: ${boundary}`);
            return boundary
        }
    } else {
        const boundary = false
        console.log(`${n} è: ${boundary}`);
        return boundary
    }
}

boundary(100)
boundary(20)
boundary(400)
boundary(20.67)

risultato = boundary(101)
console.log(risultato);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

console.log(`
------------------ esercizio 5 -------------- 
`);

function epify(x) {
    if (x.indexOf('EPICODE') === 0){
        const epicode = x
        console.log(epicode);
        return epicode
    } else if (x.indexOf('EPICODE' !== 0)) {
        const addEpicode = 'epicode '.toUpperCase()
        const epicode = addEpicode + x
        console.log(epicode);
        return epicode
    }
}

epify('è un corso di formazione per principianti')
epify('EPICODE è un corso di formazione')


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

console.log(`
------------------ esercizio 6 -------------- 
`);

function check3and7(x){
    if (x >= 0) {
        if (x % 3 === 0 && x % 7 === 0) {
            console.log(`${x} è un multiplo sia di 3 che di 7`);
        } else if (x % 3 === 0){
            console.log(`${x} è un multiplo di 3`);
        } else if (x % 7 === 0){
            console.log(`${x} è un multiplo di 7`);
        } else {
            console.log(`${x} non è multiplo ne di 3 ne di 7`);
        }
    } else {
    console.log(`${x} non è un numero positivo`);
    }
}

check3and7(-14)
check3and7(3)
check3and7(7)
check3and7(21)
check3and7(4)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

console.log(`
------------------ esercizio 7 -------------- 
`);

function reverseString(x) {
    let reverted = x.split('')
    reverted = reverted.reverse()
    reverted = reverted.join('')
    console.log(reverted);
}

reverseString('I topi non avevano nipoti')
reverseString('EPICODE')

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log(`
------------------ esercizio 8 -------------- 
`);

function upperFirst(x) {
    let uppercase = x.slice(1)
    let iniziale = x.charAt()
    let maiuscola = iniziale.toUpperCase()
    uppercase = maiuscola + uppercase
    console.log(uppercase);
}

upperFirst('spero cominci con la maiuscola')

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
console.log(`
------------------ esercizio 9 -------------- 
`);

function cutString(x) {
    let fraseTagliata = x.slice(1)
    fraseToArray = fraseTagliata.split('')
    fraseToArray.pop()
    fraseTagliata = fraseToArray.join('')
    console.log(fraseTagliata);
}

cutString('Questi esercizi sono molto belli')

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

console.log(`
------------------ esercizio 10 -------------- 
`);

function giveMeRandom(n) {
    const array = []
    if (typeof n === 'number'){
        for (let i = 0; i < n; i++) {
            let numero = Math.floor(Math.random()*10)
            array.push(numero)
            //let numero = Math.floor(Math.random()*10)
            }
        return array
    } else {
        console.log('Il valore inserito non è un numero');
        return NaN
    }
}

arrayRandom = giveMeRandom(29)
console.log(arrayRandom);
arrayRandom = giveMeRandom('ciao')

