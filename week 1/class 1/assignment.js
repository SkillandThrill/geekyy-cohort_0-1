// function countdown() {
//     let count = 10;

//     function decreaseCount() {
//         console.log(count)
//         count--;

//         if (count >= 1) {
//             setTimeout(decreaseCount, 1000)
//         }
//     }
//     decreaseCount();
// }

// countdown();



// function measureTime() {
//     const startTime = Date.now();

//     setTimeout(() => {
//         const endTime = Date.now();
//         const timetaken = endTime - startTime;

//         console.log(`Time taken: ${timetaken} miliseconds`);
//     }, 1000);
// }

// measureTime();


// Create a Terminal clock

function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, 'O');
    const minutes = String(now.getMinutes()).padStart(2, 'O');
    const seconds = String(now.getSeconds()).padStart(2, 'O');

    console.clear();
    console.log(`${hours}:${minutes}:${seconds}`);

}

setInterval(updateClock, 1000)






// const user = {
//     name: "Gaurav",
//     gender: "male",
//     address: {
//         street: "Towerline",
//         Area: "Morewasti",
//     }
// }

// // console.log(user["address"]["Area"])
// const address = user["address"]
// const street = address["street"]

// console.log(address)
//     // console.log(street)