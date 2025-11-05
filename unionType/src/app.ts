console.log("Hello Application")

//union type ธรรมดา
let age:number | string

age=50
age="50"
console.log(age)

//union  type aliase
type Point ={
    x:number,
    y:number
}

type Position = {
    lat:number,
    long:number
}

let coordinates:Position |Point 
coordinates = {
    x:5,
    y:10,
    lat:10
}
console.log(coordinates)

//union type function

function sayHi(person:string|string[]):void{
    console.log(`Hello ${person}`)
}
sayHi("Phoo")
sayHi(["A","B"])

//literal type
type Role = "Admin" |"User"

let user:Role = "User"
// let user:Role = "Editor" ไม่สามารถเปลี่ยนได้