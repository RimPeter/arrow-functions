// /**
//  * To run this file in Gitpod, use the
//  * command node arrow-functions.js in the terminal
//  */

// // Vanilla JavaScript Function

// function addTwoNumbers(a, b) {
//     // Code block
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5)
// console.log(sum);

// // Arrow Function With Parameters

// const addTwoNumbers2 = (a, b) => {
//     // Code block
//     return a + b;
// }
// let sum2 = addTwoNumbers(3, 5)
// console.log(sum2);

// // Single Line Arrow Function With Parameters

// const addTwoNumbers3 = (a, b) => a + b;

// let sum3 = addTwoNumbers(8, 5)
// console.log(sum3);

// // Implicit Returns

// const saySomething = message => console.log(message);
// saySomething('hello world');

// const sayHello = () => console.log('hello');
// sayHello();

// // Returning Multiple Lines

// const returnMultipleLines = () => (
//     `<p>
//     This is a multiline string
//     <p>`
// )

// // No spread operator
// let arr1 = [1,2,3];
// let arr2 = arr1;
// arr2.push(4);
// console.log('2nd array:', arr2);
// console.log('1st array:', arr1);

// // Copying an array
// let arr3 = [5,6,7];
// let arr4 = [...arr3];

// arr4.push(7);
// console.log('3rd array:', arr3);
// console.log('4th array:', arr4);

// // Copying an object
// let obj1 = {a:1, b:2, c:3};
// let obj2 = {...obj1, d:4};
// let obj3 = {...obj2, b:5};
// console.log('1st object:', obj1);
// console.log('2nd object:', obj2);
// console.log('3rd object:', obj3);

// // Copying only part of the array
// let arr5 = [...arr1, {...obj1}, ...arr3, 'x', 'y', 'z'];
// console.log(arr5);

// //Regular function call
// const sumALL = (a, b, c) => a+b+c;
// let sum1 = sumALL(1,2,3,);
// console.log(sum1)

// //Extra arguments are ignored
// let sum10 = sumALL(1,2,3,4,5,6);
// console.log(sum10)

// // Function using ...rest
// const sumRest = (a, b , c, ...rest) => {
//     let sum = a+b+c;
//     for (let i of rest) {
//         sum += i;
//     }
//     return sum;
// }

// let sum13 = sumRest(1,2,3,4,5,6);
// console.log("Sum13: ", sum13);

// const sumRest2 = (...rest) => {
//     let sum = 0;
//     for (let i of rest) {
//         sum += i;
//     }
//     return sum;
// }

// let sum14 = sumRest2(1,2,3,4,5,6);
// console.log("Sum14: ", sum14);

//Destructuring Arrays

let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

// let [john, mary, joe] = ages;

// console.log(john, mary, joe)
// //Destructuring Objects

// let jobs = {
//     mike: "designer",
//     jill: "developer",
//     alicia: "accountant",
// };
// let {mike, jill, alicia} = jobs;
// console.log(mike, jill, alicia);

// //Destructuring Subsets

// let languages = ["english", "french", "german", "japanese"];
// let [,johnNative, ,johnSecondary] = languages;
// console.log(johnNative, johnSecondary);

// let lang = {
//     firstL:"english",
//     secondL:"french",
//     thirdL:"german",
//     fourthL:"japanese",
// };

// let {firstL, thirdL} = lang
// console.log(firstL, thirdL)

// //Using rest parameter syntax

// let fruits = ["apple", "orange", "banana", "peach", "cherry"];
// let [favorite, secondFavorite, ...others] = fruits;

// console.log(favorite)
// console.log(secondFavorite)
// console.log(others)

// let favoriteFoods = {
//     brian:"pizza",
//     anna:"pasta",
//     sarah:"vegetarian",
//     andrea:"steak",
// };

// let {brian, anna, ...rest} = favoriteFoods;

// console.log(brian)
// console.log(anna)
// console.log(rest)

// //Challenge:

// let students = [
//     {
//         name: 'Emily',
//         subjects: ['science', 'english', 'art'],
//         teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
//         results: {science: 93, english: 80, art: 95},
//     },
//     {
//         name: 'John',
//         subjects: ['art', 'cad', 'english', 'maths', 'science'],
//         teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
//         results: {maths: 90, english: 75, cad: 87},
//     },
//     {
//         name: 'Adam',
//         subjects: ['science', 'maths', 'art'],
//         teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
//         results: {science: 93, maths: 77, art: 95},
//     },
//     {
//         name: 'Fran',
//         subjects: ['science', 'english', 'art'],
//         teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
//         results: {science: 93, english: 87, art: 95},
//     }
// ];

