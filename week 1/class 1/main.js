// console.log("Hello world");
// console.log(a);

// const a = 2;
// console.log(a);

// DataTypes

let nameOf = "Gaurav";
let age = 21;
let isMarried = false;

// console.log("This is " + nameOf + " and he is " + age + " years old and " + isMarried);

// Conditionals
// if (isMarried == true) {
//     console.log(nameOf + " is married")
// } else {
//     console.log(nameOf + " is not married")
// }

// Loops
// for (let i = 0; i <= 1000; i++) {
// console.log(i);
// // }
// let answer = 0;

// for (let i = 1; i <= 100; i++) {
//     answer = answer + i;
//     console.log(answer);

// }


// Complex Primitives
const personArray = ["Gaurav", "Varun", "prasad", "prasanna "];
const ages = [21, 19, 20, 19];

// console.log(personArray[0], ages[0]);
// console.log(personArray[1], ages[1]);
// console.log(personArray[2], ages[2]);
// console.log(personArray[3], ages[3]);

//print even numbers from an array
// const numberOfPeople = ages.length;

// for (let i = 0; i < numberOfPeople; i++) {
//     if (ages[i] % 2 == 1) {
//         console.log(ages[i])
//     }
// }

// Object
const users = [{
        firstName: "Gaurav",
        gender: "male"
    },
    {
        firstName: "varun",
        gender: "male"
    },
    {
        firstName: "Mummy",
        gender: "female"
    },
]


// for (let i = 0; i < users.length; i++) {
//     if (users[i]["gender"] == "male") {
//         console.log(users[i]["firstName"])
//     }
// }

// functions

// function sum(a, b) {
//     return a + b;
// }
// const value = sum(2, 1);
// console.log(value);

// function callbacks

// function sum(num1, num2, fnToCall) {
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data)
// }

// const ans = sum(2, 4, displayResult);

// function calculatArithmatic(a, b, arithmaticFinalFunction) {
//     const ans = arithmaticFinalFunction(a, b);
//     return ans;
// }

// function sum(a, b) {
//     return a + b;
// }

// const value = calculatArithmatic(1, 3, sum);
// console.log(value);

// function doCalculations(a, b, basicMaths) {
//     const giveAns = basicMaths(a, b);
//     return giveAns;
// }

// function multiply(a, b) {
//     return a * b;
// }

// const newValue = doCalculations(4, 3, multiply)
// console.log(newValue);

// function greet() {
//     console.log("hello world");
// }

// setTimeout(greet, 3000)

// function calculatArithmatic(a, b, arithmaticFinalFunction) {
//     const ans = arithmaticFinalFunction(a, b)
//     return ans;
// }

// function sum(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function division(a, b) {
//     return a / b;
// }
// const value = calculatArithmatic(4, 4, division);
// console.log(value);

// const logHello = () => {
//     console.log("Hello")
// }
// setTimeout(logHello, 2000);


// console.log("1");
// setTimeout(() => {
//     console.log("2")
// }, 0)
// console.log("3");

// const names = ['Gaurav', 'varun', 'sunil', 'neel', 'vishesh'];

// names.forEach((named) => console.log(names))

// const myforEach = (arr, cb) => {
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         cb(element)
//     }
// }

// myforEach(names, (named) => {
//     console.log(named);
// })


setTimeout(a, 1000)

function a() {

}