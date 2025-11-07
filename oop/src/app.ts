console.log("Hello Application\n")

//oop

//contructor = จะถูกใช้เมื่อสร้างวัตถุและทำงานอัตโนมัติ เพียงครั้งเดียวตอนเริ่มต้น
    
//class
abstract class Employee{
    // protected companyName:string = "ABD CO"
  
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
    abstract info():void //คลาสแม่บังคับให้ลูกสร้างการทำงานในคลาสลูก
}

//inheritance คือ การรับคุณสมบัติพื้นฐานของแม่
class IT extends Employee{

    //super คือการเอาคุณสมบัติของแม่มาใช้ในลูก
    constructor(name:string,salary:number){
        super(name,"IT",salary) //ส่งเข้าไปในคลาสแม่
        // console.log("At = ",this.companyName) //protected ส่งจากแม่มาหาลูก
    }

    info():void{
        console.log("Role Manage System")
    }
}

class Accounting extends Employee{
     constructor(name:string,salary:number){
        super(name,"Back",salary)
    }

      info():void{
        console.log("Role Manage Finance")
    }
}

class Company {
    public static cName:string = "ABC CO" //static คือสามารถอ้างอิงโดยเข้าถึงผ่านชื่อคลาสได้เลย ไม่ต้องสร้างobject
    public founder:string = "Phoosith"
    public static employeeList:Employee[] = []

    //static method ถ้าจะเรียกตัวแปรที่เป็นstatic method ก็ต้องเป็นstatic ด้วย
    static showData(){
        console.log("Employee Data",this.cName)
        for(const person of this.employeeList){
            person.showDetail()
        }
    }
}

//object
// const emp3 = new Employee //เขียนแบบนี้ก็ได้
// const emp1 = new Employee("A","Front",50000)
// // emp1.name = "Test"
// // emp1.name = "Test" //สามารถเเปลี่ยนข้อมูลได้
// // emp1.salary = 70000 //กรณีมีreadonly,private จะไม่สามารถเปลี่ยนได้
// // console.log(emp1.name)
// emp1.showDetail()

// //method
// const emp2 = new Employee("B","Back",50000)
// emp2.showDetail()

//getter setter ไว้ใช้ตอนกำหนดตัวแปรเป็นprivate แล้วเปลี่ยนค่าข้างนอกไม่ได้
//เรียกใช้แบบแรก
// emp1.setSalary(100000)
// emp1.showDetail()
// console.log(emp1.getSalary())
//แบบที่2
// emp1.Salary = 100000
// console.log(emp1.Salary)

//inheritance

const emp4 = new IT("C",50000) 
console.log(emp4)


const company = new Company()
console.log(company.founder)
//object static
console.log(Company.cName)
//employee List
const emp5 = new IT("A",50000)
const emp6 = new IT("B",50000)
const emp7 = new Accounting("C",50000)

Company.employeeList.push(emp5)
Company.employeeList.push(emp6)
Company.employeeList.push(emp7)

Company.showData()

//abstract class  คลาสที่เป็นต้นแบบ (แม่แบบ) ที่ไม่สามารถสร้างวัตถุ (object) ได้โดยตรง แต่ต้องให้คลาสอื่นสืบทอด (inherit) ไปใช้งาน
const emp8 = new IT("A",50000)
const emp9 = new Accounting("B",50000)
emp8.info()
emp9.info()