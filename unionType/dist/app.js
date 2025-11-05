"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello Application");
//union type ธรรมดา
let age;
age = 50;
age = "50";
console.log(age);
let coordinates;
coordinates = {
    x: 5,
    y: 10,
    lat: 10
};
console.log(coordinates);
//union type function
function sayHi(person) {
    console.log(`Hello ${person}`);
}
sayHi("Phoo");
sayHi(["A", "B"]);
let user = "User";
// let user:Role = "Editor" ไม่สามารถเปลี่ยนได้
//# sourceMappingURL=app.js.map