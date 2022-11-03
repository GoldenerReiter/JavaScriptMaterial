var addition = 1 + 1;
var substraction = 1 - 1;
var multiplication = 2 * 3;
var division = 10 / 2;
var powerOf = 10**2;
var moduleOf = 10 % 5; // this represents the remainder of a division!
var moduleOf1 = 10 % 3;
var pemdas = (5*2/2+1)*2-1; // can you guess the result of this operation?
// if you know mathematics, this will be self-evident

console.log(addition);
console.log(substraction);
console.log(multiplication);
console.log(division);
console.log(powerOf);
console.log(moduleOf);
console.log(moduleOf1);
console.log(pemdas);

// also you have number types.

var intNumber = 1;
var floatNumber = 1.5;

console.log(intNumber, floatNumber);

let magic = document.querySelector("h1"); // please ignore the magic for now!
function magicalAct() {
    magic.innerHTML = "Check the js code of this lesson!";
}
magicalAct();