const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) { // true
    console.log("Please write a number");
} else { // false
    console.log("Thank you for writing your age.");
}