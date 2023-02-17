// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: This should log 10, the length of the string represented by cohort
// b) Verify and explain: This outputted 10, as expected! Length should give the length of the string (or arrray!) as a person would count it: 1, 2, 3 versus index positions, which start at 0

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: this should log "o" as it is the character at the 4th index of the string
// b) Verify and explain: This outputted o as expected. Because strings (and arrays!) are indexed starting at 0, index 4 would produce the 5th character in the string

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: This should output the string "Ruby" as it is the VALUE stored at the index 1 of the array
// b) Verify and explain: Outputted as expected, not only is it important to remember that arrays are zero-indexed, an array is a collection of data, so the entire string of "Ruby" is held at the 1 index. 
//To be honest, I didn't even notice that this was a array set to a constant, then an index set to a constant, then called in the console log by extraction. Not sure if that's a good thing or a bad thing at this point. I might have just read it and put it together without thinking about it. 

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: I'm not sure if the toUpperCase() function acts on each member of an array or not. I'll assume it does NOT, so it would output an error, but let's find out!
// b) Verify and explain: Console outputted the error 'TypeError: weekendDays.toUpperCase is not a function' so it appears I intuited correctly. Looked at some documentation and confirmed that the toUpperCase METHOD (not neccessarily a function but probably was built off of a function at some point) is a string reference method, so it works with strings only, and it is an accessor, not a mutator, so the original string is unchanged. Cool :-)

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: Abstraction! dataTypes.length would be the length of datatypes, which should be a number, so the type should be a number, I believe. 
// b) Verify and explain: Did not correctly type out my answer, I did not clearly state that it should OUTPUT number, but that is exactly what it did. 
