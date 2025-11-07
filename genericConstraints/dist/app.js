"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello Application");
//กรณีที่ไม่ได้ใช้generic ก็ต้องมาสร้างหลายfunction
function getElementNumber(arr, count) {
    return arr.slice(arr.length - count);
}
function getElementString(arr, count) {
    return arr.slice(arr.length - count);
}
//generic function
function getElement(arr, count) {
    return arr.slice(arr.length - count);
}
//generic default Type คือการกำหนดค่าเริ่มต้นของgeneric
class Stack {
    items = [];
    pushElement(element) {
        this.items.push(element);
    }
}
const stack = new Stack();
stack.pushElement("A");
stack.pushElement("jojo");
console.log(stack);
console.log(getElementNumber([10, 20, 30, 40, 50], 2)); //ตั้งแต่index ที่ 2 ถึงตัวสุดท้าย
console.log(getElementString(["10", "20", "30", "40", "50Test"], 2)); //ตั้งแต่index ที่ 2 ถึงตัวสุดท้าย
console.log("\n");
console.log("Generic Function");
//generic function
const myNum = [10, 20, 30, 40, 50];
const myString = ["A", "B", "C", "D"];
const myBool = [true, false, true, true];
console.log(getElement(myNum, 2));
console.log(getElement(myString, 2));
console.log(getElement(myBool, 2));
//# sourceMappingURL=app.js.map