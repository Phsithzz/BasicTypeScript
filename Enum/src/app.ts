console.log("Hello Application")

//การสร้างEnum
//ค่าเริ่มต้นคือ0
enum GameMode{
    Easy, //0
    Medium, //1
    Hard //2
}

const select:GameMode = GameMode.Easy
console.log(select)