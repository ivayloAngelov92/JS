function solve(input) {
    let flower = input[0]
    let count = Number(input[1])
    let budget = Number(input[2])
    let totalPrice = 0
    let moneyLeft=0
    switch (flower) {
        case "Roses":
            totalPrice = count * 5
            if (count > 80) {
                totalPrice = totalPrice * 0.9;
            }
                moneyLeft = budget-totalPrice;
            if (moneyLeft >= 0) {
                console.log(`Hey, you have a great garden with ${count} ${flower} and ${(budget-totalPrice).toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${(totalPrice-budget).toFixed(2)} leva more.`);
            }break
    
        case "Dahlias" :
            totalPrice = count * 3.8
            if (count > 90) {
                totalPrice = totalPrice * 0.85;
            }
                moneyLeft = budget-totalPrice;
            if (moneyLeft >= 0) {
                console.log(`Hey, you have a great garden with ${count} ${flower} and ${(budget-totalPrice).toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${(totalPrice-budget).toFixed(2)} leva more.`);
            }break
        case "Tulips" :
            totalPrice = count * 2.8
            if (count > 80) {
                totalPrice = totalPrice * 0.9;
            }
                moneyLeft = budget-totalPrice;
            if (moneyLeft >= 0) {
                console.log(`Hey, you have a great garden with ${count} ${flower} and ${(budget-totalPrice).toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${(totalPrice-budget).toFixed(2)} leva more.`);
            }break
        case "Narcissus" :
            totalPrice = count * 3
            if (count<120) {
                totalPrice = totalPrice * 1.15;
            }
                moneyLeft = budget-totalPrice;
            if (moneyLeft >= 0) {
                console.log(`Hey, you have a great garden with ${count} ${flower} and ${(budget-totalPrice).toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${(totalPrice-budget).toFixed(2)} leva more.`);
            }break    
        case "Gladiolus" :
            totalPrice = count * 2.5
            if (count<80) {
                totalPrice = totalPrice * 1.20;
            }
                moneyLeft = budget-totalPrice;
            if (moneyLeft >= 0) {
                console.log(`Hey, you have a great garden with ${count} ${flower} and ${(budget-totalPrice).toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${(totalPrice-budget).toFixed(2)} leva more.`);
            }break

}
}
//     цвете	"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
// Цена на 	      5      	3.80	  2.80	      3 	       2.50



solve(["Tulips",
    "88",
    "260"])