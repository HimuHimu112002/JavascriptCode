class student{
    constructor(name, age, roll){
        this.name = name;
        this.age = age;
        this.roll = roll;
        this.school = "Dhaka School"; // akhane use korle sobar jonno common
        this.Collage = "Dhaka collage"; // akhane use korle sobar jonno common
        this.varsity = "Dhaka varsity"; // akhane use korle sobar jonno common
    }
}

class id extends student{
    constructor(name, age, roll, id){
        super(name, age, roll)
        this.id = id; // akhane use korle specific 
        
    }
}

let result = new student("himu", 20, 1);
let result1 = new id("HIMU", 2, 2, 100);
console.log(result, result1); 