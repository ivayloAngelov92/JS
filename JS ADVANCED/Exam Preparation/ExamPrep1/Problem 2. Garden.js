class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = Number(spaceAvailable)
        this.plants = []
        this.storage = []
    }
    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw Error("Not enough space in the garden.")
        }
        if (!this.plants[plantName]) {
            this.plants[plantName] = {
                spaceRequired,
                ripe: false,
                quantity: 0
            }
        }
        this.spaceAvailable -= spaceRequired
        return `The ${plantName} has been successfully planted in the garden.`
    }
    ripenPlant(plantNam, quantity) {
        let currentPlant = this.plants[plantNam]
        if (!this.plants[plantNam]) { throw Error(`There is no ${plantNam} in the garden.`) }
        if (currentPlant.ripe === true) { throw Error(`The ${plantNam} is already ripe.`) }
        if (quantity <= 0) { throw Error("The quantity cannot be zero or negative.") }
        currentPlant.ripe = true
        currentPlant.quantity += Number(quantity)
        if (quantity === 1) {
            return `${quantity} ${plantNam} has successfully ripened.`
        } else { return `${quantity} ${plantNam}s have successfully ripened.` }
    }
    harvestPlant(plantName) {
        let currentPlant = this.plants[plantName]
        if (!this.plants[plantName]) { throw Error(`There is no ${plantName} in the garden.`) }
        if (!currentPlant.ripe) { throw Error(`The ${plantName} cannot be harvested before it is ripe.`) }
        if (!this.storage[plantName]) {
            this.storage[plantName] = 0
        }
        this.storage[plantName] += currentPlant.quantity

        delete this.plants[plantName]
        this.spaceAvailable += currentPlant.spaceRequired
        return `The ${plantName} has been successfully harvested.`
    }
    generateReport() {
        let report = []
        let plantsInGarden = `The garden has ${this.spaceAvailable} free space left.`
        report.push(plantsInGarden)
        let plants = Object.keys(this.plants).sort((a, b) => a.localeCompare(b))
        report.push(`Plants in the garden: ${plants.join(', ')}`)
        let plantsInStorage = []


        if (!Object.keys(this.storage).length) {
            report.push("Plants in storage: The storage is empty.");
        } else {
            for (let [product, quantity] of Object.entries(this.storage)) {
                plantsInStorage.push(`${product} (${quantity})`)
            }
            report.push(`Plants in storage: ${plantsInStorage.join(", ")}`)

        }
        return report.join('\n')
    }

}
const myGarden = new Garden(250);

console.log(myGarden.addPlant("apple", 20));

console.log(myGarden.addPlant("orange", 200));

console.log(myGarden.addPlant("raspberry", 10));

console.log(myGarden.ripenPlant("apple", 10));

console.log(myGarden.ripenPlant("orange", 1));

console.log(myGarden.harvestPlant("orange"));

console.log(myGarden.generateReport());