// const makeList = (arr, student) => {
//     for (let i of arr) {
//         if (i.name === student) {
//             theSubjects = i.subjects;
//             //console.log(i.subjects);
//         }
//       }
//     return theSubjects;
//     }
// let theStudents = makeList(students, 'John');
// let [first, second, ...rest] = theStudents;

// console.log(first, second, rest);

//map() method:
//Using loop
// let num = [1,2,3,4,5,6,7,8,9,10];
// let results = [];
// for (let i of num) {
//     results.push(i * 2);
// }
// console.log(results);

// //Using map() method:
// const double = function (n) {
//     return n * 2;
// }
// const mapResults = num.map(double);
// console.log(mapResults);

// //simplified with map() method but without arrow function:

// const mapResults1 = num.map(function (n) {return n * 2;})
// console.log(mapResults1);
// //simplified with map() method + arrow function:

// const mapResults2 = num.map((n) => n * 2);
// console.log(mapResults2);

// //with objects:
// const students = [
//     {
//         id: 1,
//         name: 'Mark',
//         profession: 'teacher',
//         skill: 'maths',
//     },
//     {
//         id: 2,
//         name: 'Elle',
//         profession: 'engineer',
//         skill: 'science',
//     },
//     {
//         id: 3,
//         name: 'John',
//         profession: 'designer',
//         skill: 'art',
//     },
//     {
//         id: 4,
//         name: 'Anna',
//         profession: 'doctor',
//         skill: 'medicine',
//     },
// ];

// students.map(i => console.log(i.id, i.name));
// console.log(students.map(i => (i.id + ' ' + i.name)));
// const studentsWithId = students.map(i => [i.id, i.name]);
// console.log(studentsWithId);

// let students = [
//   {
//     name: "John",
//     subjects: ["maths", "english", "cad"],
//     teacher: { maths: "Harry", english: "Joan", cad: "Paul" },
//     results: { maths: 90, english: 75, cad: 87 },
//   },
//   {
//     name: "Emily",
//     subjects: ["science", "english", "art"],
//     teacher: { science: "Iris", english: "Joan", art: "Simon" },
//     results: { science: 93, english: 80, art: 95 },
//   },
//   {
//     name: "Adam",
//     subjects: ["science", "maths", "art"],
//     teacher: { science: "Iris", maths: "Harry", art: "Simon" },
//     results: { science: 93, maths: 77, art: 95 },
//   },
//   {
//     name: "Fran",
//     subjects: ["science", "english", "art"],
//     teacher: { science: "Iris", english: "Joan", art: "Simon" },
//     results: { science: 93, english: 87, art: 95 },
//   },
// ];

// const [john, ...rest] = students.map(i => [i.name, i.results]);

// console.log(john, rest);

// //filter() method:

//simple filter:

// const people = [
//     {
//         name: 'John',
//         age: 30,
//     },
//     {
//         name: 'Anna',
//         age: 25,

//     },
//     {
//         name: 'Fran',
//         age: 35,

//     },
//     {
//         name: 'Tom',
//         age: 22,

//     }
// ];

// const filteredPeople = people.filter(i => i.age > 21);
// console.log(filteredPeople);

// const Fran = people.filter((i) => i.name === "Fran");
// const Fran2 = people.filter(i => i.name === 'Fran')[0];
// console.log(Fran);
// console.log(Fran2);

//complex filter:

// const students = [
//     {
//         id: 1,
//         name: 'Mark',
//         profession: 'teacher',
//         skill: [
//             {subject: 'maths', score: 90},
//             {subject: 'english', score: 80},
//             {subject: 'cad', score: 87},
//         ]
//     },
//     {
//         id: 2,
//         name: 'Elle',
//         profession: 'engineer',
//         skill: [
//             {subject: 'science', score: 90},
//             {subject: 'english', score: 80},
//             {subject: 'art', score: 87},
//         ]
//     },
//     {
//         id: 3,
//         name: 'John',
//         profession: 'designer',
//         skill: [
//             {subject: 'art', score: 90},
//             {subject: 'english', score: 80},
//             {subject: 'cad', score: 87},
//         ]
//     },
//     {
//         id: 4,
//         name: 'Anna',
//         profession: 'doctor',
//         skill: [
//             {subject: 'medicine', score: 90},
//             {subject: 'english', score: 80},
//             {subject: 'cad', score: 87},
//         ]
//     },
// ];
// // filter skills with score > 85
// const filteredSkills = students.map(i => i.skill.filter(j => j.score > 85));
// console.log(filteredSkills);

