let { expect } = require('chai')
let motorcycleRider = require('./Motorcycle Rider')

describe("Tests …", function () {
    describe("licenseRestriction Fn", function () {
        it("returns correct result", () => {
            expect(() => motorcycleRider.licenseRestriction('AM').to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16."))
            expect(() => motorcycleRider.licenseRestriction('A1').to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16."))
            expect(() => motorcycleRider.licenseRestriction('A2').to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18."))
            expect(() => motorcycleRider.licenseRestriction('A').to.equal("No motorcycle restrictions, and the minimum age is 24."))
        });
        it('Returns invalid Info', () => {
            expect(() => motorcycleRider.licenseRestriction('am')).to.throw(Error)
            expect(() => motorcycleRider.licenseRestriction('a1')).to.throw(Error)
            expect(() => motorcycleRider.licenseRestriction('a2')).to.throw(Error)
            expect(() => motorcycleRider.licenseRestriction('a')).to.throw(Error)
            expect(() => motorcycleRider.licenseRestriction(1)).to.throw(Error)
            expect(() => motorcycleRider.licenseRestriction(undefined)).to.throw(Error)
            expect(() => motorcycleRider.licenseRestriction(true)).to.throw(Error)
            expect(() => motorcycleRider.licenseRestriction('alabala')).to.throw(Error)
            expect(() => motorcycleRider.licenseRestriction(["A", '1'])).to.throw(Error)
            expect(() => motorcycleRider.licenseRestriction({})).to.throw(Error)
        })
    });
    describe('motorcycleShowroom ', function () {
        it("should throw Error, when engineVolume is not array", function () {
            expect(() => motorcycleRider.motorcycleShowroom(1, 100)).to.throw(Error)
            expect(() => motorcycleRider.motorcycleShowroom([], 100)).to.throw(Error)
            expect(() => motorcycleRider.motorcycleShowroom([100], 'a')).to.throw(Error)
            expect(() => motorcycleRider.motorcycleShowroom([100], 1)).to.throw(Error)

            expect(motorcycleRider.motorcycleShowroom([50], 50)).to.equal(`There are 1 available motorcycles matching your criteria!`);
            expect(motorcycleRider.motorcycleShowroom([99], 100)).to.equal(`There are 1 available motorcycles matching your criteria!`);
        });
    })
    describe("otherSpendings method tests ", function () {
        it("should throw Error, when equipment is not array", function () {
            expect(() => motorcycleRider.otherSpendings(1, [], true)).to.throw(Error);
            expect(() => motorcycleRider.otherSpendings([], 1, true)).to.throw(Error);
            expect(() => motorcycleRider.otherSpendings([], [], 1)).to.throw(Error);
            expect(motorcycleRider.otherSpendings(['helmet'], ["engine oil"], true)).to.equal(`You spend $243.00 for equipment and consumables with 10% discount!`);
            expect(motorcycleRider.otherSpendings(['helmet'], ["engine oil"], false)).to.equal(`You spend $270.00 for equipment and consumables!`);
            expect(motorcycleRider.otherSpendings(['jacked'], ["oil filter"], true)).to.equal(`You spend $297.00 for equipment and consumables with 10% discount!`);
            expect(motorcycleRider.otherSpendings(['jacked'], ["oil filter"], false)).to.equal(`You spend $330.00 for equipment and consumables!`);
        });
    });
});
