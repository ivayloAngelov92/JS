function solve(input) {
    let stage =input[0]
    let type = input[1]
    let tickets = Number(input[2])
    let picture = input[3]

    let totalPrice = 0
    switch (type) {
        case "Standard":
            if (stage == "Quarter final") {
                totalPrice += 55.5 * tickets
            } else if (stage == "Semi final") {
                totalPrice += 75.88 * tickets
            } else if(stage=="Final"){
                totalPrice += 110.1 * tickets
            }break;
        case "Premium":
            if (stage == "Quarter final") {
                totalPrice += 105.2 * tickets
            } else if (stage == "Semi final") {
                totalPrice += 125.22 * tickets
            } else if(stage=="Final"){
                totalPrice += 160.66 * tickets
            }break;
        case "VIP":
            if (stage== "Quarter final") {
                totalPrice += 118.9 * tickets
            } else if (stage == "Semi final") {
                totalPrice += 300.4 * tickets
            } else if(stage=="Final"){
                totalPrice += 400 * tickets
            }break;
    }
    if (totalPrice > 4000) {
        totalPrice = totalPrice * 0.75;
    } else if (totalPrice > 2500) {
        totalPrice = totalPrice * 0.9;
        if (picture === "Y") {
            totalPrice += 40 * tickets
        }
    } else {
        if (picture === "Y") {
            totalPrice += 40 * tickets
        }
    }
    console.log(totalPrice.toFixed(2));
}


solve(["Quarter final",

"Standard",

"11",

"N"])