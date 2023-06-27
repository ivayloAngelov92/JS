let { expect } = require('chai')
let flowerShop = require('./flowerShop')


describe("Tests …", function () {
    describe("•	calcPriceOfFlowers(flower, price, quantity)…", function () {
        it("TODO …", function () {
            expect(() => flowerShop.calcPriceOfFlowers("a", 2.2, 2)).throw(Error)
            expect(() => flowerShop.calcPriceOfFlowers("a", 'a', 2)).throw(Error)
            expect(() => flowerShop.calcPriceOfFlowers(2, 2.2, true)).throw(Error)
            expect(() => flowerShop.calcPriceOfFlowers(2, 2, {})).throw(Error)
            expect(() => flowerShop.calcPriceOfFlowers("a", "b", "c")).throw(Error)
            expect(() => flowerShop.calcPriceOfFlowers("a", "b", 1.1)).throw(Error)
            expect(() => flowerShop.calcPriceOfFlowers("a", false, "c")).throw(Error)

            expect(flowerShop.calcPriceOfFlowers('a', 2, 2)).to.equal(`You need $4.00 to buy a!`)
            expect(flowerShop.calcPriceOfFlowers('a', 2, 5)).to.equal(`You need $10.00 to buy a!`)
        });
    });
    describe('checkFlowersAvailable(flower, gardenArr)..', function () {
        it('todo..', function () {
            expect(flowerShop.checkFlowersAvailable('Lily', ["Rose", "Lily", "Orchid"])).equal(`The Lily are available!`)
            expect(flowerShop.checkFlowersAvailable('a', ["Rose", "Lily", "Orchid"])).equal(`The a are sold! You need to purchase more!`)
        })
    })
    describe('•	sellFlowers(gardenArr, space) ', function () {
        it('todo..', function () {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], "alabala")).throw(Error)
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], true)).throw(Error)
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], {})).throw(Error)
            expect(() => flowerShop.sellFlowers("a", 2)).throw(Error)
            expect(() => flowerShop.sellFlowers(true, 2)).throw(Error)
            expect(() => flowerShop.sellFlowers(2, 2)).throw(Error)
            expect(() => flowerShop.sellFlowers(undefined, 2)).throw(Error)
            expect(() => flowerShop.sellFlowers(undefined, 2)).throw(Error)
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1)).throw(Error)
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3)).throw(Error)
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 4)).throw(Error)

            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).equal('Rose / Lily')
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).equal('Rose / Orchid')
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0)).equal('Lily / Orchid')
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid", "Dandelion"], 0)).equal('Lily / Orchid / Dandelion')
        })
    })
});
