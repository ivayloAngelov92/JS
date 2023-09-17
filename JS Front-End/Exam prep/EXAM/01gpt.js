function solveRace(inputs) {
    const n = inputs.shift()
    const startPos=inputs.splice(0,n)
    let riders=[]

    for (let i = 0; i < n; i++) {
        const [rider, fuelCapacity, position] = startPos[i].split('|');
        riders.push({
            name: rider,
            fuel: parseFloat(fuelCapacity),
            position: parseInt(position)
        });
    }
    let line=inputs.shift()
    while(line!=='Finish') {
        const [command, arg1, arg2, arg3] = line.split(' - ');

        if (command === 'StopForFuel') {
            const rider = riders.find(r => r.name === arg1);
            const minFuel = parseFloat(arg2);
            const changedPosition = parseInt(arg3);

            if (rider.fuel < minFuel) {
                rider.position = changedPosition;
                console.log(`${rider.name} stopped to refuel but lost his position, now he is ${rider.position}.`);
            } else {
                console.log(`${rider.name} does not need to stop for fuel!`);
            }
        } else if (command === 'Overtaking') {
            const rider1 = riders.find(r => r.name === arg1);
            const rider2 = riders.find(r => r.name === arg2);

            if (rider1.position < rider2.position) {
                const tempPosition = rider1.position;
                rider1.position = rider2.position;
                rider2.position = tempPosition;
                console.log(`${rider1.name} overtook ${rider2.name}!`);
            }
        } else if (command === 'EngineFail') {
            const rider = riders.find(r => r.name === arg1);
            const lapsLeft = parseInt(arg2);
            riders.splice(riders.indexOf(rider), 1);
            console.log(`${rider.name} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
        }
        line= inputs.shift();
    }

    const finishedRiders = riders.sort((a, b) => a.position - b.position);
    for (const rider of finishedRiders) {
        console.log(`${rider.name}\n  Final position: ${rider.position}`);
    }
}

solveRace(["3",
"Valentino Rossi|100|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])