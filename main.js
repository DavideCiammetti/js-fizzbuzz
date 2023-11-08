'use strict';
// aggiungo il contenitore lista div
const contenitoreLista = document.getElementById("main");

for(let i = 1; i <= 100; i++){

    let list = document.createElement('p'); 
    // prendo i numeri che sono sia multipli di 3 che di 5
    if((i % 3 === 0) && (i % 5 === 0)){
    
        console.log('FizzBuzz');
        list.append('FizzBuzz');
        contenitoreLista.append(list);
        list.classList.toggle('fizzbuzz-color');
        // solo multipli di 5
    }else if(i % 5 === 0){

        console.log('Buzz');
        list.append('Buzz');
        contenitoreLista.append(list);
        list.classList.toggle('buzz-color');
        // solo multipli di 3
    }else if(i % 3 === 0){

        console.log('Fizz');
        list.append('Fizz');
        contenitoreLista.append(list);
        list.classList.toggle('fizz-color');
        // tutto il resto dei numeri
    }else{

        console.log(i);
        list.append(i);
        contenitoreLista.append(list);
        list.classList.toggle('numb-color');
    }
}