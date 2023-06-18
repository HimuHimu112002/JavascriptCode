const objectDestructure = {x:10, y:20, z:30};
const {x, y} = objectDestructure;
//console.log(x,y) 

for (const ff in objectDestructure) {
    // object er majhe kokhono for of loop use kora jabena
   //console.log(ff)
   console.log(objectDestructure[ff])
   // akhane jodi ff print kori tahole object er property guli access kora jabe and value 
   // lagle objectname[ff] use korle object er value guli asbe
}

//console.log(objectDestructure?.s?.m)
// atar meaning holo jodi object er majhe jemon s and m property nai so seguli jodi access
// korte chai tahole error dibe and ay error jodi na chai tahole question mark dite hobe

const {a, b} = {a:1, b:2, c:3};
//console.log(b)