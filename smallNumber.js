
function LargeNumber(...params) {

    let largestNumber = params[0]
    for (let index = 0; index < params.length; index++) {
        
        let FirstStore = params[index]
        if (FirstStore < largestNumber) {
            largestNumber = FirstStore
        }
    }
    return largestNumber
}


let number = LargeNumber(100,1000,20,30,40,50,1,60)
console.log(number)