// let students = [
//   {
//     name: "John",
//     subjects: ["maths", "english", "cad"],
//     teacher: { maths: "Harry", english: "Joan", cad: "Paul" },
//     results: { maths: 90, english: 75, cad: 87 },
//   },
//   {
//     name: "Emily",
//     subjects: ["science", "english", "art"],
//     teacher: { science: "Iris", english: "Joan", art: "Simon" },
//     results: { science: 93, english: 80, art: 95 },
//   },
//   {
//     name: "Adam",
//     subjects: ["science", "maths", "art"],
//     teacher: { science: "Iris", maths: "Harry", art: "Simon" },
//     results: { science: 84, maths: 97, art: 95 },
//   },
//   {
//     name: "Fran",
//     subjects: ["science", "english", "art"],
//     teacher: { science: "Iris", english: "Joan", art: "Simon" },
//     results: { science: 67, english: 87, art: 95 },
//   },
// ];

// //You will create a single line of code that should filter the students array and return only the items whos maths scores are greater than or equal to  90.  As this needs to be done in a single line of code, you will also be required to use an arrow function that does not have a return statement.

// const topMaths = students.filter(student => student.results.maths >= 90);
// console.log(topMaths);

// //reduce() method:
//summing numbers:
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = num.reduce((acc, cur) => {
//   console.log("accumulator:", acc, "current:", cur, "total:", acc + cur);
//   return acc + cur;
// }, 0);

// console.log(sum);

// const teamMembers = [
//   {
//     name: "John",
//     profession: "designer",
//     skill: "art",
//     yrsExperience: 5,
//   },
//   {
//     name: "Anna",
//     profession: "doctor",
//     skill: "medicine",
//     yrsExperience: 10,
//   },
//   {
//     name: "Tom",
//     profession: "designer",
//     skill: "maths",
//     yrsExperience: 7,
//   },
//   {
//     name: "Elle",
//     profession: "doctor",
//     skill: "science",
//     yrsExperience: 8,
//   },
// ];
// // names of all team members by proffession:

// let teamMembersByProfession = teamMembers.reduce((acc, cur) => {
//   let key = cur.profession;
//   if (!acc[key]) {
//     acc[key] = [];
//   }
//   acc[key].push(cur.name);
//   return acc;
// }, {});

// console.log(teamMembersByProfession);

// let designers = teamMembersByProfession.designer;
// console.log(designers);

// // totaling a specific object property:
// let totalExperience = teamMembers.reduce((acc, cur) => acc + cur.yrsExperience, 0);
// console.log(totalExperience);

// // Grouping by a property, and totaling the grouped values:

// let experienceByProfession = teamMembers.reduce((acc, cur) => {
//   let key = cur.profession;
//   if (!acc[key]) {
//     acc[key] = 0;
//   }
//   acc[key] += cur.yrsExperience;
//   return acc;
// }, {});

// console.log(experienceByProfession);


let students = [
  {
    name: "John",
    subjects: ["maths", "english", "cad"],
    teacher: { maths: "Harry", english: "Joan", cad: "Paul" },
    results: { maths: 90, english: 75, cad: 87 },
  },
  {
    name: "Emily",
    subjects: ["science", "english", "art"],
    teacher: { science: "Iris", english: "Joan", art: "Simon" },
    results: { science: 93, english: 73, art: 95 },
  },
  {
    name: "Adam",
    subjects: ["science", "maths", "art"],
    teacher: { science: "Iris", maths: "Harry", art: "Simon" },
    results: { science: 93, english: 88, maths: 97, art: 95 },
  },
  {
    name: "Fran",
    subjects: ["science", "english", "art"],
    teacher: { science: "Iris", english: "Joan", art: "Simon" },
    results: { science: 93, english: 87, art: 95 },
  },
];

//return the value of students.name and the value of students.results.english whose students.results.english is the highest

const highestEnglishScore = (acc, current) => {
  const {name: name, results: { english: english },} = current;
  if (acc === null) {
    return { name: name, max: english };
  }
  if (english > acc.max) {
    return { name: name, max: english };
  }
  return acc;
};
const biggest = students.reduce(highestEnglishScore, {name: null, max: null});
console.log(biggest);



// const highestEnglishScore = (acc, current) => {
//   const {
//     name: currentName,
//     results: { english: currentEnglish },
//   } = current;
//   // Check if acc is null (initial value) or if the current English score is greater than the acc's score
//   if (acc === null || currentEnglish > acc.score) {
//     return { name: currentName, score: currentEnglish };
//   }
//   return acc;
// };

// // Use reduce method on students array with highestEnglishScore function, initializing with null
// const biggest = students.reduce(highestEnglishScore, null);

// console.log(biggest);




// let biggest = students.reduce((acc, cur) => {
//   if (acc.results.english > cur.results.english) {
//     return acc;
//   } else {
//     return cur;
//   }
// }, students[0]);
// console.log(biggest.name, biggest.results.english);

