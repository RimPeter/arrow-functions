/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNumbers(a, b) {
//     // Code block
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5)
// console.log(sum);


// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    // Code block
    return a + b;
}
let sum2 = addTwoNumbers(3, 5)
console.log(sum2);

// Single Line Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => a + b;

let sum3 = addTwoNumbers(8, 5)
console.log(sum3);

// Implicit Returns

const saySomething = message => console.log(message);
saySomething('hello world');

const sayHello = () => console.log('hello');
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    This is a multiline string
    <p>`
)

// No spread operator
let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);
console.log('2nd array:', arr2);
console.log('1st array:' arr1);

// Copying an array
let arr3 = [5,6,7];
let arr4 = [...arr3];

arr4.push(7);
console.log('3rd array:' arr3);
console.log('4th array:' arr4);
