"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello Appication   ");
function total(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    if (typeof a == "string" && typeof b == "string") {
        return parseInt(a) + parseInt(b);
    }
    throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
}
console.log(total(10, 20));
console.log(total("10", "20"));
//วิธีรวมarray spread Operator
const section = ["audit", "finance"];
const department = ["programmer", "marketing", "graphic"];
department.push(...section);
console.log(department);
//rest parameter
const totalTest = (...numbers) => {
    return numbers.reduce((result, value) => {
        return result + value;
    }, 0);
};
console.log(totalTest(100, 200));
console.log(totalTest(100, 200, 300));
console.log(totalTest(100, 200, 300, 400));
console.log(totalTest(100, 200, 300, 400, 500));
//destructuring การสลายโครงสร้าง
//array
const colors = ["red", "green", "blue"];
const [red, green, blue] = colors;
console.log(red);
//object
const person = {
    fname: "Phoo",
    age: 4,
    address: "Phatum"
};
const { fname, age, address } = person;
console.log(fname);
//# sourceMappingURL=app.js.map