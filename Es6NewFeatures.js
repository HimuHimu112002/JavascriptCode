//=========================== 1 ================
global.setTimeout(()=>console.log("hello"), 100)
///window.setTimeout(()=>console.log("hello"), 100) // only browser run korbe karon node er majhe window bolte kisu nai

globalThis.setTimeout(()=>console.log("Aktarujjaman"), 100) // globalThis use korle browser and node dui jagai kaj korbe

//=========================== 2 ================
let max_number = Number.MAX_SAFE_INTEGER

max_number += 1 // 9007199254740992 js last max number akhanei limit ses
max_number += 1 // akhan tkeke r number barbena
max_number = BigInt(max_number) + 1n // jodi number incress korte hoi tahole BigInt use kore incress korte hobe last +1n mane holo 1int number so 1 er sathe n use kore BigInt convert kore neoya holo.
//console.log(max_number)

//=========================== 3 ================

const obj = {
    name: 'Js',
    creator: "Brendan Eich",
    library:{
        react:{
            company:'Facbook'
        }
    }
}

let company = obj?.library?.react?.company // avabe check kora right way noi karon jodi react er vitore company namer kisu na thake tahole error dibe
//console.log(company)

//=========================== 4 ================

let testCode = "";
console.log(testCode ?? "Himu testCode") // right site output asbe only null and undefind thakle
console.log(testCode || "Himu testCode") // false  value thaklei or oparetors right site value show korabe

//=========================== 5 ================
var name = {firstName:"himu 1"}
var name = {lastName:"himu 2"}
console.log((name.firstName || name.lastName) ?? "Hello") // first bracat use na korle error dibe.