function solve(input){
    let startInterval="" + input[0];
    let endInterval="" + input[1];

    let a=Number(startInterval[0])
    let b=Number(endInterval[0])
    let c=Number(startInterval[1])
    let d=Number(endInterval[1])
    let e= Number(startInterval[2])
    let f=Number(endInterval[2])
    let g=Number(startInterval[3])
    let h=Number(endInterval[3])  
    let buff=""
    for(let i=a; i<=b; i++){
        for(let j=c; j<=d; j++){
            for(let k=e; k<=f; k++){
                for(let l=g; l<=h; l++){
                    if(i%2!==0 && j%2!==0 && k%2!==0 && l%2!==0){
                        buff+=`${i}${j}${k}${l} `
                    }
                }
            }
        }
    }
    console.log(buff); 
}
// Техниката в магазин за коледни украси се разваля. Артикулите, които съдържат четни числа в своя баркод не могат да бъдат маркирани от касиерите. Вашата задача е,
//  да напишете програма, която генерира всички баркодове, които НЕ съдържат четни цифри в себе си.

// Вход:

// · Две четирицифрени числа, които показват обхвата на баркодовете, които трябва да промените.

// · Първи ред – четирицифрено число – началото на обхвата. Цяло число в интервала [1000…9999]

// · Втори ред – четирицифрено число – края на обхвата. Цяло число в интервала [1000…9999]

// Изход:

// На конзолата трябва да се отпечатат всички "баркодове", които НЕ съдържат четна цифра в себе си, разделени с интервал.
solve (["2345",

"6789"])