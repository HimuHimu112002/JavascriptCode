let firstOb = {
    name: "Himu",
    age: 21,
    test:{
        name: "Himu Test",
        age: 210,
        anotherOb:{
            name: "Aktarujjaman",
            age: 20,
                value: function(){
                    console.log(`My name is ` + this.name + ` My age is ` + this.age)
                }  
        }
    },
}
firstOb.test.anotherOb.value();

let result = firstOb.test.anotherOb.value.bind(firstOb.test);
//let result = firstOb.anotherOb.value.bind(firstOb);
// jodi firstOb er vlaue access korte chai tahole bind just firstOb jodi firstOb er vhitore
// kono property er value bind korte chai tahole firstOb.property name
result();
// bind use korle age akti variable er majhe store korte hobe
// then function er moto call kore use korte hobe
