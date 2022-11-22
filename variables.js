//variables created for 30 Days Of JavaScript 
//days 1-3
//This is a file declaring vaiables for "datatypes.js" to define

let firstName = "Jacob"
let lastName = "McKitrick"
let petsName = "Koko"
let age = "27"
let isMarried = true
let country = "USA"
let problem = null
let yearNum = 2022
let city = "Moon"
const PI = 3.14
let challenge = '30 Days Of JavaScript'
let quote = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
let quoteMotherTheresa = `Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
let num1 = '10'
let num2 = 10
let num3 = "9.8"
let float1 = '9.8'
let word1 = 'Python'
let word2 = "Jargon"
let bigDogs = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
let alertButton = document.getElementById('alert').innerHTML
let sentence1 = 'You cannot end a sentence with because because because is a conjunction'
let phraseWithSpace = ' 30 Days Of JavaScript '
let aCheck = /a/gi
let cStart = '30 '
let sentence2 = 'I hope this course is not full of jargon.'
function numberRandom(min, max) {
    let numRan = Math.floor(Math.random() * (max - min) + min)
    return numRan
}
let sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// //this function takes a target string and replaces things--didnt work right-located easier way
// function scrubSentence(target, dWord1, dWord2, dWord3, dWord4, pWord) {
//     let scrubbedSentence = target.replace(dWord1, pWord).replace(dWord2, pWord).replace(dWord3, pWord).replace(dWord4, pWord)
//     return scrubbedSentence
// }


let emp1 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let regEx = /\d+/
// let iNum = prompt('Enter a Number', 'Type Number Here')

// const now = new Date()
// const year = now.getFullYear() // return year
// const month = now.getMonth() + 1 // return month(0 - 11)
// const date = now.getDate() // return date (1 - 31)
// const hours = now.getHours() // return number (0 - 23)
// const minutes = now.getMinutes() // return number (0 -59)

// function calcArea() {
//     let baseOfTriangle = prompt("Input triangle base in inches", "Here")
//     let heightOfTriangle = prompt("Input triangle height in inches", "Here")
//     console.log(baseOfTriangle, heightOfTriangle)
//     let areaOfTriangle = 0.5 * baseOfTriangle * heightOfTriangle
//     console.log(`The area of the triangle is ${areaOfTriangle}`)
// }
// function calcPerimeter() {
//     let sideAOfTriangle = prompt("Input triangle side A in inches", "Here")
//     let sideBOfTriangle = prompt("Input triangle side B in inches", "Here")
//     let sideCOfTriangle = prompt("Input triangle side C in inches", "Here")
//     console.log(sideAOfTriangle, sideBOfTriangle, sideCOfTriangle)
//     let perimeterOfTriangle = +sideAOfTriangle + +sideBOfTriangle + +sideCOfTriangle
//     console.log(`The perimeter of the triangle is ${perimeterOfTriangle}`)
// }

//this is starting from day 3


const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${year}/${month}/${date} ${hours}:${minutes}`) // 4/1/2020 0:56

/*this function will calculate area of a triangle 
and rectangle by asking the user for the base and height*/

function calcArea() {
    let iBase = prompt(`Enter the Base`, `Here`)
    let iHeight = prompt(`Enter the Height`, `Here`)
    tArea = .5 * +iBase * +iHeight
    rArea = +iBase * +iHeight
    rPerim = 2 * (+iBase + +iHeight)
    console.log(`The area of a triangle with chosen dimensions would be ${tArea}`)
    console.log(`The area of a rectangle with chosen dimensions would be ${rArea}`)
    console.log(`The perimeter of a rectangle with chosen dimensions would be ${rPerim}`)

}

function calcAreaCir() {
    let cRad = prompt(`Enter the Radius of the Circle please`, `Here`)
    cArea = (c = 2 * +PI * +cRad)
    console.log(`The Area of the Circle with the chosen dimensions would be ${cArea}`)
}

function calcSlope() {
    let x1 = prompt(`Please provide 1st pair 1st digit`)
    let y1 = prompt(`Please provide 1st pair 2nd digit`)
    let x2 = prompt(`Please provide 2nd pair 1st digit`)
    let y2 = prompt(`Please provide 2nd pair 2nd digit`)
    slopeForm1 = +y2 - +y1
    slopeForm2 = +x2 - +x1
    // let slopeForm = parseInt((y2 - y1)`/`(x2 - x1))
    console.log(`${slopeForm1}\/${slopeForm2}`)
}

function calcPay() {
    let h = prompt(`Enter number of hours worked`, `Here`)
    let r = prompt(`Enter pay rate per hour`, `Here`)
    if (h > 40) {
        let oth = +h - 40
        let otPay = (1.5 * +r) * +oth
        let pay = (+h - +oth) * +r
        let ttlPay = +pay + +otPay
        console.log(`Hours worked: ${h}`)
        console.log(`Rate of pay per hour ${r}`)
        console.log(`Your pay is $${pay}`)
        console.log(`Your overtime pay (time and a half) is $${otPay}`)
        console.log(`Your total payment before taxes is ${ttlPay}`)
    } else {
        let pay = +h * +r
        console.log(`Hours worked: ${h}`)
        console.log(`Rate of pay per hour ${r}`)
        console.log(`Your pay is ${pay}`)
    }
}

function countName() {
    let fName = prompt(`Enter your first name please`)
    if (fName.length > 7) {
        console.log(`${fName}, your name is long`)
    } else {
        console.log(`${fName}, your name is short`)
    }
}


function compareName() {
    fName = prompt(`Enter your first name please`)
    lName = prompt(`Enter your last name please`)
    if (fName.length > lName.length) {
        console.log(`Your first name, ${fName} is longer than your family name, ${lName}`)
    } else {
        console.log(`Your first name, ${fName} is shorter than your family name, ${lName}`)
    }
}

function compareAge() {
    let myAge = 250
    let yourAge = 25
    let ageDiff = +myAge - +yourAge

    console.log(`i am ${ageDiff} years older than you`)
}


const DRIVING_AGE = 16

function canDrive() {

    let uAge = prompt(`What year were you born? (XXXX)`)
    rAge = +year - +uAge
    yearsLeft = +DRIVING_AGE - +rAge
    if (rAge > DRIVING_AGE) {
        console.log(`You are ${rAge}. You are old enough to drive`)
    } else {
        console.log(`You are ${rAge}. You will be able to drive in ${yearsLeft} years`)
    }
}

function addLifetime() {
    let uAge = prompt(`What year were you born? (XXXX)`)
    rAge = +year - uAge
    console.log(`If you live 100 years, you would have ${+rAge * 31536000} Seconds left to live:]`)

}

function getDate() {
    console.log(`${year}/${month}/${date}`)
}
