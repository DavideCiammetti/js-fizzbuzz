# FizzBuzz


Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


per iniziare dividere questo esercizio in più parti dove: 

1. scrivere un programma che stampi i numeri da 1 a 100

2. tutti i numeri multipli di 3 al posto del numero hanno "Fizz"

3. tutti i numeri multipli di 5 hanno "Buzz" al posto del numero

4. tutti i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”

### risoluzione problemi sopra indicati

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