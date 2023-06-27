const { expect } = require('chai')
const createCalculator = require('./7. Add  Subtract')

describe('Calculator', function () {
    let calc = null
    beforeEach(() => {
        calc = createCalculator()
    })
    it('returns zero initial value', () => {
        expect(calc.get()).to.equal(0)
    })
    it('can add numbers', () => {
        calc.add(1)
        expect(calc.get()).to.equal(1)
    })
    it('can add more than one number', () => {
        calc.add(1)
        calc.add(1)
        expect(calc.get()).to.equal(2)
    })
    it('can subtract numbers', () => {
        calc.subtract(1)
        expect(calc.get()).to.equal(-1)
    })
    it('can subtract more than one numbers', () => {
        calc.subtract(1)
        calc.subtract(1)
        expect(calc.get()).to.equal(-2)
    })
    it('can use string numbers', () => {
        calc.add("1")
        expect(calc.get()).to.equal(1)
    })
    it('can use string and numbers', () => {
        calc.add("1")
        calc.add(1)
        expect(calc.get()).to.equal(2)
    })
    it('returns Nan if non number used with number', () => {
        calc.add("b")
        calc.add(1)
        expect(calc.get()).to.be.NaN
    })

})

