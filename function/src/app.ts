console.log("Hello Function");

//void

function sayHi() {
  console.log("Hello TypeScript");
}
sayHi();

//รับค่าเข้ามาทำงานในfunction parameter
function sayHi2(name: string) {
  console.log("Hello", name);
}
sayHi2("test");

//แบบ return
function getDiscount():number{
    return 500
}
console.log(getDiscount())
let message:number = getDiscount()
console.log(message)

//แบบรับค่า และ return
function checkNumber(num:number):string{
    if(num%2 ==0){
        return "even"
    }
    else{
        return "Odd"
    }

}
function total(a:number,b:number):number{
    return a+b
}
//arrow function
// const checkNumber = (num:number):string=>{
//     if(num%2 ==0){
//         return "even"
//     }
//     else{
//         return "Odd"
//     }
// }
console.log(total(50.00,100.00)) //150
console.log(checkNumber(10))

//default parameter

const showEmployee = (name:string,age:number,address:string="bangkok")=>{
    console.log(`ชื่อ  = ${name} , อายุ = ${age} , ที่อยู่ = ${address}`)
    
}
showEmployee("phoo",20)
showEmployee("sith",20)
showEmployee("zao",20,"phatum")

//object