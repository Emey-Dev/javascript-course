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


////////////////////////////////////
// Strings and Template Literals
const firtName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;
const jonas = "I'm " + firtName + ", a " + (year - birthYear) + " year old " + job + "!";
 
const age = 15;
 
if (age >= 18) {
    console.log("Sarah can start a driving license");
 
}else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(""));

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
}



