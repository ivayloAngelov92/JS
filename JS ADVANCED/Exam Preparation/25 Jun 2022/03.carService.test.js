let { expect } = require('chai')
let carService = require('./03. Car Service_Resources')

describe("Tests …", function () {
    describe("isItExpensive (issue) …", function () {

        it("TODO …", function () {
            expect(carService.isItExpensive("Engine")).to.equal(`The issue with the car is more severe and it will cost more money`)
            expect(carService.isItExpensive("Transmission")).to.equal(`The issue with the car is more severe and it will cost more money`)
            expect(carService.isItExpensive("alabala")).to.equal(`The overall price will be a bit cheaper`)
            expect(carService.isItExpensive(2)).to.equal(`The overall price will be a bit cheaper`)
        });
    });

    describe('discount (numberOfParts, totalPrice) ..', function () {
        it('todo...', function () {
            expect(carService.discount(7, 100)).to.equal(`Discount applied! You saved 15$`)
            expect(carService.discount(2, 100)).to.equal("You cannot apply a discount")
            expect(carService.discount(-1, 100)).to.equal("You cannot apply a discount")
            expect(carService.discount(10, 100)).to.equal(`Discount applied! You saved 30$`)
            expect(() => carService.discount('a', 100)).to.throw(Error)
            expect(() => carService.discount('a', '100')).to.throw(Error)
            expect(() => carService.discount(6, "p")).to.throw(Error)
            expect(() => carService.discount(6, [])).to.throw(Error)
            expect(() => carService.discount(6, undefined)).to.throw(Error)
            expect(() => carService.discount(true, undefined)).to.throw(Error)
        })
    })
    describe('partsToBuy (partsCatalog, neededParts)', function () {
        it('todo....', function () {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"])).to.equal(145)
            expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).to.equal(0)

            expect(() => carService.partsToBuy('a', ["blowoff valve", "injectors"])).throw(Error)
            expect(() => carService.partsToBuy(true, ["blowoff valve", "injectors"])).throw(Error)
            expect(() => carService.partsToBuy(2, ["blowoff valve", "injectors"])).throw(Error)
            expect(() => carService.partsToBuy(undefined, ["blowoff valve", "injectors"])).throw(Error)
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], 2)).throw(Error)
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], 'a')).throw(Error)
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], true)).throw(Error)
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], undefined)).throw(Error)
        })
    })
});
