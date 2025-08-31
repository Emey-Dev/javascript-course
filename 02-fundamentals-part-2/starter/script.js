// // // console.log("Part 2 functions is ready");

// // // ///
// // // //FUNCTIONS - DELCARATIONS AND EXPRESSIONS
// // // console.log("=== FUNCTIONS ===");

// // // // FUNCTIONS DECLARATION
// // // function logger() {
// // //     console.log("My name is Emey");
// // // }

// // // //CALLING / RUNNING / INVOKING THE FUNCTIION
// // // logger();
// // // logger();
// // // logger();

// // // function fruitProcessor(apples, oranges) {
// // //     console.log(apples, oranges);
// // //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // //     return juice;
// // // }

// // // const appleJuice = fruitProcessor(5, 3);
// // // console.log(appleJuice);

// // // const appleOrangeJuice = fruitProcessor (2, 4);
// // // console.log(appleJuice);

// // // // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // // // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // // // const juice3 = `Juice with 3 apples and 2 oranges.`;

// // // const juice1 = fruitProcessor(5, 0);
// // // const juice2 = fruitProcessor(2, 4);
// // // const juice3 = fruitProcessor(3, 2);

// // // //FUNCTIONS EXPRESSIONS
// // // const calcAge = function (birthYear) {
// // //     return 2025 - birthYear;
// // // };

// // // const age1 = calcAge(2003);
// // // console.log(age1);
// // // console.log(calcAge(1990));

// // // function introduce(firstName, lastName, age) {
// // //     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// // //     return introduction;
// // // }

// // // console.log(introduce("Emey", "Belicano", 21));
// // // console.log(introduce("Emey"));

// // // ///
// // // //RETURN VALIES AND SCOPE

// // // function yearsUntilRetirement(birthYear, firstName) {
// // //     const age = calcAge(birthYear);
// // //     const retirement = 65 - age;

// // //     if (retirement > 0) {
// // //         return `${firstName} retirement is ${retirement} years.`;
// // //     } else {
// // //         return `${fristName} has already retired.`;
// // //     }

// // // }

// // // console.log(yearsUntilRetirement(2003, "Emey"));

// // // /// FUNCTION SCOPE
// // // const globalVar = "I am global";

// // // function testScope() {
// // //     const localVar = "I am Local";
// // //     console.log(globalVar);
// // //     console.log(localVar);
// // // }

// // // testScope();
// // // console.log(globalVar);
// // // // console.log(localVar);

// // // ///CODING CHALLENGE #1: FUNCTION CALCULATOR

// // // function calcAverage(score1, score2, score3) {
// // //     const averageScore = (score1 + score2 + score3) / 3;
// // //     return averageScore;
// // // }   

// // // function checkWinner(avgDolphins, avgKoalas) {
// // //     if (avgDolphins >= 2 * avgKoalas) {
// // //         return (`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
// // //     } else if (avgKoalas >= 2 * avgDolphins) {
// // //         return (`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
// // //     } else {
// // //         return "no team wins...";
// // //     }           
// // // }

// // // // Test Data 1
// // // let scoreDolphins = calcAverage(44, 23, 71);
// // // let scoreKoalas = calcAverage(65, 54, 49);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // Test Data 2
// // // scoreDolphins = calcAverage(85, 54, 41);
// // // scoreKoalas = calcAverage(23, 34, 27);
// // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // const grades = [99, 89, 79, 69, 59];
// // console.log(grades);
 
// // const friends = ["Pahina", "Sean", "Allen"];
// // console.log(friends);

// // const mixed = ["Pahina", 40, false, friends];
// // console.log(mixed);

// // const years = new Array(1991, 1984, 2008, 2020);
// // console.log(years);

// // console.log(friends[0]);
// // console.log(friends[1]);
// // console.log(friends[2]);
// // console.log(friends[3]);

// // console.log(friends.length);

// // friends[0] = "Chammy";
// // console.log(friends);

// // const calcAge = function (birthyear) {
// //     return 2025 - birthyear;
// // }

// // const ages = [calcAge(2000), calcAge(1940), calcAge(1991)];
// // console.log(ages);

// // const newLength = friends.push("Emey");
// // console.log(friends);
// // console.log(newLength);

// // friends.unshift("Dona");
// // console.log(friends);

// // //REMOVING ELEMENTS
// // const popped = friends.pop();
// // console.log(popped);
// // console.log(friends);

