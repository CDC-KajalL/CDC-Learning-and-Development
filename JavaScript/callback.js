//Here in the below code the output will be timer, x, y cause javascript runs code synchronously
// setTimeout(
//     console.log("Timer")
// , 5000)
// function x(foo){
//     console.log("x")
//     foo()
// }
// x(function y(){
//     console.log("y")
// })
//But over here with the help of callback function we get the output as x, y, timer
setTimeout(function(){
    console.log("Timer")
}, 5000)
function x(foo){
    console.log("x")
    foo()
}
x(function y(){
    console.log("y")
})