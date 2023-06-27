function solve(input) {
    let fruit = input[0]
    let day = input[1]
    let quantity = Number(input[2])
    let sum =0

    // :плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes), ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday)
    //     плод banana apple orange grapefruit kiwi pineapple grapes

    // цена 2.50 1.20 0.85 1.45 2.70 5.50 3.85

    // Събота и неделя магазинът работи на по-високи цени:

    // плод banana apple orange grapefruit kiwi pineapple grapes

    // цена 2.70 1.25 0.90 1.60 3.00 5.60 4.20
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":  
            switch (fruit) {
                case "banana": sum = quantity * 2.5; break
                case "apple": sum = quantity * 1.2; break
                case "orange": sum = quantity * 0.85; break
                case "grapefruit": sum = quantity * 1.45; break
                case "kiwi": sum = quantity * 2.7; break
                case "pineapple": sum = quantity * 5.5; break
                case "grapes": sum = quantity * 3.85; break
                default: console.log("error"); break
            }break;
          
        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana": sum = quantity * 2.7; break
                case "apple": sum = quantity * 1.25; break
                case "orange": sum = quantity * 0.9; break
                case "grapefruit": sum = quantity * 1.6; break
                case "kiwi": sum = quantity * 3; break
                case "pineapple": sum = quantity * 5.6; break
                case "grapes": sum = quantity * 4.2; break
                default: console.log("error"); break
            }break; 
            default: console.log("error"); break
    } if (sum!==0){
        console.log(sum.toFixed(2));
    }
}

solve(["appleee",

    "Saturday",

    "2"])