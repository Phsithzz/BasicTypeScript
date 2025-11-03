const person = {
    name:"Phoosith",
    age:20
}
//object ธรรมดา
const person2 :{
    name:string,
    age:number
} = {
    name:"Job",
    age:30
}
const position :{
    last:number,
    long:number
} = {
    last:10,
    long:20
}

//funtion รับค่าobject
function showDetail(data:{name:string,age:number}):void{
    console.log(`name : ${data.name} age : ${data.age}`)
}

showDetail(person2)

//function return object
const randomPosition = ():{last:number,long:number}=>{
    return{
        last:Math.random(),
        long:Math.random()
    }
}

console.log(randomPosition())

// //check ว่าส่งparameter มาเกินที่กำหนดไว้
// function showDetailTwo(data:{name:string,age:number}){
//     console.log("name",data.name+"age",data.age)
// }
// showDetailTwo({name:"Phoosith",age:30,address:"bangkok"})