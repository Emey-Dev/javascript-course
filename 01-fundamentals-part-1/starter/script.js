
// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log(js);

// console.log("=== VARIABLES ===");

// let firstName = "Emey";
// console.log(firstName);

// let age = 30;
// console.log(age)
// age = 50;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// var job = "programmer";
// job = "teacher";
// console.log(job);

// const country = "Philippines";
// const language = "Filipino";

// age = 25;
// age = 26;

// console.log("=== DATA TYPES ===");

// let id = 12345;
// console.log(id);
// console.log(typeof id);

// let lastName = "Belicano";
// console.log(lastName);
// console.log(typeof lastName);

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// let dynamicVariable = 40;
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = "I am now a string!";
// console.log(dynamicVariable, typeof dynamicVariable);
// dynamicVariable = true;


// console.log("=== MATH OPERATORS ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);


// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math operations");
// console.log("Addition:", 10 + 5);
// console.log("Subtraction:", 20 - 8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division:", 15 / 3);
// console.log("Exponentiation:", 2 ** 3);

// const firstName = "Emey";
// const lastName = "Belicano";
// console.log("Concatenation:", firstName + " " + lastName);

// console.log("Hello " + "World" + "!");

// // Assignment operators
// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 5;
// console.log("x starts as:", x);

// x += 10;
// console.log("x starts as:", x);

// x *= 4;
// console.log("x starts as:", x);

// x /= 2;
// console.log("x starts as:", x);

// x++;
// console.log("x starts as:", x);

// x--;
// console.log("x starts as:", x);

// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age comparison:");
// console.log(ageJonas > ageSarah); // true
// console.log(ageSarah >= 18); // true
// console.log(ageJonas < 30);

// console.log("Number comparison:");
// console.log(25 > 20); // true
// console.log(15 < 10); // true
// console.log(18 >= 10); // true
// console.log(16 <= 15); // true

// const isFullAge = ageSarah >= 18;
// console.log("Is Sarah an adult:", isFullAge); // true

// console.log("Complex comparison:");
// console.log(now - 1991 > now - 2018); // true

// let z, y;
// z = y = 25 - 10 -5;
// console.log(z, y); // 10

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge); // 26, 19, 22.5

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
 
// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn * heightJohn;

// const markHigherBMI = bmiMark > bmiJohn;

// console.log("Mark's BMI:", bmiMark);
// console.log("John's BMI:", bmiJohn);
// console.log(markHigherBMI);


// ////////////////////////////////////
// // Strings and Template Literals
// const firtName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;
// const jonas = "I'm " + firtName + ", a " + (year - birthYear) + " year old " + job + "!";
 
// const age = 15;
 
// if (age >= 18) {
//     console.log("Sarah can start a driving license");
 
// }else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
// }

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
// }


////////////////////////////////////
// Type Conversion and Coercion

const inputYear = "1991"
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

// coercion automatic
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");
console.log("23" * "2");

//guess the output
let n = "1" + 1; // '11'
console.log(n); // '11'

n = n - 1; // 10
console.log(n); // 10

console.log(2 + 3 + 4 + "5"); // '95'
console.log("10" - "4" - "3" - 2 + "5"); // '15'

//exercise 1: conve4rsion detective
console.log("5" + 2); // Your guess: ?
console.log("5" - 2); // Your guess: ?
console.log("5" * 2); // Your guess: ?
console.log("5" / 2); // Your guess: ?

const userAgeString = "2";
const userScore = 95;

const userAgeAsNumber = Number(userAgeString);
console.log(typeof  userAgeAsNumber, userAgeAsNumber);

const userScoreAsString = String(userScore);
console.log(typeof userScoreAsString, userScoreAsString);

//exercise 2: calculator has a bug
const num1 = "10";
const num2 = "20";

const num1AsNumber = Number(num1);
const num2AsNumber = Number(num2);

const sum = num1AsNumber + num2AsNumber;
console.log(`Sum: ${sum}`);

//equality strict
const age = 18;
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

console.log("18" === 18);
console.log("18" == 18);
console.log(18 === 18);

console.log("0" == 0);
console.log(0 == false);
console.log("0" == false);
console.log(null == undefined);

console.log("" == 0);
console.log("   " == 0);

// const favourite = Number(prompt("What's your favorite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) { // '23' == 23
//     console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//     console.log("7 is also a cool number");
// } else if (favourite === 9) {
//     console.log("9 is also a cool number");
// } else {
//     console.log("Number is not 23 or 7 or 9");
// }

// if(favourite !== 23) console.log("Why not 23?");

//exercise 1

console.log(5 === "5"); // Your guess: ?
console.log(5 == "5"); // Your guess: ?
console.log(true === 1); // Your guess: ?
console.log(true == 1); // Your guess: ?
console.log(false === 0); // Your guess: ?
console.log(false == 0); // Your guess: ?

//exercise 2
// const username = prompt("Username:");
// const password = prompt("Password:");

// if (username === "admin" && password === "1234") {
//   console.log("Welcome admin!");
// } else {
//   console.log("Access denied");
// }

//logical operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // AND: both must be true
console.log(hasDriversLicense || hasGoodVision); // OR: one must be true
console.log(!hasDriversLicense); // NOT: inverts the value

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Aiken is able to drive!");
} else {
  console.log("Someone else should drive...");
}

// More complex scenarios
// age = 20;
// const hasPermission = true;
// const hasExperience = false;

// if ((age >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

// console.log(
//     "Age 20, permission true, hasExperience false:",
//     (age >= 18 || hasPermission) && hasExperience
// );

//exercise 1
const userAge = 21;       // number
const hasID = true;   // boolean
const isVIP = false;  // boolean

if ((userAge >= 21 && hasID) || isVIP) {
    console.log("Welcome to the club!");
} else {
    console.log("Sorry, you cannot enter.");
}

////////////////////////////////////
// The Conditional (Ternary) Operator

const myAge = 21;

const drink = myAge >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (myAge >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${myAge >= 18 ? "wine 🍷" : "water 💧"}`);


////////////////////////////////////
// Coding Challenge #4


const bill = 275; // Test for 275, 40 and 430

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);




