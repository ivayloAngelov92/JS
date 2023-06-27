function godizillaVsKong(input) {
    //     · Декорът за филма е на стойност 10% от бюджета.

    // · При повече от 150 статиста, има отстъпка за облеклото на стойност 10%.
    let budget = Number(input[0]);
    let statistics = Number(input[1]);
    let costPerStatistics = Number(input[2]);
    if (statistics >= 150) {
        costPerStatistics = costPerStatistics * 0.9;
    }
    let totaCostStatistics = costPerStatistics * statistics;
    let decor = budget * 0.1;
    let movieCost = totaCostStatistics + decor;

    if (movieCost > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(movieCost - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - movieCost).toFixed(2)} leva left.`);
    }
}

godizillaVsKong(["9587.88",

    "222",

    "55.68"])

// На конзолата трябва да се отпечатат два реда:

// · Ако парите за декора и дрехите са повече от бюджета:

// o "Not enough money!"

// o "Wingard needs {парите недостигащи за филма} leva more."

// · Ако парите за декора и дрехите са по малко или равни на бюджета:

// o "Action!"

// o "Wingard starts filming with {останалите пари} leva left."

//  Резултатът трябва да е форматиран до втория знак след десетичната запетая.