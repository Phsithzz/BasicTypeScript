console.log("Hello Application\n")

//oop

//contructor = จะถูกใช้เมื่อสร้างวัตถุและทำงานอัตโนมัติ เพียงครั้งเดียวตอนเริ่มต้น
    
//class
class Employee{

    //property คุณสมบัติ 
    // private คือเปลี่ยนค่าได้แค่ในคลาสEmployee
    private name:string
    private department:string
    private salary:number
    //contructor
    constructor(name:string,department:string,salary:number){

        console.log("Hello Constructor")
        this.name = name //ด้านขวาคือตัวที่อยู่ในพารามิเตอร์ ด้านซ้ายคือ property
        this.department = department
        this.salary = salary

        console.log(name)
        console.log(department)
        console.log(salary)
      
    }

    //การสร้างmethod ก็คือการสร้างพฤติกรรมของclass
    public showDetail (){
        console.log(`name:${this.name},department:${this.department} salary:${this.salary} \n`)
    }

    //setter = method สำหรับการเปลี่ยนแปลง and getter = method ดึง้ข้อมูลตัวที่สนใจ
    // public setSalary(newSalary:number){
    //     this.salary = newSalary
    // }

    // public getSalary():number{
    //     return this.salary
    // }
    //เขียนแบบนี้ก็ได้
    set Salary(newSalary:number){
        this.salary = newSalary
    }

    get Salary():number{
        return this.salary
    }
}
//inheritance คือ การรับคุณสมบัติพื้นฐานของแม่
class IT extends Employee{
    //super คือการเอาคุณสมบัติของแม่มาใช้ในลูก

    
}
class Accounting extends Employee{

}

//object
// const emp3 = new Employee //เขียนแบบนี้ก็ได้
const emp1 = new Employee("A","Front",50000)
// emp1.name = "Test"
// emp1.name = "Test" //สามารถเเปลี่ยนข้อมูลได้
// emp1.salary = 70000 //กรณีมีreadonly,private จะไม่สามารถเปลี่ยนได้
// console.log(emp1.name)
emp1.showDetail()

//method
const emp2 = new Employee("B","Back",50000)
emp2.showDetail()

//getter setter ไว้ใช้ตอนกำหนดตัวแปรเป็นprivate แล้วเปลี่ยนค่าข้างนอกไม่ได้
//เรียกใช้แบบแรก
// emp1.setSalary(100000)
// emp1.showDetail()
// console.log(emp1.getSalary())
//แบบที่2
emp1.Salary = 100000
console.log(emp1.Salary)

//inheritance

const emp4 = new IT("C","IT",50000) 
console.log(emp4)