console.log("Hello Appication")

//ต้งกำหนด ว่ามีจำนวนละกำหนดประเภทของข้อมูล

const point:[number,string] = [10,"test"] //ฝั่งขวาคือค่าเริ่มต้น

console.log(point)
console.log(point[1])

//tuple label
const goodStatus:[code:number,status:string]=[200,"OK"]
const notFound:[code:number,status:string]=[404,"Not Found"]
const badRequest:[code:number,status:string]=[400,"Bad Request"]
const serverError:[code:number,status:string]=[500,"Server Error"]

//สร้างtype แบบ tuple
// type HttpStatusCode=[number,string]
// const goodStatus:HttpStatusCode = [200,"OK"]