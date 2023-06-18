const myArray = [1,2,3,4,5,6,78,9]


//let a = (myArray) -> valid
//let a = (...myArray) akhane spreed kora jabena

// for(let first of myArray) {

//     console.log(first)
// }


myArray.map((item)=>{
    let Double = item * item
    //console. log(Double)

})

// Avabe array map return korte hoi
let ff = myArray.map((item)=>{
    return item * item
})

//console.log(ff)

let newMap = myArray.map(a => a * a)
console.log(newMap)