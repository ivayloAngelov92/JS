let { expect } = require('chai')
let findNewApartment = require('./findApartment')

describe("Tests …", function () {
    describe("•	isGoodLocation (city, nearPublicTransportation)", function () {
        it("TODO …", function () {
            expect(() => findNewApartment.isGoodLocation('a', 'b')).throw(Error)
            expect(() => findNewApartment.isGoodLocation('a', 2)).throw(Error)
            expect(() => findNewApartment.isGoodLocation('a', undefined)).throw(Error)
            expect(() => findNewApartment.isGoodLocation('a', [])).throw(Error)
            expect(() => findNewApartment.isGoodLocation(2, true)).throw(Error)
            expect(() => findNewApartment.isGoodLocation(2, false)).throw(Error)
            expect(() => findNewApartment.isGoodLocation(true, true)).throw(Error)

            expect(findNewApartment.isGoodLocation('a', true)).equal("This location is not suitable for you.")
            expect(findNewApartment.isGoodLocation('Silistra', true)).equal("This location is not suitable for you.")
            expect(findNewApartment.isGoodLocation('Montana', false)).equal("This location is not suitable for you.")
            expect(findNewApartment.isGoodLocation('Montana', true)).equal("This location is not suitable for you.")
            expect(findNewApartment.isGoodLocation('sofia', true)).equal("This location is not suitable for you.")
            expect(findNewApartment.isGoodLocation('varna', true)).equal("This location is not suitable for you.")

            expect(findNewApartment.isGoodLocation('Sofia', false)).equal("There is no public transport in area.")
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).equal("There is no public transport in area.")
            expect(findNewApartment.isGoodLocation('Varna', false)).equal("There is no public transport in area.")
            expect(findNewApartment.isGoodLocation('Varna', true)).equal("You can go on home tour!")
            expect(findNewApartment.isGoodLocation('Sofia', true)).equal("You can go on home tour!")
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).equal("You can go on home tour!")
        });
    });
    describe('isLargeEnough (apartments, minimalSquareMeters) ', function () {
        it('todo....', function () {
            expect(findNewApartment.isLargeEnough([40, 50, 60], 40)).to.equal('40, 50, 60')
            expect(findNewApartment.isLargeEnough([40, 50, 60], 50)).to.equal('50, 60')
            expect(findNewApartment.isLargeEnough([40, 50, 60], 49)).to.equal('50, 60')
            expect(findNewApartment.isLargeEnough([40, 50, 60], 70)).to.equal('')

            expect(() => findNewApartment.isLargeEnough('a', 50)).throw(Error)
            expect(() => findNewApartment.isLargeEnough([], 50)).throw(Error)
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], 'a')).throw(Error)
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], '2')).throw(Error)
            expect(() => findNewApartment.isLargeEnough(true, 'a')).throw(Error)
        })
    })
    describe("•	isItAffordable (price, budget) ", function () {
        it('todo', function () {
            expect(findNewApartment.isItAffordable(100, 200)).equal("You can afford this home!")
            expect(findNewApartment.isItAffordable(100, 100)).equal("You can afford this home!")
            expect(findNewApartment.isItAffordable(100, 99)).equal("You don't have enough money for this house!")

            expect(() => findNewApartment.isItAffordable('a', 2)).throw(Error)
            expect(() => findNewApartment.isItAffordable(2, true)).throw(Error)
            expect(() => findNewApartment.isItAffordable(1, -2)).throw(Error)
            expect(() => findNewApartment.isItAffordable(-1, 2)).throw(Error)
            expect(() => findNewApartment.isItAffordable([], 2)).throw(Error)
            expect(() => findNewApartment.isItAffordable('a', 'b')).throw(Error)
        })
    })
});
