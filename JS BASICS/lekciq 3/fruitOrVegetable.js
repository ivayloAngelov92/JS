function fruitOrVegetable(input) {
    let product = input[0];
    switch (product){
        // banana, apple, kiwi, cherry, lemon и grapes
        // tomato, cucumber, pepper и car
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "lemon":
        case "grapes": console.log("fruit"); break;
        case "tomato":
            case "cucumber":
                case "pepper" :
                    case "carrot": console.log("vegetable");break;
        default : console.log("unknown"); break;
    }
}
    fruitOrVegetable(["banana"])