// // //remove first item in the list
// // const shifted = friends.shift();
// // console.log(shifted);
// // console.log(friends);

// // //finding an element
// // console.log(friends.indexOf("Sean"));
// // console.log(friends.indexOf("Emey"));

// // // includes
// // console.log(friends.includes("Chammy"));
// // console.log(friends.includes("Emey"));

// // // Array Iterations
// // for (let i = 0; i < friends.length; i++) {
// //     console.log(friends[i]);
// // }

// // friends.forEach(function(friend, index) {
// //     console.log(`${index}: ${friend}`);
// // });

// // friends.forEach((friend, index) => {
// //     console.log(`${index + 1}: ${friend}`);
// // });


// // const grades2 = [85, 92, 78, 96, 88, 74];
// // let total = 0;

// // for (let i = 0; i < grades2.length; i++) {
// //     total += grades2[i];
// // }

// // const average = total / grades2.length;
// // console.log(`Average grade: ${average.toFixed(2)}`);

// // let passedCount = 0;
// // grades2.forEach((grade) => {
// //     if (grade >= 70)  passedCount++;
// // });


// // console.log(`${passedCount} out of ${grades2.length} students have passed.`);

// ////////////////////////////////////
// // Coding Challenge #2 - Student Grade Manager

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(grades) {
//     // Your code here
//     // Hint: Sum all grades and divide by number of grades
//     let total = 0;
//     for (let i = 0; i < grades.length; i++) {
//         total += grades[i];
//     }
//     total = total / grades.length;
//     return total;
// }

// // Function to find highest grade
// function findHighestGrade(grades) {
//     // Your code here
//     // Hint: Loop through grades and keep track of highest
//     let highest = grades[0];
//     for (let i = 1; i < grades.length; i++) {
//         if (grades[i] > highest) {
//         highest = grades[i];
//         }
//     }
//     return highest;
// }

// // Function to find lowest grade
// function findLowestGrade(grades) {
//   // Your code here
//   // Hint: Similar to highest, but use < comparison
//     let lowest = grades[0]; 
//     for (let i = 1; i < grades.length; i++) {
//         if (grades[i] < lowest) {
//         lowest = grades[i];
//         }
//     }
//     return lowest;
// }

// // Function to count passing students
// function countPassing(grades, passingGrade) {
//   // Your code here
//   // Hint: Counter pattern - increment when condition is met
//     let passingCount = 0;
//     for (let i = 0; i < grades.length; i++) {
//         if (grades[i] >= passingGrade) {
//             passingCount++;
//         }
//     }
//     return passingCount;
// }

// // Generate complete report
// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);

////////////////////////////////////
// PROBLEMS WITH ARRAY

const emeyArray = [
    "Emey",
    "Belicano",
    2025 - 2003,
    "Student",
    ["Page", "Sean", "Will"]
];

console.log(emeyArray[0]);
console.log(emeyArray[1]);

const emeyObject = {
    firstName: "Emey",
    lastName: "Belicano",
    age: 2025 - 2003,
    job: "student",
    friends: ["Page", "Sean", "Will"],
};
console.log(emeyObject);

//PROPERTY ACCESS METHODS
//Dot Notation
console.log(emeyObject.firstName);
console.log(emeyObject.lastName);
console.log(emeyObject.age);

//BRACKET NOTATION
console.log(emeyObject['firstName']);
console.log(emeyObject['lastName']);
console.log(emeyObject['age']);

const nameKey = "Name";
console.log(emeyObject['first' + nameKey]);

//MODIFYING EXISTING PROPERTIES
emeyObject['job'] = 'Programmer';
emeyObject.age = 21;
console.log(emeyObject);

//ADD NEW PROPERTIES
emeyObject.location = "Philippines";
emeyObject['twitter'] = "emeyprogrammer";
emeyObject.license = true;
console.log(emeyObject);

//WHEN TO USE DOT VS BRACKET NOTATION
const property = "job";
console.log(emeyObject[property]);

// "1. Property name is in a variable"
// "2. Property name has spaces or special characters"
// "3. Propertt name is computed/dynamic"
// "Otherwise, prefer dot notation"

//OBJECTS VS ARRAYS DECISION MAKING 

//ARRAYS
const listOfYears = [1991, 1984, 2008, 2020];
const shoppingList = ["apples", "bananas", "milk", "bread"];
const testScores = [85, 92, 78, 96];

//OBJECTS
const person = {
    name: "Emey",
    age: 21,
    occupation: "Student",
};
const car ={
    brand: "Toyota:",
    model: "Camry",
    year: 2020,
    color: "blue",
};

//OBJECTS CAN CONTAIN ARRAYS, ARRAYS CAB CONTAIN OBJECTS
const student = {
    name: "Emey",
    grades: [85, 99, 78],
    address: {
        street: "123 Main St",
        city: "New York",
    },
}; 
console.log(student.grades[0]);
console.log(student.address.city);

//OBJECT METHODS
const emey = {
    firstName: "Mark Antonio",
    lastName: "Belicano",
    birthYear: 2003,
    job: "student",
    friends: ["Page", "Sean", "Will"],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        return 2025 - birthYear;
    },
};
console.log(emey.calcAge(2003));

