function solve(input) {
    let number = input.shift()
    let plantsInfo = {}
    let command = input.shift()
    for (let i = 0; i < number; i++) {
        let [plant, rarity] = command.split('<->')
        if (!plantsInfo[plant]) {
            plantsInfo[plant] = {
                rarity,
                rating: []
            }
        }
        plantsInfo[plant].rarity = rarity
        command = input.shift()
    }
    while (command != 'Exhibition') {
        let [action, toDo] = command.split(': ')
        if (action === 'Rate') {
            let [plant, rating] = toDo.split(' - ')
            rating = Number(rating)
            if (plantsInfo[plant]) {
                plantsInfo[plant].rating.push(rating)
            } else { console.log('error'); }
        } else if (action === 'Update') {
            let [plant, rarity] = toDo.split(' - ')
            rarity = Number(rarity)
            if (plantsInfo[plant]) {
                plantsInfo[plant].rarity = rarity
            } else { console.log('error'); }
        } else if (action === 'Reset') {
            let plant = toDo
            if (plantsInfo[plant]) {
                plantsInfo[plant].rating = []
            } else { console.log('error'); }
        }
        command = input.shift()
    }
    console.log('Plants for the exhibition:');
    for (let [plant, value] of Object.entries(plantsInfo)) {
        let average = value.rating.reduce((a, b) => a + b, 0) / value.rating.length
        if (value.rating.length === 0) { average = 0 }
        console.log(`- ${plant}; Rarity: ${value.rating}; Rating: ${average(value.rating).toFixed(2)}`);
    }

}


solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
