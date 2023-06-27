function solve(input) {
    let month = input[0]
    let nights = Number(input[1])
    let priceApartment = 0
    let priceStudio = 0
    let discountStudio = 0
    let discountApartment = 0
    switch (month) {
        case "May":
        case "October":
            if (nights >= 8 && nights <= 14) {
                discountStudio = 0.05
            } else if (nights >= 15) {
                discountApartment = 0.10
                discountStudio = 0.30
            }
            priceApartment = nights * 65 * (1 - discountApartment)
            priceStudio = nights * 50 * (1 - discountStudio)
            console.log(`Apartment: ${(priceApartment).toFixed(2)} lv.`);
            console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
            break
        case "June":

        case "September":

            if (nights >= 15) {
                discountApartment = 0.10
                discountStudio = 0.20
            }
            priceApartment = nights * 68.70 * (1 - discountApartment)
            priceStudio = nights * 75.20 * (1 - discountStudio)
            console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
            break
        case "July":
        case "August":
            if (nights >= 15) {
                discountApartment = 0.10
            }
            priceApartment = nights * 77 * (1 - discountApartment)
            priceStudio = nights * 76 * (1 - discountStudio)
            console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
            console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
            break
            default:
                console.log("Season mismatch!");
    }


}
// Хотел предлага 2 вида стаи: студио и апартамент. Напишете функция, която изчислява цената за целия престой за студио и апартамент. Цените зависят от месеца на престоя:
// Май и октомври	              Юни и септември	              Юли и август
// Студио – 50 лв./нощувка	     Студио – 75.20 лв./нощувка	    Студио – 76 лв./нощувка
// Апартамент – 65 лв./нощувка	Апартамент – 68.70 лв./нощувка	Апартамент – 77 лв./нощувка
// Предлагат се и следните отстъпки:
// ⦁	За студио, при повече от 7 нощувки през май и октомври : 5% намаление.
// ⦁	За студио, при повече от 14 нощувки през май и октомври : 30% намаление.
// ⦁	За студио, при повече от 14 нощувки през юни и септември: 20% намаление.
// ⦁	За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление.

// Получават се 2 аргумента:
// ⦁	 месецът – May, June, July, August, September или October
// ⦁	броят на нощувките – цяло число в интервала [0 … 200]
// Да се отпечатат на конзолата 2 реда:
// ⦁	На първия ред: “Apartment: {цена за целият престой} lv.”
// ⦁	На втория ред: “Studio: {цена за целият престой} lv.”
// Цената за целия престой форматирана с точност до два знака след десетичната запетая.


solve(["August",
"20"])