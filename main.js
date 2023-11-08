'use strict';

const contenitoreLista = document.getElementById("main-list");

for(let i = 1; i <= 100; i++){

    let list = document.createElement('li'); 

    if((i % 3 === 0) && (i % 5 === 0)){
    
        console.log('FizzBuzz');
        list.append('FizzBuzz');
        contenitoreLista.append(list);

    }else if(i % 5 === 0){

        console.log('Buzz');
        list.append('Buzz');
        contenitoreLista.append(list);

    }else if(i % 3 === 0){

        console.log('Fizz');
        list.append('Fizz');
        contenitoreLista.append(list);
    }else{

        console.log(i);
        list.append(i);
        contenitoreLista.append(list);
    }
}