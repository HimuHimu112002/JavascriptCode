//============== 1 =================
function solve(arr, rotations){
    if(rotations == 0)
    return arr;

    for(let i = 0; i < rotations; i++){
      let element = arr.pop();
      // first 10 remove hobe elements er value hobe 10
      arr.unshift(element);
      // akhane ase arr er man 44 then arr er majhe unshift kore element er value 10
      // arr er first push hobe tahole final arr hobe [10,44]
    }
    return arr;
}

let aa = solve([44, 10], 2); 
console.log(aa)

//================= 2 ==================
var a = 1;  
var b = 0;  
while (a <= 3)  
{  
   a++;  
   b = b + a * 2;  
   // guner kaj age hobe akhane main kaj holo a = 1 then a++ akhane 1 thakbe then porer line
   // jokhoni abar a pabe sathei 1 barebe
   console.log(b);
}