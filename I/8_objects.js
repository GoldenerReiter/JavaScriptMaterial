const introduction =
    "As the definition says, an object is a standalone entity with its properties and type. There are various types " +
    "of objects. Such as Object, Array, Date, String, Number and Boolean. Functions are objects in JS too. Basically, " +
    "in JavaScript you will always have objects interacting between objects in some way.";

magicalAct(introduction);

// arrays
// an array is like a train with the possibility of different types of wagon on every row of them. you can store in its
// first location an Object and then on the other location/wagon, a primitive string, it doesn't matter.

const johnTheArray = ["Hello", 15, introduction];

// functions
// a function is a first class object in JavaScript. The big difference between a normal object and a function is that
// a function can be called or invoked (they mean the same). they are Function objects.
// when you say that a function can be called, you mean that you can bring its functionality to diverse parts of the
// code. let's take a look:

// you can build a function in these two ways:

function johnTheExampleFunctionFunction(a, b) {
        return a + b;
}

const johnTheExampleArrowFunction = (a, b) => {
    return a + b;
}

const comparisonBool = johnTheExampleArrowFunction(1, 2) === johnTheExampleFunctionFunction(1, 2);

console.log(comparisonBool); // guess the output!

// i do not like so much the second way, but it is a pretty javascripty way of programming.

// here we have an interaction between an array and a function!
function letterSniffer(word, sniffed) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === sniffed) {
            console.log("I sniff a letter " + sniffed + " here !");
        } else {
            console.log("This wagon is clean!");
        }
    }
}

letterSniffer(johnTheArray[0], "l");

function letterSnifferJStyle(word, sniffed) {
    for (let i = 0; i < word.length; i++) {
        word[i] === sniffed ?
            console.log("I sniff a letter " + sniffed + " here !") : console.log("This wagon is clean!");
    }
}

letterSnifferJStyle(johnTheArray[0], "l");

// objects
// an object is like a tabula rasa or a swiss knife. you can assign to an object even functions and use them as methods!

let johnTheVariable = 12;
const johnTheObject = {johnTheVariable, letterSniffer, introduction};

johnTheObject.letterSniffer("John", "h");

// let's build our ideal type of person

let Person = {};
Person.determination = "high";
Person.ideas = "kantian/aristotelian/scientific";
Person.favouriteNumber = 9;

console.log(Person.determination);

// or you can do this too!

function PersonConstructor(first, last, age, profession) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.profession = profession;
}

const johnThePerson = new PersonConstructor("John", null, 55, "farmer");


console.log("So.. you are: ", johnThePerson.firstName, johnThePerson.lastName, ". ", johnThePerson.age, " years old. ",
    "And you are a ", johnThePerson.profession);

// Destructuring of an object/function.

const [firstName, lastName, age, profession] = johnThePerson;

console.log("So.. you are: ", firstName, lastName, ". ", age, " years old. ",
    "And you are a ", profession);

