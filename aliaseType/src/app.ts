console.log("Hello Appication")

type Employee = {
    id:number,
    name:string,
    readonly salary:number, //แบบ readOnly Modifer คือไม่สามารถแก้ไขได้
    phone?:string //แบบoptional properties สามารถเป็นค่าว่างได้
}

let emp1:Employee = {
    id:1,
    name:"Phoo",
    salary:50000,
    phone:"1234"
}
console.log(emp1)

//แบบoptional properties
let emp2:Employee ={
    id:2,
    name:"test",
    salary:50000,

}
console.log(emp2)

//แบบ readOnly Modifer คือไม่สามารถแก้ไขได้
let emp3 :Employee = {
    id:3,
    name:"test2",
    salary:20000,
    phone:"1234"
}
emp3.name = "ChangeName"
// emp3.salary = 10000 แก้ไม่ได้ pim 20000 ก็ไม่ได้
console.log(emp3)