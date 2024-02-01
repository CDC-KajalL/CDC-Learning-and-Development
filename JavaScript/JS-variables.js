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

//conversions
let str = "123";
value = String(value); // now value is a string "true"
let num2 = Number(str); // becomes a number 123
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

// Exponentiation **
alert( 2 ** 2 ); // 4 (2 * 2)
alert( 2 ** 3 ); // 8 (2 * 2 * 2)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)

// confirm
// shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and
// false for Cancel/ Esc .

let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed

// Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.
function myFunction() {
    a = 4;
}