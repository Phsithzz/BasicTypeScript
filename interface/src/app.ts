console.log("Hello Application")

interface Person{
    name:string,
    readonly age:number,
    gender?:string // มีหรือไม่มีก็ได้
}

let person1:Person
person1={
    name:"Phoo",
    age:20,
    gender:"Femail"
}
console.log(person1)

//readonly
let person2:Person
person2={
    name:"Phoo",
    age:20,
    gender:"Female"
}
//ไม่สามารถแก้ไขอายุได้
// person2.age = 10 


//interface method
interface Test{
    name:string,
    age?:number,
    readonly gender:string,
    info:()=>void
}

let person3:Test
person3 = {
    name:"Phoo",
    age:25,
    gender:"Female",
    info(){
        console.log(`ข้อมูลล่าสุด = ${new Date().toLocaleString()}`)
    }
    
}

person3.info() // ข้อมูลออก

//Extended interface การสืบทอด
interface Job{
    title:string,
    income:number
}
interface Contact{
    address:string,
    phone?:string
}

interface Info extends Job,Contact{
    name:string,
    age?:number,
    gender:"Female",
    info:()=>void
}

let person4:Info
person4 = {
    name:"Phoo",
    age:30,
    gender:"Female",
    info(){
        console.log(`ข้อมูลล่าสุด = ${new Date().toLocaleString()}`)
    },
    title:"Programmer",
    income:50000,
    address:"Phatum"
    
}
console.log(person4)


