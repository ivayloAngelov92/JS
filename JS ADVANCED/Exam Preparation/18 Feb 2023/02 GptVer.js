class WineSelection {
    constructor(space) {
        this.space = space
        this.wines = []
        this.bill = 0
    }
    reserveABottle(wineName, wineType, price) {
        if (this.space <= 0) {
            throw new Error("Not enough space in the cellar.")
        }
        this.wines.push({
            wineName,
            wineType,
            price,
            paid: false,
        });
        this.space--
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }
    payWineBottle(wineName, price) {
        const wine = this.wines.find((w) => w.wineName === wineName);
        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`)
        }
        if (wine.paid) {
            throw new Error(`${wineName} has already been paid.`)
        }
        wine.paid = true
        this.bill += price
        return `You bought a ${wineName} for a ${price}$.`
    }
    openBottle(wineName) {
        const index = this.wines.findIndex((w) => w.wineName === wineName);
        if (index === -1) {
            throw new Error("The wine, you're looking for, is not found.");
        }
        const wine = this.wines[index]
        if (!wine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }
        this.wines.splice(index, 1)
        return `You drank a bottle of ${wineName}.`
    }
    cellarRevision(wineType) {
        if (!wineType) {
            const emptySlots = this.space;
            const paidWines = this.wines.filter((w) => w.paid);
            const notPaidWines = this.wines.filter((w) => !w.paid);
            let output = [`You have space for ${emptySlots} bottles more.`];
            output.push(`You paid ${this.bill}$ for the wine.`);

            const sortedWines = [...paidWines, ...notPaidWines].sort((a, b) =>
                a.wineName.localeCompare(b.wineName)
            );
            sortedWines.forEach((wine) => {
                output.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid ? "Has Paid" : "Not Paid"}.`)
            })
            return output.join('\n')
        }
        const winesOfType = this.wines.filter((w) => w.wineType === wineType);
        if (winesOfType.length === 0) {
            throw new Error(`There is no ${wineType} in the cellar.`);
        }
        const sortedWines = winesOfType.sort((a, b) =>
            a.wineName.localeCompare(b.wineName)
        );
        let output = [];
        sortedWines.forEach((wine) => {
            output.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid ? "Has Paid" : "Not Paid"}.`);
        })
        return output.join('\n')
    }
}
