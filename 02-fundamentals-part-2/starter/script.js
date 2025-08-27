console.log("Part 2 functions is ready");

///
//FUNCTIONS - DELCARATIONS AND EXPRESSIONS
console.log("=== FUNCTIONS ===");

// FUNCTIONS DECLARATION
function logger() {
    console.log("My name is Emey");
}

//CALLING / RUNNING / INVOKING THE FUNCTIION
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 3);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor (2, 4);
console.log(appleJuice);

// const juice1 = `Juice with 5 apples and 0 oranges.`;
// const juice2 = `Juice with 2 apples and 4 oranges.`;
// const juice3 = `Juice with 3 apples and 2 oranges.`;

const juice1 = fruitProcessor(5, 0);
const juice2 = fruitProcessor(2, 4);
const juice3 = fruitProcessor(3, 2);

//FUNCTIONS EXPRESSIONS
const calcAge = function (birthYear) {
    return 2025 - birthYear;
};

const age1 = calcAge(2003);
console.log(age1);
console.log(calcAge(1990));

function introduce(firstName, lastName, age) {
    const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
    return introduction;
}

console.log(introduce("Emey", "Belicano", 21));
console.log(introduce("Emey"));

///
//RETURN VALIES AND SCOPE

function yearsUntilRetirement(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retirement is ${retirement} years.`;
    } else {
        return `${fristName} has already retired.`;
    }

}

console.log(yearsUntilRetirement(2003, "Emey"));

/// FUNCTION SCOPE
const globalVar = "I am global";

function testScope() {
    const localVar = "I am Local";
    console.log(globalVar);
    console.log(localVar);
}

testScope();
console.log(globalVar);
// console.log(localVar);

///CODING CHALLENGE #1: FUNCTION CALCULATOR

function calcAverage(score1, score2, score3) {
    const averageScore = (score1 + score2 + score3) / 3;
    return averageScore;
}   

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return (`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        return (`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        return "no team wins...";
    }           
}

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));






