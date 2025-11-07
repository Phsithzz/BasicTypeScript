console.log("Hello Application")

//กรณีที่ไม่ได้ใช้generic ก็ต้องมาสร้างหลายfunction
function getElementNumber(arr:number[],count:number){
    return arr.slice(arr.length-count)
}
function getElementString(arr:string[],count:number){
    return arr.slice(arr.length-count)
}

//generic function
function getElement<T>(arr:T[],count:number){
    return arr.slice(arr.length-count)
}

//generic default Type คือการกำหนดค่าเริ่มต้นของgeneric
class Stack<T=string>{
    private items:T[]=[]
    pushElement(element:T){
        this.items.push(element)
    }
}

const stack = new Stack()
stack.pushElement("A")
stack.pushElement("jojo")
console.log(stack)

console.log(getElementNumber([10,20,30,40,50],2)) //ตั้งแต่index ที่ 2 ถึงตัวสุดท้าย
console.log(getElementString(["10","20","30","40","50Test"],2)) //ตั้งแต่index ที่ 2 ถึงตัวสุดท้าย
console.log("\n")
console.log("Generic Function")
//generic function
const myNum:number[] = [10,20,30,40,50]
const myString:string[] = ["A","B","C","D"]
const myBool:boolean[] = [true,false,true,true]

console.log(getElement<number>(myNum,2))
console.log(getElement<string>(myString,2))
console.log(getElement<boolean>(myBool,2))

