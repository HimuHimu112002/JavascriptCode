function LargeNumber(...params) {

    let largestNumber = []
    
    for (let elements of params) {
            
        if (largestNumber.indexOf(elements) == -1) {
                largestNumber.push(elements)
                
        }
           
    }
    return largestNumber
    
}

let num = LargeNumber(3,4,6,2,9,10,20,30,30,15,15)
console.log(num)
   