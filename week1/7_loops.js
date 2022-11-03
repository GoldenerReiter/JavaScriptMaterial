// a loop is a form of iteration. whenever you need to iterate on any object, you will need loops.
// for example, you need to delete every element that has a value of 0 on one of its properties inside an array.
// there's two types of loops: the while loop and the for loop.

var counter = 1;
while (counter < 11) { // while counter is less than 11, the loop will iterate.
    console.log(counter);
    counter++; // this will make the counter to increment itself until the condition breaks the loop.
} console.log("Yay!");


for (var i = 10; i > 0; i--) { // the for loop needs 3 statements. the declaration of the variable; the condition; and
    console.log(i);            // the incrementation.
} console.log("KABOOM!");


magicalAct();
