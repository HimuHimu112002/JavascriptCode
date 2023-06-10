function LargeNumber(...params) {

    //let largestNumber = 0
    // largestNumber number akhane value hisabe dileo kaj korbe and array dileo kaj korbe and avbae value declare na korleo hobe
    for (let index = 0; index < params.length; index++) {
        
        let FirstStore = params[index]
        if (FirstStore % 2 != 0) {
            //largestNumber = FirstStore

            //return largestNumber = FirstStore // return korle first jei number ti pabe seti return kore dibe next guli r return korbena
            console.log(FirstStore)
            
        }
        //else{
        //     return -1 //return korle first jei number ti pabe match korbena seti return kore dibe next guli r return korbena
        // }
    }
}

LargeNumber(3,4,6,2,9,10,20,30,15)



// =================================== right way ===========================
function LargeNumber(...params) {

    let largestNumber = []

    for (let index = 0; index < params.length; index++) {
        
        if (params[index] % 2 == 0) {
            largestNumber.push(params[index])
            
        }
       
    }
    return largestNumber
}

let num = LargeNumber(3,4,6,2,9,10,20,30,15)
console.log(num)


