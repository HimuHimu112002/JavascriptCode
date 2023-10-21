// function add(x) {
//     return 10 + x
//     //console.log(x.reduce((arr, cur) => arr + cur))
// }

// // memo is higher order function akti function recevid korese and return korese
// function memo(func) {
//     let cache = {}
//     return function(x){
//         if(cache[x]){
//             console.log("Resul from cache")
//             return cache[x]
//         }else{
//             console.log("Result from calculating")
//             const result = func(x)
//             cache[x] = result
//             return result
            
//         }
//     }
// }

// let claculate = memo(add)
// console.log(claculate(30))
// console.log(claculate(30))
// // akoi value diye jodi bar bar akoi result show korate hoi tahole memoization kore use kora best karon jodi all time akoi result show koranor joon bar bar same function call kori tahole memory cache bere jai


function add(...x) {
    return x.reduce((arr, cur) => arr + cur)
    //console.log(x.reduce((arr, cur) => arr + cur))
}

function memo(func) {
    let cache = {}
    return function(...x){
        let key = JSON.stringify(x)
        if(cache[key]){
            console.log("Resul from cache")
            return cache[key]
        }else{
            console.log("Result from calculating")
            const result = func(...x)
            cache[key] = result
            return result
            
        }
    }
}

let claculate = memo(add)
console.log(claculate(30,30,30))
console.log(claculate(30,30,31))
