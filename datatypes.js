//This script is some exercises and datatypes

// //This script will print the type of each variable in "variables.js"
// console.log(typeof firstName)
// console.log(typeof lastName)
// console.log(typeof country)
// console.log(typeof PI)
// console.log(typeof problem)
// console.log(typeof age)
// console.log(typeof isMarried)
// //This will output only parts of the string
// console.log(firstName.substring(0, 5))
// console.log(lastName.substring(0, 5))
// console.log(firstName.includes("Jac"))
// console.log(firstName.includes("jac"))
// console.log(lastName.indexOf("c"))
// console.log(+age)
// console.log(challenge)
// console.log(challenge.length)
// console.log(challenge.toUpperCase())
// console.log(challenge.toLowerCase())
// console.log(challenge.substring(2, 21))
// console.log(challenge.substring(0, 2))
// console.log(challenge.includes("Script"))
// console.log(challenge.split())
// console.log(challenge.split(" "))
// console.log(bigDogs.slice(","))
// console.log(challenge.replace('JavaScript', 'Python'))
// console.log(challenge.charAt(15))
// console.log(challenge.charCodeAt(11))
// console.log(challenge.indexOf('a'))
// console.log(alertButton)
// console.log(challenge.lastIndexOf('a'))
// console.log(sentence1.indexOf('because'))
// console.log(sentence1.lastIndexOf('because'))
// console.log(sentence1.search('because'))
// console.log(phraseWithSpace.trim(' '))
// console.log(challenge.startsWith('3'))
// console.log(challenge.endsWith('t'))
// console.log(challenge.match(aCheck))
// console.log(cStart.concat('Days Of', ' JavaScript'))
// console.log(challenge.repeat(2))
// console.log(quote)
// console.log(quoteMotherTheresa)
// //showing how to change strings to numbers
// console.log(num1 === num2)
// console.log(+num1 === num2)
// //rounding numbers and comparing strings to numbers
// console.log(Math.round(+float1) === num2)
// //showing if words contain the same letters
// console.log(word1, " ", word2)
// console.log(word1.includes('on'))
// console.log(word2.includes('on'))
// console.log(sentence2.includes('jargon'))
// //Generates random numbers between the two you input
// console.log(numberRandom(0, 100))
// console.log(numberRandom(50, 100))
// console.log(numberRandom(0, 255))
//this will print a pattern of numbers
// console.log("1 1 1 1 1")
// console.log("2 1 2 4 8")
// console.log("3 1 3 9 27")
// console.log("4 1 4 16 64")
// console.log("2 1 2 25 125")
// console.log(sentence1.match("because"))
// console.log(sentence3.replace(/#|!|%|&|\$|@|/g, ""))
// console.log(emp1.match(/\d+/g))
// console.log(5000 + 10000 + 15000)
// console.log("the employee's sallary is $30,000 per year")
// //End of Day 2 Exercises
// //Start of Day 3
// num2 > 0
//     ? console.log(`${num2} is a positive number`)
//     : console.log(`${num2} is a negative number`)

// // console.log(iNum)
// // const allSeconds = Date.now() //
// // console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

// // const timeInSeconds = new Date().getTime()
// // console.log(allSeconds == timeInSeconds) // true


// console.log(`${month}/${date}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56

// //Day 3 Exercises
// //Lvl 1
// // 1) Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
// /*variables created in variables.js
// let firstName = "Jacob"
// let lastName = "McKitrick"
// let age = "28"
// let isMarried = true
// let country = "USA"
// let problem = null
// let yearNum = 2022
// */
// console.log(typeof (yearNum))
// console.log(typeof (firstName))
// console.log(typeof (lastName))
// console.log(typeof (isMarried))
// console.log(typeof (city))
// console.log(typeof (country))
// console.log(typeof (age))



// // 2) Check if type of '10' is equal to 10
// console.log(num1 === num2)

// // 3) Check if parseInt('9.8') is equal to 10
// console.log(parseInt("9.8") === num2)

// // 4) Boolean value is either true or false.

// //  Write three JavaScript statement which provide truthy value.
// console.log(+num1 === num2)
// console.log(isMarried)
// console.log(Math.round(num3) === num2)

// //  Write three JavaScript statement which provide falsy value.
// console.log(num3 === num2)
// console.log(num1 === num2)
// console.log(!isMarried)


// // 5) Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3 //true
// 4 >= 3 //true
// 4 < 3 //false
// 4 <= 3 //false
// 4 == 4 //true
// 4 === 4 //true
// 4 != 4 //false
// 4 !== 4 //false
// 4 != '4' //true
// 4 == '4' //true
// 4 === '4' //false
// // Find the length of python and jargon and make a falsy comparison statement.
// console.log(word1.length, word2.length)
// console.log(word1.includes("jar"))

// 6) Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3)
// !(4 < 3)
// !(false)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')
// There is no 'on' in both dragon and python


// 7) Use the Date object to do the following activities

// // What is the year today?
// console.log(now.getFullYear())

// // What is the month today as a number?
// console.log(now.getMonth() + 1)

// // What is the date today?
// console.log(`Today is the ${now.getDay()}th day of the Week`)
// // What is the day today as a number?
// console.log(`Today is the ${now.getDate()}th day of the month`)
// // What is the hours now?
// console.log(`It is the ${now.getHours()}th Hour of the day`)
// // What is the minutes now?
// console.log(`${now.getMinutes()} minutes past the Hour`)
// // Find out the numbers of seconds elapsed from January 1, 1970 to now.
// console.log(`${Date.now()} seconds elapsed from January 1, 1970 to now.`)

//Lvl 2
// 1) Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// calcArea() //this function will prompt the user for both base and height and then print the area try it:]

// 2) Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// calcPerimeter() //this function will prompt the user for 3 sides and then print the perimeter try it:]

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// Calculate the slope, x-intercept and y-intercept of y = 2x -2

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// Compare the slope of above two questions.

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// If the length of your name is greater than 7 say, your name is long else say your name is short.

// Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.
// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
