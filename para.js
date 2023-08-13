// const a = [7,8,9]
// const b = [7,8,9]
//console.log(a == b)
//console.log(typeof(a))
//console.log(typeof(b))

// const x = "20"
// const z = 20
// console.log(x + z)
// console.log(typeof x)
// console.log(typeof z)

// var x=eval("12");
// var y=eval("12")
// var res=(x+y);
//console.log(res);

//let a = Math.sqrt(81)

function fuel(FuelCode) {
    if(FuelCode > 4){
        return "MUITO OBRIGADO \n outside the range of 1 to 4"
    }else if(FuelCode == 1){
        return "MUITO OBRIGADO \n Alcohol"
    }else if(FuelCode == 2){
        return "MUITO OBRIGADO \n Gasoline"
    }else if(FuelCode == 3){
        return "MUITO OBRIGADO \n Diesel"
    }else if(FuelCode == 4){
        return "MUITO OBRIGADO \n End"
    }
}
let FuelResult = fuel(1)
console.log(FuelResult)