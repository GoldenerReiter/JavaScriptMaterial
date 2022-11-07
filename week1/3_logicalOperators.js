var introduction =
    "Like in human day a day language, there are some logic structures that allow us to create expressions that give us" +
    "the value of truth and falsity. With them, we can create conditions that allow us make the machine to make " +
    "decisions. Please check the code of this lesson for a detailed example!";

// what if we need to measure not the numbers but the truth of a statement? here we have the logical operators
// which are the ones that return a boolean value.
// there is where we need logical operators!
const judgement = "synthetic";
const judgement1 = "a priori";

const kant = judgement && judgement1; // there's && for and, || for or, ! for not.
const compare = 5 > 1;                // you can compare two statements too

const number1 = 5;
const number2 = "5";

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

magicalAct(introduction);