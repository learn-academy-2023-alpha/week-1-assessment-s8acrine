// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"


// I wrapped all of my code in functions so that they can be left uncommented and I would only need to comment out the console logs. If this is undesirable, one could always just console.log everything inside the function versus creating the function and console.logging the invocation of the function I BELIEVE. 



// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:

// Create a function named boilingPoint which takes one number as an input. Use a set of conditional statement to determine if that numbers is <, >, or = the boiling point of water (212). Return the inputted variable along with a string stating that it is below, above or at the boiling point. 

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

const boilingPoint = (temp) =>{
    if (temp == 212){
        return `${temp} is at the boiling point`
    } else if (temp > 212){
        return `${temp} is above the boiling point`
    } else if (temp < 212){
        return `${temp} is below the boiling point`
    } else {
        return "Something went wrong, perhaps you didn't enter a number?"
    }
}
// console.log(boilingPoint(temp1)) 
// console.log(boilingPoint(temp2)) 
// console.log(boilingPoint(temp3))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// Create a function padresRuns that will add the length of two arrays, and output the combined length of those arrays to the console. 

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

const padresRuns = (array1, array2) =>{
    return (array1.length + array2.length)
} 
// console.log(padresRuns(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns))

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// Create a function that converts a string into an array, then reverses that array, converts it BACK into a string, then return the inputted string reversed

const currentCohort = "Alpha 2023"
// Expected output: "3202 ahplA"

const stringReverser = (string) => {
    return (string.split("").reverse().join(""))
}
// console.log(stringReverser(currentCohort))

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// Create a function that takes an array and a number as inputs
// The function should return the index position of the last instance of the given number

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

const lastIndexFinder = (array, value) => {
    return(myNumbers.lastIndexOf(value))
}
// console.log(lastIndexFinder (myNumbers, givenValue1))
// console.log(lastIndexFinder (myNumbers, givenValue2))


// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// Create a function arraySortMaxMin that takes an array of numbers as in input and returns the array sorted from largest value to smallest value using the .sort function

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]


const arraySortMaxMin = (array) => {
    return array.sort((b,a) => a-b)
}

// console.log(arraySortMaxMin(sanDiegoSummerTemperatures))
// console.log(arraySortMaxMin(sanDiegoWinterTemperatures))
