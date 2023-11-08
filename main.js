'use strict';
// aggiungo il contenitore lista UL
const contenitoreLista = document.getElementById("main-list");

for(let i = 1; i <= 100; i++){

    let list = document.createElement('li'); 
    // prendo i numeri che sono sia multipli di 3 che di 5
    if((i % 3 === 0) && (i % 5 === 0)){
    
        console.log('FizzBuzz');
        list.append('FizzBuzz');
        contenitoreLista.append(list);
        // solo multipli di 5
    }else if(i % 5 === 0){

        console.log('Buzz');
        list.append('Buzz');
        contenitoreLista.append(list);
        // solo multipli di 3
    }else if(i % 3 === 0){

        console.log('Fizz');
        list.append('Fizz');
        contenitoreLista.append(list);
        // tutto il resto dei numeri
    }else{

        console.log(i);
        list.append(i);
        contenitoreLista.append(list);
    }
}