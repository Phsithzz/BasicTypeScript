let fname:string = "Phoosith"
fname="Pheanchob"

let age:number =20

let isWorking:boolean = true

console.log(fname,age,isWorking)

//any & unknow
//any จะไม่มีการตรวจสอบข้อมูล
let name:any = "Phoo"
name=10
name=true

console.log(name)

//การใช้unknow จะมีการตรวจสอบชนืดข้อมูล
function formatNumber(num:any){
    return num.toFixed(2)

}
let money:unknown = "50.12345"
money=50.12345
if(typeof money === "number"){
    console.log(formatNumber(money))
}

//if
let grade:number = 50
let result:string=""
if(grade >50){
    result = "Great"
}
else{
    result ="Noob"
}
console.log(result)

//loop
for(let count:number = 1;count <=10;count++){
    console.log(count)
}

//array
let users:string[] = ["A","B","C"]

// for(let i:number = 0;i<users.length;i++){
//     console.log(users[i])
// }

users.forEach((user)=>{
    console.log(user)
})