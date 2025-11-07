"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello Application");
function truncate(value, length) {
    if (typeof value === "number") {
        return value.toString().slice(0, length);
    }
    else {
        return value.slice(0, length);
    }
}
console.log(truncate("Phoo", 2)); //เอาเฉพาะ2ตัวอักษรตัวแรก
console.log(truncate(12345, 2)); //เอาเฉพาะ2ตัวอักษรตัวแรก
//# sourceMappingURL=app.js.map