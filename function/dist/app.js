"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello Function");
//void
function sayHi() {
    console.log("Hello TypeScript");
}
sayHi();
//รับค่าเข้ามาทำงานในfunction parameter
function sayHi2(name) {
    console.log("Hello", name);
}
sayHi2("test");
//แบบ return
function getDiscount() {
    return 500;
}
console.log(getDiscount());
let message = getDiscount();
console.log(message);
//แบบรับค่า และ return
function checkNumber(num) {
    if (num % 2 == 0) {
        return "even";
    }
    else {
        return "Odd";
    }
}
function total(a, b) {
    return a + b;
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
console.log(total(50.00, 100.00)); //150
console.log(checkNumber(10));
//default parameter
const showEmployee = (name, age, address = "bangkok") => {
    console.log(`ชื่อ  = ${name} , อายุ = ${age} , ที่อยู่ = ${address}`);
};
showEmployee("phoo", 20);
showEmployee("sith", 20);
showEmployee("zao", 20, "phatum");
//object
//# sourceMappingURL=app.js.map