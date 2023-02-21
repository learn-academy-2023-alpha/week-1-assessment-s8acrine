# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer:

Researched answer:

1. What is git? What is the difference between git and Github?

Your answer: git is a software that handles version tracking of files. GitHub is a cloud service that uses the git software to allow for version handling across multiple users and organizations. It creates a functional GUI website where teams can come together and collaborate on repositories through the cloud while managing the version and change tracking in a centralized location. 

Researched answer: Git is a version control system which allows you to manage and track changes to your code. GitHub allows for the management of Git repositories in the cloud across multiple users and organizations, while adding some additional functionality to manage code bases.

2. Which JavaScript operators will return a Boolean value?

Your answer: Greater than, less than, equal to, and strictly equal to will all return Boolean values.

Researched answer: Comparison operators are operators which compare two values (their operands) and return a Boolean value. Operators include equal and strictly equal (alongside their not equal and not strictly equal counterparts) greater than, greater than or equal, less than, less than or equal.

3. What is an index? What is the difference between index and value?

Your answer: An index is a numerical representation of the location of a value within a set of data. The main difference is that an index tells you WHERE data is, while a value tells you WHAT the data is.

Researched answer: Honestly, I'm pretty happy with this answer. I feel like anything else I lookup for more information is more of a rabit hole than further clarification. 

4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: Arrays and strings are similar in many ways, but have a few very key differences. Firstly, arrays and strings share some properties, such as length, being zero-indexed, and broadly, by being collections of different "things". The key difference becomes clear when you look at what each can contain. An Array can contain any amount, type, and combination of values; [1, true, "hello", null, 44] is a perfectly acceptable array. Strings, on the other hand, can only contain a series of individual characters. Strings also are a data type of their own. A string has a value, while an Array is a collection of values, it has no value of it's own. 

Researched answer: Strings look and act like arrays, in that they have length and store 'things' in indexed locations, but similarities are mostly superficial. A string is a primitive data type, meaning that even though it may look like a collection of characters, it cannot, on it's own, be broken down further. The string "Hello" always has the value "Hello". Arrays, however, can have many methods run on them, including sort()ing, split()ing, pop()ping, etc.

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: In paired programming, each member of the pair will take a specific role, each with it's own responsibilities. The 'Driver' will be the person with their hands on the keyboard, actively typing out code and responsible for getting the code from their local to the repository. The 'Navigator' is responsible for guiding the driver through each step. Their job is to work through what code needs to be created, and serve as a second pair of eyes to catch any typos or mistakes that may occur. 

Researched answer: Paired programming is a technique in code development that uses two programmers to create code that is typically of a higher quality than what one programmer could do on their own. A driver focuses on the tactical implementation of the code, quite literally coding out line by line. The Navigator (or observer) has their eye on the code being written, checking for any conceptual or typographical errors, while also allowing the driver to focus on their role by thinking ahead to what is coming next, what sort of issues need to be handled, etc. It is common for Driver and Navigator to switch roles frequently to balance the cognitive load of each position. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions:
A higher order function is a subset of built-in methods, but they use functions as their input, instead of a value. In this way, a function can be built, and then iterated through with a higher order function
2. Jest:
Jest is a testing framework (a collection of snippets of code) that allow testing of code. A Jest test allowd a developer to set up a series of 'ecpect' statements to call a function and a matcher statement to compare what is output from the function to what we expect it to be. For example we could set up an expect statement to call a function that multiplies a number and use a matcher statement such as .toEqual to make sure that what is input is coming out the other end of the function. 
3. Objects:
In javascript, objects are made up of key:value pairs. The key is a symbol, which can be called on like a variable, and the value is what is called on. The value can also be a function. In this way, you can create a collection of data or actions that are all held under one overarching umbrella code block. 
4. Method:
A method is a function which belongs to an object. This allows the function to reference within it's own object.
5. Classes:
Classes are a blueprint of sorts for creating objects. a class can store various methods and data that can be called on. For example, if you wanted to create a series of objects that held multiple types of data, you could create the class, then create new objects. By createing an instance of the class as an object, that object now can access all methods of a class. If you are going to have many objects that will need access to the same methods, it is advantageous to create a class to store those methods instead of rewriting those methods each time for each object you are going to create. 