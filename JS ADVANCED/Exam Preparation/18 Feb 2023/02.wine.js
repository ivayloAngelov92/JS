class WineSelection {
    constructor(space) {
        this.space = space
        this.wines = []
        this.bill = 0
    }
    reserveABottle(wineName, wineType, price) {
        if (this.space === 0) { throw Error("Not enough space in the cellar.") }
        this.wines.push({ wineName, wineType, price, paid: false })
        this.space--
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }
    payWineBottle(wineName, price) {
        let wine = this.wines.find((w) => w.wineName === wineName)
        if (!wine) { throw Error(`${wineName} is not in the cellar.`) }
        if (wine.paid === true) { throw Error(`${wineName} has already been paid.`) }
        wine.paid = true
        this.bill += price
        return `You bought a ${wineName} for a ${price}$.`
    }
    openBottle(wineName) {
        let index = this.wines.findIndex((w) => w.wineName === wineName)
        let wine = this.wines[index]
        if (!wine) { throw Error("The wine, you're looking for, is not found.") }
        if (wine.paid === false) { throw Error(`${wineName} need to be paid before open the bottle.`) }
        this.wines.splice(index, 1)
        return `You drank a bottle of ${wineName}.`
    }
    cellarRevision(wineType) {
        if (!wineType) {
            let result = [`You have space for ${this.space} bottles more.`]
            result.push(`You paid ${this.bill}$ for the wine.`)
            let sorted = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName))
            sorted.forEach((w) => {
                result.push(`${w.wineName} > ${w.wineType} - ${w.paid ? "Has Paid" : "Not Paid"}.`)
            })
            return result.join('\n')
        } else {
            let result = []
            let wines = this.wines.filter((w) => w.wineType === wineType)
            if (wines.length === 0) { throw Error(`There is no ${wineType} in the cellar.`) }
            wines.forEach((w) => {
                result.push(`${w.wineName} > ${w.wineType} - ${w.paid ? "Has Paid" : "Not Paid"}.`)
            })
            return result.join('\n')
        }
    }
}
const selection = new WineSelection(2)
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
console.log(selection.cellarRevision('Rose'));

