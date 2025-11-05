"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello Appication");
let emp1 = {
    id: 1,
    name: "Phoo",
    salary: 50000,
    phone: "1234"
};
console.log(emp1);
//แบบoptional properties
let emp2 = {
    id: 2,
    name: "test",
    salary: 50000,
};
console.log(emp2);
//แบบ readOnly Modifer คือไม่สามารถแก้ไขได้
let emp3 = {
    id: 3,
    name: "test2",
    salary: 20000,
    phone: "1234"
};
emp3.name = "ChangeName";
// emp3.salary = 10000 แก้ไม่ได้ pim 20000 ก็ไม่ได้
console.log(emp3);
//# sourceMappingURL=app.js.map