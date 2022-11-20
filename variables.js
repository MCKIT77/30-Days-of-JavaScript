//variables created for 30 Days Of JavaScript 
//this is starting from day 3
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
