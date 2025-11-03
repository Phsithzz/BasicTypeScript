"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let fname = "Phoosith";
fname = "Pheanchob";
let age = 20;
let isWorking = true;
console.log(fname, age, isWorking);
//any & unknow
//any จะไม่มีการตรวจสอบข้อมูล
let name = "Phoo";
name = 10;
name = true;
console.log(name);
//การใช้unknow จะมีการตรวจสอบชนืดข้อมูล
function formatNumber(num) {
    return num.toFixed(2);
}
let money = "50.12345";
money = 50.12345;
if (typeof money === "number") {
    console.log(formatNumber(money));
}
//if
let grade = 50;
let result = "";
if (grade > 50) {
    result = "Great";
}
else {
    result = "Noob";
}
console.log(result);
//loop
for (let count = 1; count <= 10; count++) {
    console.log(count);
}
//array
let users = ["A", "B", "C"];
// for(let i:number = 0;i<users.length;i++){
//     console.log(users[i])
// }
users.forEach((user) => {
    console.log(user);
});
//# sourceMappingURL=app.js.map