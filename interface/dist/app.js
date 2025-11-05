"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello Application");
let person1;
person1 = {
    name: "Phoo",
    age: 20,
    gender: "Femail"
};
console.log(person1);
//readonly
let person2;
person2 = {
    name: "Phoo",
    age: 20,
    gender: "Female"
};
let person3;
person3 = {
    name: "Phoo",
    age: 25,
    gender: "Female",
    info() {
        console.log(`ข้อมูลล่าสุด = ${new Date().toLocaleString()}`);
    }
};
person3.info(); // ข้อมูลออก
let person4;
person4 = {
    name: "Phoo",
    age: 30,
    gender: "Female",
    info() {
        console.log(`ข้อมูลล่าสุด = ${new Date().toLocaleString()}`);
    },
    title: "Programmer",
    income: 50000,
    address: "Phatum"
};
console.log(person4);
//# sourceMappingURL=app.js.map