//'this' KEYWORD
const emeyImproved = {
    firstName: "Mark Antonio",
    lastName: "Belicano",
    birthYear: 2003,
    job: "student",
    friends: ["Page", "Sean", "Will"],
    hasDriversLicense: false,

    // calcAge: function () {
    //     console.log(this);
    //     return 2025 - this.birthYear;
    // },

    calcAge: function () {
        this.age = 2025  - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};
console.log(emeyImproved.calcAge());
console.log(emeyImproved.age);
console.log(emeyImproved.getSummary());

//COMPLEX OBJECT WITH MULTIPLE METHODS
const bankAccount = {
    owner: "Emey Belicano",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, 
    pin: 1111,

    //METHODS TO CALCULATE BALANCE
    calcBalance: function() {
        this.balance = this.movements.reduce((acc, mov) => acc + mov, 0);
        return this.balance;
    },

    //METHOD TO ADD MOVEMENT
    deposit: function(amount) {
        this.movements.push(amount);
        this.calcBalance();
    },

    witdraw: function(amount) {
        this.movements.push(-amount);
        this.calcBalance();
    },

    //METHOD FOR ACCOUNT SUMMARY
    getStatement: function() {
        return `${this.owner}'s account balance:  $${this.calcBalance()}`;
    },
};

console.log(bankAccount.getStatement());
bankAccount.deposit(500);
console.log(bankAccount.getStatement());
bankAccount.witdraw(200);

////////////////////////////////////
// Coding Challenge #3 - User Profile System

const user = {
  firstName: "Sarah",
  lastName: "Johnson",
  birthYear: 1995,
  location: "New York",
  interests: ["photography", "travel", "coding"],
  friends: [
    { name: "Michael", status: "active" },
    { name: "Emma", status: "inactive" },
    { name: "David", status: "active" },
  ],
  isActive: true,

  // Calculate age method
  calcAge: function () {
    // Calculate age and store as this.age
    // Hint: Use new Date().getFullYear() for current year
    // Your code here
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },

  // Add friend method
  addFriend: function (name, status = "active") {
    // Add new friend object to this.friends array
    // Return the new length of friends array
    // Your code here
    this.friends.push({ name: name, status: status });
    return this.friends.length;
  },    

  // Get active friends count
  getActiveFriends: function () {
    // Filter friends array to count only active friends
    // Hint: use this.friends.filter()
    // Your code here
    const activeFriends = this.friends.filter(friend => friend.status === "active");
    return activeFriends.length;
  },

  // Toggle active status
  toggleStatus: function () {
    // Switch this.isActive between true and false
    // Return the new status
    // Your code here
    this.isActive = !this.isActive;
    return this.isActive;
  },

  // Generate profile summary
  getSummary: function () {
    // Create a social media style profile summary
    // Include: name, age, location, status, friend counts, interests
    // Use template literals for nice formatting
    // Your code here
    const age = this.calcAge();
    const activeFriends = this.getActiveFriends();
    const status = this.active ? "active" : "away";

    return `${this.firstName} ${this.lastName} ${this.age}) from ${this.location}
    Currently ${status}
    ${activeFriends} active friends out of ${this.friends.length} total
    Interest: ${this.interests.join(', ')}
    Connected and sharing life's adventues`;
  },
};

// Test your user profile system
console.log(user.getSummary());
user.addFriend("Alex", "active");
user.toggleStatus();
console.log(`\nAfter updates:`);
console.log(user.getSummary());


