function calc(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let crew = Number(input[2]);
  
    let cost = 0;
    let discountMain = 0;
    let discountXtra = 0;
  
    /* Calculate Main Discount */
    if (crew <= 6) {
      discountMain = 10 / 100;
    } else if (crew > 12) {
      discountMain = 25 / 100;
    } else {
      discountMain = 15 / 100;
    }
  
    /* Calculate Extra Discount */
    if (crew % 2 === 0 && season !== "Autumn") {
      discountXtra = 5 / 100;
    }
    
    /* Calculate Trip Cost */
    switch (season) {
      case "Spring":
        cost = 3000 * (1 - discountMain) * (1 - discountXtra);
        break;
      case "Summer":
      case "Autumn":
        cost = 4200 * (1 - discountMain) * (1 - discountXtra);
        break;
      case "Winter":
        cost = 2600 * (1 - discountMain) * (1 - discountXtra);
        break;
      default:
        console.log("Season mismatch!");
    }
  
    /* Check against budget */
    if (budget >= cost) {
      console.log(`Yes! You have ${(budget - cost).toFixed(2)} leva left.`);
    } else {
      console.log(
        `Not enough money! You need ${(cost - budget).toFixed(2)} leva.`
      );
    }
  }
// Тони и приятели много обичали да ходят за риба, те са толкова запалени по риболова, че решават да отидат на риболов с кораб. Цената за наемане на кораба зависи от сезона и броя рибари.
// Цената зависи от сезона:
// ⦁	Цената за наем на кораба през пролетта е  3000 лв.
// ⦁	Цената за наем на кораба през лятото и есента е  4200 лв.
// ⦁	Цената за наем на кораба през зимата е  2600 лв.
// В зависимост от броя си групата ползва отстъпка:
// ⦁	Ако групата е до 6 човека включително  –  отстъпка от 10%.
// ⦁	Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%.
// ⦁	Ако групата е от 12 нагоре  –  отстъпка от 25%. 
// Рибарите ползват допълнително 5% отстъпка ако са четен брой освен ако не е есен - тогава нямат допълнителна отстъпка. 
// Напишете функция, която да пресмята дали рибарите ще съберат достатъчно пари. 

// ⦁	Сезон –  текст : "Spring", "Summer", "Autumn", "Winter"
// Да се отпечата на конзолата един ред:
// ⦁	Ако бюджетът е достатъчен:
// "Yes! You have {останалите пари} leva left."
// ⦁	Ако бюджетът НЕ Е достатъчен:
// "Not enough money! You need {сумата, която не достига} leva."

solve (["2000",
"Winter",
"13"])
