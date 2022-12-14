var introduction =
    "Conditionals on formal logic are known as implications. If I am a duck, I will quack! If some condition is met, " +
    "then we have an specific result that was previously coded by the programmer. If that condition is not met, we can" +
    "always have an else statement that allow us to fill that lack of fulfillment of that condition. Please check the " +
    "code for more info!";

// at logical operators we have seen a ver basic form of conditional operators. Now we do a deep dive.
// we have two conditional operators: the if statement and the switch statement.

var john = true;

if (john) { // if the variable john is true...
    console.log("John's a true guy."); // then we log this message.
} else if (!john) { // but then, if the variable's not true, then...
    console.log("John's fake af.");
} else { // if everything else fails, we have a condition that activates in this case.
    console.log("Who's John?");
}

var age = 18;

if (age < 18) {
    console.log("You better learn!");
} else if (age > 18 && age <= 65) {
    console.log("You better work!");
} else if (age > 65) {
    console.log("You better rest!");
} else {
    console.log("Are you sure you entered a number?");
}

const month = "January";

switch (month) { // the switch statement will check case by case if the variable corresponds to any of them.
    case "December":
        console.log("Vacation time!");
        break;
    case "January":
        console.log("Vacation time!");
        break;
    case "February":
        console.log("Vacation time!");
        break;
    default: // if not, the default response will activate.
        console.log("Working time!");
        break;
}

magicalAct(introduction);