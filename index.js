// Write your solution in this file!

var customerName = 'bob' //use var instead of const??

function upperCaseCustomerName() { //do not use a parameter because it will start the reading of the code with the universal variable; in order to change it, we simply define the function, then assign the new string to the variable.
    customerName = 'BOB';
    return customerName;
}

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

const leastFavoriteCustomer = 'Ethan'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Bob';
    return leastFavoriteCustomer;
}











// var customerName = "bob";

// function upperCaseCustomerName(){
//     customerName = "BOB"
//     return customerName;
// }

// function setBestCustomer(){
//     bestCustomer = "not bob";
//     return bestCustomer;
// }

// function overwriteBestCustomer(){
//     bestCustomer = "maybe bob";
//     return bestCustomer;
// }

// const leastFavoriteCustomer = "ethan"
// function changeLeastFavoriteCustomer(){
//     leastFavoriteCustomer = "ethan";
//     return bestCustomer;
// }


/*
Scope - where something is available
Slack example:
- we all have access to #general thread
- some have access to other threads, such as #cohort A, but those with access to it, also have access to general
- some channels we do not have access to, such as #admin

*every execution context creates a new scope that encompasses the variables and functions declared within it
*these functions and variable are only accessable within the scope of the parent function

// 'myFunc' is declared in the global scope and available everywhere in your code:
function myFunc() {
  return 42;
}
// => undefined

// 'myVar' is able to reference and invoke 'myFunc' because both are declared in the same scope (the global execution context):
const myVar = myFunc() * 2;
// => undefined

myVar;
// => 84

Top Tip: If a variable or function is not declared inside a function or block, it's in the global execution context.

FUNCTION SCOPE:

function myFunc() {
  const myVar = 42;

  return myVar * 2;
}
// => undefined

myFunc();
// => 84

myVar is only accessable within the scope:

function myFunc() {
  const myVar = 42;
}
// => undefined

myVar * 2;
// Uncaught ReferenceError: myVar is not defined

makes sense...

BLOCK SCOPE:
- Block statements create their own scope, kind of...

*var is available everywhere, this is why we are best to stay away from using it, since it will be hard to track down
* variable declared using const or let are block-scoped
*variables declared without const or let are always gloabally-scoped

SCOPE CHAIN:
- Global scope is effectively the outer scope for other, subsequent scopes

Example:
const globalVar = 1;

function firstFunc() {
  const firstVar = 2;

  return firstVar + globalVar;
}

firstFunc();
// => 3

Another EXAMPLE:
const globalVar = 1;

function firstFunc() {
  const firstVar = 2;

  function secondFunc() {
    const secondVar = 3;

    return secondVar + firstVar + globalVar;
  }

  const resultFromSecondFunc = secondFunc();

  return resultFromSecondFunc;
}

firstFunc();
// => 6


* If a() is declared inside b() and b() is declared inside c(), a() has access to functions and variables declared in its own scope, b()'s scope, and c()'s scope. That's the scope chain in action!

**Scope chain only goes in one direction. We cannot gain access to variables called within a subsequent function()

EXAMPLE:
const fruit = "Apple";

function first() {
  const vegetable = "Broccoli";

  console.log("fruit:", fruit);
  console.log("vegetable:", vegetable);
  console.log("legume:", legume);
}

function second() {
  const legume = "Peanut";

  console.log("fruit:", fruit);
  console.log("legume:", legume);
  console.log("vegetable:", vegetable);
}
^^ both functions have access to fruit, but first() does not have access to legume, and second() does not have access to vegetable

LOGS for the above example:
first();
// LOG: fruit: Apple
// LOG: vegetable: Broccoli
// ERROR: Uncaught ReferenceError: legume is not defined

second();
// LOG: fruit: Apple
// LOG: legume: Peanut
// ERROR: Uncaught ReferenceError: vegetable is not defined


Identifiers - labels, essentailly, that allow us to identify the variable or function we are referring to


JAVASCRIPT ENGINE:
When we run JS in the brower, it runs through the code two times
-First phase: compilation
* when it reaches a variable, the system allocates memory for it
* when it encounters a function, it does three things:
1) allocates memory
2) creates new execution context with new scope
3) adds a reference to the parent scope to the scope chain, making them available within the new function

-Second phase: execution phase
* runs code, assigning values to variable and invoking functions

example:

const myVar = 42;

myVar;
// => 42

1) first time, JS creates a identifier referenced as myVar
2) second time, 42 is assigned to myVar

now... this example shows how myVar is not global
const myVar = 42;

function myFunc() {
  const myVar = 9001;

  return myVar;
}

myFunc();
// => 9001



*/