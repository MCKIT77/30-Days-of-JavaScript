//variables created for 30 Days Of JavaScript 
//this is starting from day 3

const PI = 3.14
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
        if(h > 40) {
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
    if(fName.length > 7) {
        console.log(`${fName}, your name is long`)
    } else {
        console.log(`${fName}, your name is short`)
    }
}

