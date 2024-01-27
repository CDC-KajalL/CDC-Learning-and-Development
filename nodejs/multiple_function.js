function myfunc1(){
    console.log(`Hello from myfunc1`);
}
function myfunc2(){
    console.log("Hello from myFunc2");
}
// First Export
// module.exports = myFunction;

// Second Export
// module.exports = myFunction2;
//But only the second export statement will take effect, and the myFunction() function will not be exported.
//This problem can be solved if you assign module.exports to an object which contains all the functions you want to export, like this:
module.exports = {
    variable: 'hello',
    myFunc1: myfunc1,
    myFunc2: myfunc2
};
