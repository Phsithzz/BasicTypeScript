"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello Appication");
//ต้งกำหนด ว่ามีจำนวนละกำหนดประเภทของข้อมูล
const point = [10, "test"]; //ฝั่งขวาคือค่าเริ่มต้น
console.log(point);
console.log(point[1]);
//tuple label
const goodStatus = [200, "OK"];
const notFound = [404, "Not Found"];
const badRequest = [400, "Bad Request"];
const serverError = [500, "Server Error"];
//สร้างtype แบบ tuple
// type HttpStatusCode=[number,string]
// const goodStatus:HttpStatusCode = [200,"OK"]
//# sourceMappingURL=app.js.map