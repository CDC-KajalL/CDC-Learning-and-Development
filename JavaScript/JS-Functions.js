function showMessage(){
    alert("Hare Krishna!")
}
// showMessage()
function testResults (form) {
    var inputValue = form.inputbox.value;
    alert ("You typed: " + inputValue);
}
let sum = (a,b) => alert(a+b);
//sum(2,3);

//promise
// a Promise object represents a “pending state” in the most
let p = new promise((resolve, reject)=>{
    let isTrue = true;
    if(isTrue){
        resolve('Success')
    }else{
        reject('Error')
    }
})

p
.then(message => console.log(`Promise resolved: ${message}`))
.catch(message=>console.log(`Promise Rejected: ${message}`))
//Async Await
