console.log("Hello Appication")

//แบบปกติ ไม่มีarray
const user1:string = "a"
const user2:string = "b"
const user3:string = "c"

//array

const users:string[]=[]

users.push("A")
users.push("B")

console.log(users)

const ages:number[] = [1,2,3,4,5]
console.log(ages)

//การเข้าถึงสมาชิก
const  member:string[] = ["A","B","C"]
console.log(member[0])

member[0] = "test"
console.log(member[0])

const len = member.length
console.log(len)

//การใช้loop
for(let i =0;i<member.length;i++){
    console.log("Number = ",member[i])
}

member.forEach((mem)=>{
    console.log(mem)
})

//array aliase
type Employee ={
    name:string,
    salary:number,
    department:string
}

const employees:Employee[] = []
employees.push({
    name:"A",
    salary:2000,
    department:"Test"
})
employees.push({
    name:"B",
    salary:2000,
    department:"Test"
})
employees.push({
    name:"C",
    salary:2000,
    department:"Test"
})
console.log(employees)
console.log(employees[1])

for(let person of employees){
    console.log(person.name)
}




























