var introduction =
    "Our logic as humans does not only contain words, but also numbers. With mathematical operations we can have a " +
    "certain way for developing operations in a logical way. Programming has these properties and with them, we can do " +
    "marvelous things! Please check the code for examples of mathematics in JavaScript!";


var addition = 1 + 1;
var subtraction = 1 - 1;
var multiplication = 2 * 3;
var division = 10 / 2;
var powerOf = 10**2;
var moduleOf = 10 % 5; // this represents the remainder of a division!
var moduleOf1 = 10 % 3;
var pemdas = (5*2/2+1)*2-1; // can you guess the result of this operation?
// if you know mathematics, this will be self-evident

console.log(addition);
console.log(subtraction);
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

// there's also an addition/subtraction assignment operator!
// if we have a variable that has an int of 1, we can increment its value with this operator.

var toIncrement = 1;
console.log(toIncrement);
toIncrement += 1;
console.log(toIncrement);
toIncrement++;
console.log(toIncrement);
toIncrement -= 1;
console.log(toIncrement);

magicalAct(introduction);