"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello Application");
//การสร้างEnum
//ค่าเริ่มต้นคือ0
var GameMode;
(function (GameMode) {
    GameMode[GameMode["Easy"] = 0] = "Easy";
    GameMode[GameMode["Medium"] = 1] = "Medium";
    GameMode[GameMode["Hard"] = 2] = "Hard"; //2
})(GameMode || (GameMode = {}));
const select = GameMode.Easy;
console.log(select);
//# sourceMappingURL=app.js.map