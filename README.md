# FizzBuzz


Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


per iniziare dividere questo esercizio in più parti dove: 

1. scrivere un programma che stampi i numeri da 1 a 100

2. tutti i numeri multipli di 3 al posto del numero hanno "Fizz"

3. tutti i numeri multipli di 5 hanno "Buzz" al posto del numero

4. tutti i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”

### risoluzione problemi sopra indicati in JavaScript

- scrivere un programma che stampi i numeri da 1 a 100:

per i = 1; i <= 100; i++
    stampa i

- tutti i numeri multipli di 3 al posto del numero hanno "Fizz"

se se i % 3 === 0 and i % 5 === 0

    allora    i = 'Fizz'

altrimenti se i % 5 === 0

    allora i = 'Buzz'

altrimenti se i % 3 === 0

    allora i = 'FizzBuzz'

altrimenti 
    stampa i

## parte 2 dell'esercizio

Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

per eseguire questa richiesta possiamo decidere di operare cosi: 

- creare un oggetto lista di tipo "ul" in html e creare poi i vari elementi della lista in javascript

## parte 3 dell'esercizio

Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

per fare questa seconda parte bonus ho crato un tag MAIN html in html e nel js file ho creato i tag p dove in css ho i rispettivi stili nel selettore "p"
successivamente per colorare i rispettivi quadrati ho aggiunto una classe ai tag "p" creati all'interno del js file 
 list.classList.toggle('fizz-color'); -----> questa è una classe esempio 
