// A closure in JavaScript occurs when a function is defined within another function and has access to the outer function's variables. The inner function "closes over" the outer function's scope, retaining access to its variables even after the outer function has finished executing. Closures are a powerful and fundamental concept in JavaScript.
function outerFunction() {
  // Outer function's variable
  let outerVariable = "I am from the outer function";

  function innerFunction() {
    // Inner function has access to the outer function's variable
    console.log(outerVariable);
  }

  // Return the inner function (closure)
  return innerFunction;
}

// Create a closure by calling outerFunction and assigning it to a variable
const closureExample = outerFunction();

// Call the inner function, which still has access to outerVariable
closureExample(); // Output: "I am from the outer function"
