console.log("Hello Application")

function truncate(value:string | number,length:number){

    if(typeof value === "number"){
        return value.toString().slice(0,length)
    }
    else{
        return value.slice(0,length)
    }
}

console.log(truncate("Phoo",2) )//เอาเฉพาะ2ตัวอักษรตัวแรก
console.log(truncate(12345,2) )//เอาเฉพาะ2ตัวอักษรตัวแรก