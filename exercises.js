//This will be a file containing the exercises from each day for review.

// Days 1 and 2 are not added yet,

//Day 3 Lvl2

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
//By clicking the button on screen "Calc Area Circle"

//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120

//i have written a function that once you click a button "calculate pay" asks the amount of hours worked and rate of pay, if hours over 40, it will calculate overtime pay, if not it will just calculate regular pay


//If the length of your name is greater than 7 say, your name is long else say your name is short.

//created function that runs when you click button "get name length" that does the requested task

//Compare your first name length and your family name length and you should get this output.
//button Compare Name will ask you for you name and give you a response depending on the names length

/*Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
I am 225 years older than you. */


//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
//click button Drive Age


//3153600000 100 years in seconds

//click Lifetime Left it will ask your birthyear, calc the age and then give you how much time you have left in console

//Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
//click button Drive Age

//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
//click compare age



/*If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

    using if else
    ternary operator.

  let a = 4
  let b = 3

  4 is greater than 3 */
  //click button compare a & b

  //Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

  //click button odd or even

  //Write a code which can give grades to students according to theirs scores: 
/*
    80-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F
*/
//click get grade button

/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

    September, October or November, the season is Autumn.
    December, January or February, the season is Winter.
    March, April or May, the season is Spring
    June, July or August, the season is Summer
*/
//click on get season

/*
    Declare an empty array;
        const arr = []
    Declare an array with more than 5 number of elements
        const arr = Array(5).fill(X)
    Find the length of your array
        console.log(arr.length)
    Get the first item, the middle item and the last item of the array
        const arr = [0, 1, 2, 3, 4]
        function getItems() {
            let fItem = arr.splice(0, 1)
            let mItem = arr.splice(2, 1)
            let lItem = arr.splice(4, 1)
            console.log arr
            console.log(`first item: ${fItem} , middle item: ${mItem} , last item: ${lItem}`)

        }
    Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
        const mixedDataTypes = [true, 12, 'twelve' , [0, 1, 2], null, false]
    console.log(mixedDataTypes.length)
    Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
        const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

    Print the array using console.log()
        console.log(itCompanies)
    Print the number of companies in the array
        console.log(itCompanies)
    Print the first company, middle and last company
        console.log(itCompanies[0])
        console.log(itCompanies[3])
        console.log(itCompanies[6])
    Print out each company
        function printCompanies() {
            for (let i = 0; i < itCompanies.length; i++) {
                console.log(itCompanies[`${i}`])
            }
        } //this function prints each item
    Change each company name to uppercase one by one and print them out
        function changeValues() {
            for (let i = 0; i < itCompanies.length; i++) {
            itCompanies[`${i}`] = itCompanies[`${i}`].toUpperCase()
        }
        console.log(itCompanies)
    }
    Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
        console.log(itCompanies.join)
    Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
        function checkItArr(comp) {
            let isThere = itCompanies.includes(comp)
            isThere === -1 ? console.log(`${comp} is not on the list`) : console.log(`${comp} is on the list`)

        }
    Filter out companies which have more than one 'o' without the filter method
    Sort the array using sort() method
        console.log(itCompanies.sort())
    Reverse the array using reverse() method
        console.log(itCompanies.reverse())
    Slice out the first 3 companies from the array
        console.log(itCompanies.slice(0, 3))
    Slice out the last 3 companies from the array
        console.log(itCompanies.slice(4, 7))
    Slice out the middle IT company or companies from the array
        console.log(itCompanies.slice(3,4))
    Remove the first IT company from the array
        console.log(itCompanies.shift())
    Remove the middle IT company or companies from the array
        function removeMiddle() {
            let m = Math.round(itCompanies.length / 2) 
            mC = itCompanies.splice(`${m}`, 1)
            console.log(mC)
        }
    Remove the last IT company from the array
        console.log(itCompanies.pop())
    Remove all IT companies
        console.log(itCompanies.splice(0, 7)
*/

/*

Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
        files made and added to index.html
First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)

["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

13
    function scrubText() {
        let p words.indexOf(".")
        console.log p
    }

        let words = text.split(" ")
        console.log(words)
        console.log(words.length)

In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

    add 'Meat' in the beginning of your shopping cart if it has not been already added
    add Sugar at the end of you shopping cart if it has not been already added
    remove 'Honey' if you are allergic to honey
    modify Tea to 'Green Tea'

In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)

["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
*/

/*Exercises: Level 1

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

    Iterate 0 to 10 using for loop, do the same using while and do while loop
        function forLoop() {
            for (i = 0; i <= 10; i++) {
                console.log(`${i}`)
            }
        }//this function will print 1-10 using for loop
        
        function doWhileLoop() {
            let i = 0
            do {
                console.log(`${i}`)
            } while (i <= 10)

            )
        }

        function whileLoop() {
            let i = 0
            while (i <= 10) {
                console.log(`${i}`)

            }
        }

    Iterate 10 to 0 using for loop, do the same using while and do while loop
        function forLoopBack() {
            for (i = 10; i >= 0; i--) {
                console.log(`${i}`)
            }
        }//this function will print 10-1 using for loop
        
        function doWhileLoopBack() {
            let i = 10
            do {
                console.log(`${i}`)
                i--
            } while (i >= 0)

            )
        }

        function whileLoopBack() {
            let i = 10
            while (i >= 0) {
                console.log(`${i}`)
                i--
            }
        }
    Iterate 0 to n using for loop
        function printNumberInput() {
            let inputNumber = prompt(`Enter the number to stop at`, `Here`)
            let i = 0
            while (i <= inputNumber) {
                console.log(i)
                i++ 
            }

        }
    Write a loop that makes the following pattern using console.log():

        #
        ##
        ###
        ####
        #####
        ######
        #######

            function printHashtags() {
                let hashArr = ["#"]
                for (i = 0; i <= 7; i++) {
                    console.log(hashArr)
                    hashArr.push("#")
                    
                }
            }

    Use loop to print the following pattern:

    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100

            function printNumSum() {
                for(let i = 0; i <= 10; i++){
                    console.log(`${i} * ${i} = ${i * i}`)
                }
            }
            function printNumPattern() {
                let numArr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                let otherNumArr = []
                let sum = 0
                for (i = 0; i < numArr.length; i++) {
                    otherNumArr.push(numbers[i] * i)
                }
                
            }
    Using loop print the following pattern

     i    i^2   i^3
     0    0     0
     1    1     1
     2    4     8
     3    9     27
     4    16    64
     5    25    125
     6    36    216
     7    49    343
     8    64    512
     9    81    729
     10   100   1000

    Use for loop to iterate from 0 to 100 and print only even numbers

    Use for loop to iterate from 0 to 100 and print only odd numbers

    Use for loop to iterate from 0 to 100 and print only prime numbers

    Use for loop to iterate from 0 to 100 and print the sum of all numbers.

    The sum of all numbers from 0 to 100 is 5050.

    Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

    The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

    Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

      [2550, 2500]

    Develop a small script which generate array of 5 random numbers

    Develop a small script which generate array of 5 random numbers and the numbers must be unique

    Develop a small script which generate a six characters random id: 5j2khz
    

    */