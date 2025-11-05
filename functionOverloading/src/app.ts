console.log("Hello Appication   ")
//มีเรื่องjavascipt สมัยใหม่ด้วย

//function overloading คือ ชื่อfunction เหมือนกัน แต่พารามิเตอร์ต่างกัน
//แบบที่1
// function sayHi():string
// function sayHi(name:string):string
// function sayHi(name?:unknown):unknown{
//     if(!name){
//         return `Hello TypeScript`
//     }
//     if(typeof name == "string"){
//         return `Hello ${name}`
//     }
//     throw new Error("ชนิกข้อมูลไม่ถูกต้อง")
// }


// console.log(sayHi())
// console.log(sayHi("Phoo"))

//แบบที่2
function total(a:number,b:number):number
function total(a:string,b:string):string
function total(a:unknown,b:unknown):unknown{
    if(typeof a=="number" && typeof b=="number"){
        return a+b
    }
    if(typeof a=="string" && typeof b=="string"){
        return parseInt(a)+parseInt(b)
    }
    throw new Error("ชนิดข้อมูลไม่ถูกต้อง")
    
}

console.log(total(10,20))
console.log(total("10","20"))

//วิธีรวมarray spread Operator

const section:string[]=["audit","finance"]
const department:string[]=["programmer","marketing","graphic"]

department.push(...section)
console.log(department)

//rest parameter
const totalTest = (...numbers:number[])=>{

    return numbers.reduce((result,value)=>{
        return result+value
    },0)
}
console.log(totalTest(100,200))
console.log(totalTest(100,200,300))
console.log(totalTest(100,200,300,400))
console.log(totalTest(100,200,300,400,500))

//destructuring การสลายโครงสร้าง
//array
const colors:string[] = ["red","green","blue"]
const [red,green,blue]  = colors

console.log(red)

//object
const person={
    fname:"Phoo",
    age:4,
    address:"Phatum"
}
const {fname,age,address} = person

console.log(fname)