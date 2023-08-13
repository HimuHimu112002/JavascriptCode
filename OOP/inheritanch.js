// inheritance ---- -----------------------1
class Father {

     first_name='Jhon'
     last_name='Dee'
    
     getName() {
        return (`The name of the person is ${this.first_name} ${this.last_name}`)
    }

}

class Son extends Father{

}
const SonObj1 = new Son();
console.log(SonObj1.getName());



// inheritance ---- -----------------------------------2
class Father {
     first_name='Jhon'
     last_name='Dee'
     getName() {
        return (`The name of the person is ${this.first_name} ${this.last_name}`)
    }

}
class Son extends Father{
    first_name='Jhon Junior'
    // method overriding
}
const SonObj2 = new Son();
console.log(SonObj2.getName());
