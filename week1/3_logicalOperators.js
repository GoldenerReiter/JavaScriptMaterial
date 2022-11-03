// what if we need to measure not the numbers but the truth of a statement? here we have the logical operators
// there is where we need logical operators!
var judgement = "synthetic";
var judgement1 = "a priori";

var kant = judgement && judgement1; // there's && for and, || for or, ! for not.
var compare = 5 > 1;                // you can compare two statements too

if (kant) {  // if kant is true, then...
    console.log("You judgement is", judgement, judgement1); // the console will say this.
}

if (compare) {
    console.log("5 is greater than 1");
}


let magic = document.querySelector("h1"); // please ignore the magic for now!
function magicalAct() {
    magic.innerHTML = "Check the js code of this lesson!";
}
magicalAct();