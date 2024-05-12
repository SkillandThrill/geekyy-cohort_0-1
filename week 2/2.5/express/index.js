// // function sum(a, b) {
// //     return a + b;
// // }

// const sum = (a, b) => {
//     return a + b;
// }

// const ans = sum(1, 2)
// console.log(ans)

//given an array, give me back a new array in which every value is multiplied by 2
// [1,2,3,4,5]
//[2,4,6,8,10]

// const input = [1, 2, 3, 4, 5];
// const newArray = []
// for (let i = 0; i < input.length; i++) {
//     newArray.push(input[i] * 2)
// }
// console.log(newArray)

const arr = ["Gaurav", "Varun", "Ronak", "Parth"];
// ans
const ans = arr.filter(function(n) {
    if (n.startsWith("Gau")) {
        return true;
    } else {
        return false;
    }
});

console.log(ans);

console.log("Gaurav".startsWith("G"))