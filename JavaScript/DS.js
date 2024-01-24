function a() {
    const d = new Date();
    let hour = d.getHours();
    if (hour < 12) {
        return "1";
    } else if (hour > 12 && hour < 17) {
        return "2";
    } else {
        return "3";
    }
}
//main
const day = a();
let txt = "";
if (day == "1") {
    txt = "Good Morning🌷";
} else if (day == "2") {
    txt = "Good Afternoon🌻✨";
} else {
    txt = "Good evening🥀";
}
document.getElementById("p1").innerHTML = txt;
document.getElementById("h1").innerHTML = "Welcome to Data Structures program!";
document.getElementById("id1").addEventListener("click", () => {
    let str = prompt("Enter a string:");
    let sub_str = prompt("Enter a substring:");
    l = sub_str.length;
    let t = "";
    let count = 0;
    let r = false;
    for (let i in str) {
        for (let j = 0; j < l; j++) {
            t += str[count];
            count += 1;
        }
        if (t === sub_str) {
            r = true;
            break;
        } else {
            t = "";
            console.log("no");
            count -= Math.floor(l / 2 + 1);
        }
    }
    if (r == true) {
        document.getElementById("results").innerHTML = "Yes " + sub_str + " is a substring of " + str;
        alert("Yes " + sub_str + " is a substring of " + str);
    }
    else {
        document.getElementById("results").innerHTML = "Oops it's not found as a substring!";
        alert("Oops it's not found as a substring!")
    }
    //or another method could be...
    // const mainString = "Hello, this is a sample string.";
    // const subString = "SAMPLE";

    // if (mainString.toLowerCase().includes(subString.toLowerCase())) {
    //     console.log(`${subString} is a substring of ${mainString}`);
    // } else {
    //     console.log(`${subString} is not a substring of ${mainString}`);
    // }
});
document.getElementById("id2").addEventListener("click", () => {
    let arr = prompt("Enter an array: i.e [1,\"hi\",3]")
    let e = prompt("Enter element you want to find out: i.e. 3")
    let r = false;
    for (let i in arr) {
        if (e == arr[i]) {
            r = true;
            console.log("true")
            break;
        }
    }
    if (r == true) {
        console.log("true")
        alert("Element found!")
        document.getElementById("results").innerHTML = "Element found!"
    } else {
        console.log("false")
        alert("Element not found")
        document.getElementById("results").innerHTML = "Element not found!"

    }

})
document.getElementById("id3").addEventListener("click", ()=>{
    let num1 = prompt("Enter first number:")
    let num2 = prompt("Enter second number:")
    let op = prompt("Enter arithmetic operator:")
    let r = ""
    switch(op){
        case "+":
            r = num1 + num2;
        case "-":
            r = num1 - num2;
        case "*":
            r = num1 * num2;
        case "/":
            if (num2 !== 0) {
                r= num1 / num2;
            } else {
                r="Cannot divide by zero!";
            }
        default:
            r = "Invalid operator"
    }
    console.log(r);
    document.getElementById("results").innerHTML = r;
    alert(r);
});
document.getElementById("id4").addEventListener("click", ()=>{
    let str = prompt("Enter First String:")
    let str2 = prompt("Enter Second String:")
    let r = str+str2
    document.getElementById("results").innerHTML = r;
    alert(r)
})
// The map function creates a new array by applying a provided function to each element of the original array. It doesn't modify the original array; instead, it returns a new array with the results of the function applied to each element.
document.getElementById("id5").addEventListener("click", ()=>{
    let nums = prompt("Enter numbers separated by commas:")
    let arr2 = nums.split(',').map(Number)
    //1st method
    // const r = arr2.map(num=>num*num);
    //2nd method
    // const r = arr2.map(function(num){
    //     return num*num;
    // })
    const r = arr2.map(function num(zumba){
        return zumba*zumba;
    })
    console.log(r);
    document.getElementById("results").innerHTML = r;
    alert(r)
})
// The filter function creates a new array with elements that pass the provided filtering function. It doesn't modify the original array; instead, it returns a new array with the elements that meet the specified criteria.
document.getElementById("id6").addEventListener("click", ()=>{
    let num = prompt("Enter range of even numbers till you want:")
    let arr = []
    for(let i =1; i<=num; i++){
        arr.push(i)
    }
    const r = arr.filter(function(n){
        return n%2 === 0;
    })
    document.getElementById("results").innerHTML = r;
    alert(r);
})
document.getElementById("id7").addEventListener("click", ()=>{
    let num = prompt("Enter range of odd numbers till you want:")
    let arr = []
    for(let i =1; i<=num; i++){
        arr.push(i)
    }
    const r = arr.filter(function(n){
        return n%2 != 0;
    })
    document.getElementById("results").innerHTML = r;
    alert(r);
})

// It takes four parameters:
// accumulator: The accumulated result.
// currentValue: The current element being processed in the array.
// currentIndex: The index of the current element being processed.
// array: The array that reduce is being applied to.
document.getElementById("id8").addEventListener("click", ()=>{
    let n = prompt("Enter range:")
    let arr = []
    for(let i = 0; i<=n; i++){
        arr.push(i)
    }
    const r = arr.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    })
    alert(r);
    document.getElementById("results").innerHTML = r;
})
//setTimeOut
document.getElementById("id9").addEventListener("click", ()=>{
    setTimeout(() => {
        document.getElementById("p1").innerHTML = "Hare Krishna!"
    }, 5000);
    setTimeout(() => {
        document.getElementById("p1").innerHTML = txt;
    }, 10000);
})
// function greet(name) {
//     console.log('Hello, ' + name + '!');
// }

// // Schedule the execution of greet with the argument 'John' after 1500 milliseconds
// setTimeout(greet, 1500, 'John');
