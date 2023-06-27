function wildZoo(input) {
    let zoo = {}
    while (input[0] !== 'EndDay') {
        let [command, info] = input.shift().split(': ')
        switch (command) {
            case 'Add':
                let [name, neededFood, area] = info.split('-')
                neededFood = Number(neededFood)
                if (!zoo[name]) {
                    zoo[name] = { neededFood, area }
                } else {
                    zoo[name].neededFood += neededFood
                }; break
            case 'Feed':
                let [animalName, food] = info.split("-")
                food = Number(food)
                if (zoo[animalName]) {
                    zoo[animalName]['neededFood'] -= food
                    if (zoo[animalName]['neededFood'] <= 0) {
                        console.log(`${animalName} was successfully fed`);
                        delete zoo[animalName]
                    }
                }
        }
    }

    console.log("Animals:");
    let areas = {}
    for (let animal in zoo) {
        let [foodNeeded, area] = Object.values(zoo[animal])
        console.log(` ${animal} -> ${foodNeeded}g`);
        if (!areas[area]) {
            areas[area] = 1
        } else {
            areas[area] += 1
        }

    }
    console.log("Areas with hungry animals:");
    for (let [area, count] of Object.entries(areas)) {
        console.log(` ${area}: ${count}`);
    }

}

wildZoo(["Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay"])





