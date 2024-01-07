// 'use strict', When it is located at the top of a script, the whole script works the “modern” way.

//Guess the number game
var actual_num = 10;
let num = prompt("Guess the number?");// let – is a modern variable declaration.
if(actual_num == num){
    alert("Hurray, you won!");
}
else{
    alert("Oops you loose!");
}

