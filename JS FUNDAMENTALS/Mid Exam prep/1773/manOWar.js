function manOWar(array) {
    let pirateShip = array.shift().split('>').map(Number)
    let warShip = array.shift().split('>').map(Number)
    let maxHp = Number(array.shift())
    let commandLine = array.shift()
    while (commandLine != 'Retire') {
        let line = commandLine.split(' ')
        let command = line.shift()
        switch (command) {
            case 'Fire':
                let [index, damage] = line.map(Number)
                warShip[index] ? warShip[index] -= damage : null
                if (warShip[index] <= 0) { console.log("You won! The enemy ship has sunken."); return; }; break
            case 'Defend': let [startIndex, endIndex, damag] = line.map(Number)
                if (startIndex >= 0 && endIndex < pirateShip.length) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        pirateShip[i] -= damag
                        if (pirateShip[i] <= 0) {
                            console.log("You lost! The pirate ship has sunken."); return
                        }
                    }
                }
                ; break
            case 'Repair':
                let [repairIndex, health] = line.map(Number)
                pirateShip[repairIndex] ? pirateShip[repairIndex] += health : null
                pirateShip[repairIndex] > maxHp ? pirateShip[repairIndex] = maxHp : null
                    ; break
            case 'Status':
                let count = pirateShip.filter(x => x  < maxHp* 0.20)
                console.log(`${count.length} sections need repair.`);; break
        }
        commandLine=array.shift()
    }
    let sumPirate = pirateShip.reduce((a, b) => a + b)
    let sumWarShip = warShip.reduce((a, b) => a + b)
    if (sumPirate > 0 && sumWarShip > 0) {
        console.log(`Pirate ship status: ${sumPirate}`);
        console.log(`Warship status: ${sumWarShip}`);
    }
}

manOWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])