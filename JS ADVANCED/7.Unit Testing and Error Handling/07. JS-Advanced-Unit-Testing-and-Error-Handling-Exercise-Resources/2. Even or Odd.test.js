const { expect } = require('chai')
const isOddOrEven = require('./2. Even or Odd')

describe('Even or Odd Test', function () {
    it('Test 1: return undefide with numbers', () => {
        expect(isOddOrEven(2)).undefined
    })
    it('Test 2: return undefide with boolean', () => {
        expect(isOddOrEven(true)).undefined
    })
    it('Test 3: return undefide with array', () => {
        expect(isOddOrEven([1, 2, 3])).undefined
    })
    it('Test 4: return even when string is even length', () => {
        expect(isOddOrEven("aaaa")).equal('even')
    })
    it('Test 4: return odd when string is odd length', () => {
        expect(isOddOrEven('aaa')).equal('odd')
    })
})