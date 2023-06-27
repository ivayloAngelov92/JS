function shopping(input){
    let budget = Number(input[0]);
    let countGpu = Number(input[1]);
    let countCpu = Number(input[2]);
    let countRam = Number(input[3]);
    let gpu= 250;
    let gpuTotal = gpu * countGpu;
    let cpu = 0.35 * gpuTotal;
    let ram = 0.1*gpuTotal;
    let totalCosts = (gpuTotal)+(cpu*countCpu)+ (ram * countRam);
    if (countGpu>countCpu){
        totalCosts = 0.85 * totalCosts;
    }
    if (budget >= totalCosts){
        console.log(`You have ${(budget - totalCosts).toFixed(2)} leva left!`);
    }else {
        console.log(`Not enough money! You need ${(totalCosts - budget).toFixed(2)} leva more!`);
    }
}

shopping(["900",

"2",

"1",

"3"])

// Петър иска да купи N видеокарти, M процесора и P на брой рам памет. Ако броя на видеокартите е по-голям от този на процесорите получава 15% отстъпка от крайната сметка. Важат следните цени:

// · Видеокарта – 250 лв./бр.

// · Процесор – 35% от цената на закупените видеокарти/бр.

// · Рам памет – 10% от цената на закупените видеокарти/бр.

// Да се изчисли нужната сума за закупуване на материалите и да се пресметне дали бюджета ще му стигне.

// Вход

// Входът се състои от четири реда:

// 1. Бюджетът на Петър - реално число в интервала [0.0…100000.0]

// 2. Броят видеокарти - цяло число в интервала [0…100]

// 3. Броят процесори - цяло число в интервала [0…100]

// 4. Броят рам памет - цяло число в интервала [0…100]

// Изход

// На конзолата се отпечатва 1 ред, който трябва да изглежда по следния начин:

// · Ако бюджета е достатъчен:

// "You have {остатъчен бюджет} leva left!"

// · Ако сумата надхвърля бюджета:

// "Not enough money! You need {нужна сума} leva more!"

// Резултатът да се форматира до втория знак след десетичната запетая.