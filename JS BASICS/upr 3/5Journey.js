function solve(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let moneySpent = 0;
    let typeHoliday = "";

    if (budget <= 100) {
        destination = "Bulgaria"
    } else if (budget <= 1000) {
        destination = "Balkans"
    } else {
        destination = "Europe"
    }
    switch (season) {
        case "summer":
            if (destination === "Bulgaria") {
                moneySpent = (0.3 * budget).toFixed(2)
                typeHoliday = "Camp"
                console.log(`Somewhere in ${destination}`);
                console.log(`${typeHoliday} - ${moneySpent}`);
            } else if (destination === "Balkans") {
                moneySpent = (0.4 * budget).toFixed(2)
                typeHoliday = "Camp"
                console.log(`Somewhere in ${destination}`);
                console.log(`${typeHoliday} - ${moneySpent}`);
            } else {
                moneySpent = (0.9 * budget).toFixed(2)
                typeHoliday = "Hotel"
                console.log(`Somewhere in ${destination}`);
                console.log(`${typeHoliday} - ${moneySpent}`);
            } break
        case "winter":
            typeHoliday = "Hotel"
            if (destination === "Bulgaria") {
                moneySpent = (0.7 * budget).toFixed(2)
                console.log(`Somewhere in ${destination}`);
                console.log(`${typeHoliday} - ${moneySpent}`);
            } else if (destination === "Balkans") {
                moneySpent = (0.8 * budget).toFixed(2)
                console.log(`Somewhere in ${destination}`);
                console.log(`${typeHoliday} - ${moneySpent}`);
            } else {
                moneySpent = (0.9 * budget).toFixed(2)
                console.log(`Somewhere in ${destination}`);
                console.log(`${typeHoliday} - ${moneySpent}`);
            } break
        default: console.log("Season mismatch");
    }


}

solve(["1500", "summer"])
// ⦁	При 100лв. или по-малко – някъде в България
// ⦁	Лято – 30% от бюджета
// ⦁	Зима – 70% от бюджета
// ⦁	При 1000лв. или по малко – някъде на Балканите
// ⦁	Лято – 40% от бюджета
// ⦁	Зима – 80% от бюджета
// ⦁	При повече от 1000лв. – някъде из Европа
// ⦁	При пътуване из Европа, независимо от сезона ще похарчи 90% от бюджета.
// На конзолата трябва да се отпечатат два реда.
// ⦁	Първи ред – "Somewhere in [дестинация]" измежду "Bulgaria", "Balkans" и "Europe"
// ⦁	Втори ред – "{Вид почивка} – {Похарчена сума}"
// ⦁	Почивката може да е между "Camp" и "Hotel"
// ⦁	Сумата трябва да е закръглена с точност до вторият знак след запетаята.

