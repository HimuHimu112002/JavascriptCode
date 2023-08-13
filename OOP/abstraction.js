//Abstraction ===================================
class firstClass {
    add() {
        console.log("First Method")
    }
}
class secondClass extends firstClass {
    add() {
        console.log(30 + 40);
    }
}
class thirdClass extends secondClass {
    add() {
        console.log("Last Method")
    }
}
let ob11 = new firstClass();
let ob22 = new secondClass();
let ob33 = new thirdClass();
ob11.add();
ob22.add();
ob33.add();