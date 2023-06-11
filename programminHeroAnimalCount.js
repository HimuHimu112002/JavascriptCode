function animal(count) {

    let mile1st = 1;
    if (count <= 10) {

        mile1st  = count * 10;

        return mile1st

    }else if(count <= 20){

        let first10 = 10 * 10
        let restAnimal = count - 10
        let restAnimalResult = first10 + restAnimal * 20

        return restAnimalResult

    }else if(count <= 30){

        let first10 = 10 * 10
        let second = 10 * 20
        let rest3rdAnimal = count - 20
        let restAnimal3rdResult = first10 + second + rest3rdAnimal * 30

        return restAnimal3rdResult
        
    }else{
        return "The number is graterthen of 30 please input the number lessthen 30"
    }
    
}

let totalAnimal = animal(30)
console.log(totalAnimal)