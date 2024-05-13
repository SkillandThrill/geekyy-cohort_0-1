/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateSumTime(n) {
    // Get the current timestamp before calculating the sum
    const startTime = Date.now();

    // Calculate the sum from 1 to n
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    // Get the current timestamp after calculating the sum
    const endTime = Date.now();

    // Calculate the time taken in seconds
    const timeTakenInSeconds = (endTime - startTime) / 1000;

    // Return the time taken
    return timeTakenInSeconds;
}

// Test cases
console.log("Time taken to calculate sum from 1 to 100:", calculateSumTime(100), "seconds");
console.log("Time taken to calculate sum from 1 to 100000:", calculateSumTime(100000), "seconds");
console.log("Time taken to calculate sum from 1 to 1000000000:", calculateSumTime(1000000000), "seconds");