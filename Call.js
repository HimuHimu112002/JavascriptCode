const myCall = {
    fullName: function(){
        return this.firstname
    }
}

const person = {
    firstname: "Aktarujjaman"
}

let result = myCall.fullName.call(person)
console.log(result)
// call kora mane return this.firstname likha hoiyese but akhane kono firstnmae declare kora hoini
// but pore object likhe jar majhe firstname declare koresi then firstname myCall object theke 
// function call kore then call er majhe object ti pass korlam so person object theke firstname amader
// myCall er majhe jabe and this.firstname er majhe store hobe 


// NOTE - > person er firstname and myCall er firstname same thakte hobe