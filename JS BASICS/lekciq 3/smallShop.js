function smallshop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let sum = 0;

    // coffee water beer sweets peanuts
    switch (city) {
        case "Sofia":
            switch (product) {
                case "coffee": sum = quantity * 0.5; break;
                case "water": sum = quantity * 0.8; break;
                case "beer": sum = quantity * 1.2; break;
                case "sweets": sum = quantity * 1.45; break;
                case "peanuts": sum = quantity * 1.6; break;
            }
            break;
        case "Plovdiv":
            switch (product) {
                case "coffee": sum = quantity * 0.4; break;
                case "water": sum = quantity * 0.7; break;
                case "beer": sum = quantity * 1.15; break;
                case "sweets": sum = quantity * 1.3; break;
                case "peanuts": sum = quantity * 1.5; break;
            } 
            break;
        case "Varna":
            switch (product) {
                case "coffee": sum = quantity * 0.45; break;
                case "water": sum = quantity * 0.7; break;
                case "beer": sum = quantity * 1.1; break;
                case "sweets": sum = quantity * 1.35; break;
                case "peanuts": sum = quantity * 1.55; break;
            } break;

    }console.log(sum);
}

    //     if (city === "Sofia") {
    //         if (product === "coffee") {
    //             sum = quantity * 0.5;
    //         } else if (product === "water") {
    //             sum = quantity * 0.8;
    //         } else if (product === "beer") {
    //             sum = quantity * 1.2;
    //         } else if (product === "sweets") {
    //             sum = quantity * 1.45;
    //         } else {
    //             sum = quantity * 1.6;
    //         }
    //     } else if (city === "Plovdiv") {
    //         if (product === "coffee") {
    //             sum = quantity * 0.4;
    //         } else if (product === "water") {
    //             sum = quantity * 0.7;
    //         } else if (product === "beer") {
    //             sum = quantity * 1.15;
    //         } else if (product === "sweets") {
    //             sum = quantity * 1.3;
    //         } else {
    //             sum = quantity * 1.5;
    //         }
    //     } else {
    //         if (product === "coffee") {
    //             sum = quantity * 0.45;
    //         } else if (product === "water") {
    //             sum = quantity * 0.7;
    //         } else if (product === "beer") {
    //             sum = quantity * 1.10;
    //         } else if (product === "sweets") {
    //             sum = quantity * 1.35;
    //         } else {
    //             sum = quantity * 1.55;
    //         }

    //     }
    //     console.log(sum);
    // }
    smallshop(["coffee", "Varna", "2"])