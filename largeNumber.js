
function LargeNumber(...params) {

    let largestNumber = 0
    for (let index = 0; index < params.length; index++) {
        
        let FirstStore = params[index]
        if (FirstStore > largestNumber) {
            largestNumber = FirstStore
        }
    }
    return largestNumber
}


let number = LargeNumber(100,10,20,30,40,50,60)
console.log(number)