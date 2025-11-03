"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "Phoosith",
    age: 20
};
//object ธรรมดา
const person2 = {
    name: "Job",
    age: 30
};
const position = {
    last: 10,
    long: 20
};
//funtion รับค่าobject
function showDetail(data) {
    console.log(`name : ${data.name} age : ${data.age}`);
}
showDetail(person2);
//function return object
const randomPosition = () => {
    return {
        last: Math.random(),
        long: Math.random()
    };
};
console.log(randomPosition());
// //check ว่าส่งparameter มาเกินที่กำหนดไว้
// function showDetailTwo(data:{name:string,age:number}){
//     console.log("name",data.name+"age",data.age)
// }
// showDetailTwo({name:"Phoosith",age:30,address:"bangkok"})
//# sourceMappingURL=app.js.map