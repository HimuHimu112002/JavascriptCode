class Person {
    constructor(name,age,occupation){
        this.name = name;
        this.age = age;
        this.occupation = occupation
       
    }
    getName() {
        return (`{name: ${this.name}, age: ${this.age}, occupation:${this.occupation}}`)
    }

}
const person1 = new Person("John", 30, "Engineer");
//console.log(person1.getName());


class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
   
}
  
const rectangle = new Rectangle(4,5);
const area = rectangle.calculateArea();
//console.log(`Rectangle Area: ${area}`);


//  constructor =============================
class Person {
    constructor() {
        console.log('I am a constructor')
    }
}
const person3 = new Person();
console.log(person3)


// static =========================
class Person {

    static first_name='Jhon'
    static last_name='Dee'

    static getName() {
        return (`The name of the person is ${this.first_name} ${this.last_name}`)
    }

}

console.log(Person.getName());