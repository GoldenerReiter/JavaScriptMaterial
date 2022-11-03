// what if we need to measure not the numbers but the truth of a statement? here we have the logical operators
// there is where we need logical operators!
var judgement = "synthetic";
var judgement1 = "a priori";

var kant = judgement && judgement1; // there's && for and, || for or, ! for not.
var compare = 5 > 1;                // you can compare two statements too

var number1 = 5;
var number2 = "5";

if (kant) {  // if kant is true, then...
    console.log("You judgement is", judgement, judgement1); // the console will say this.
}

if (compare) {
    console.log("5 is greater than 1");
}

if (number1 == number2) { // type coercion comparison
    console.log("This text will log");  // this logs because == means for the browser that you want to compare 5 and 5
                                        // ignoring the datatype of the two values.
}
if (number1 === number2) { // strict equality comparison
    console.log("This will NOT log!");
}



let magic = document.querySelector("h1"); // please ignore the magic for now!
function magicalAct() {
    magic.innerHTML = "Check the js code of this lesson!";
}
magicalAct();