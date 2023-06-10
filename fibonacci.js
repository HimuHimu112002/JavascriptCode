    let fibo = [0,1]
    // fibonacci suru hoi 2 theke so 0 and 1 default

    for (let index = 2; index <= 10; index++) {

        fibo[index] = fibo[index - 1] + fibo[index - 2]
        // 1st = 2-1 + 2-2
            //first step mane 2 er theke 1 step age then 2 er theke 2 strep age resutl 1 =
            // [0,1,1,2,3,5,8,13,21]
            // akhane main bisoi holo loop ghurbe r main fibo arrayr majhe jabe and loop er 
            // sonkha onujai fibo array step jabe then step duta count hobe result asebe
            // EX: jokhon loop 4 tokhon 4-1 mane 3 then 4-2 mane dui step samne mane 2 total 5
            // EX: jokhon loop 5 tokhon 5-1 mane 5 then 5-2 mane dui step samne mane 3 total 8
            // EX: jokhon loop 6 tokhon 6-1 mane 8 then 6-2 mane dui step samne mane 5 total 13
            // EX: jokhon loop 7 tokhon 7-1 mane 13 then 6-2 mane dui step samne mane 8 total 21
    }
     
console.log(fibo)