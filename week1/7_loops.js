var introduction =
    "If a conditional is not enough, we can always iterate that condition until is fulfilled, or else. Imagine that we " +
    "want to count the amount of cows we have in a farm. We don't know for certain how many cows we have, but we need to" +
    "know how many there are! Well, if that happens to be our problem, we'll need a for loop. A for loop, for example" +
    "will count one by one the number of cows and will iterate on that process until we have a clear number of how many" +
    "there are! Please check the code for an example!";

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


magicalAct(introduction);
