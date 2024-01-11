//Program to get the sum of all Numbers
let num = parseInt(prompt("Enter a Number:"));
// let sum = 0
// let i = 0
// while(i!=num){
//     i+=1;
//     sum+=i;
// }
// alert(`The sum of first ${num} numbers is ${sum}`)

//even numbers display from
i = 2;
let c = 0;
let e = [];
while (i != num) {
  // condition ? exprIfTrue : exprIfFalse
  c = i % 2 === 0 ? e.push(i) : console.log("Not an Even Numbe. ");
  i += 1;
}
i = 0;
output = "";
for (i in e) {
  console.log(e[i]);
  output += e[i] + " ";
}
// for..of doesn’t give access to the number of the current element, just its value
// for (let j of e){
//     alert(j)
// }
document.getElementById("container").innerHTML = output;
let age = prompt("Your age?", 18);
switch (age) {
  case 18:
    alert("Won't work"); // the result of prompt is a string, not a number
  case "18":
    alert("This works!");
    break;
  default:
    alert("Any value not equal to one above");
}
