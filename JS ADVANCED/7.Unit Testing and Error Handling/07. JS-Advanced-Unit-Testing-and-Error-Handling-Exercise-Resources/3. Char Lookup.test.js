let { expect, assert } = require('chai')
let lookupChar = require('./3. Char Lookup')

describe('Char Lookup Tests', function () {
    it('Test 1: Returns undefined when first input not a string', () => {
        expect(lookupChar(1, 1)).undefined
    })
    it('Test 2: Returns undefined when 2nd param is not integer number', () => {
        expect(lookupChar('ddd', 2.2)).undefined
    })
    it('Test 3: Returns undefined when 2nd param is not number', () => {
        expect(lookupChar('ddd', 'aaaa')).undefined
    })
    it('Test 4: Returns Incorrect index when string.length <= index,', () => {
        expect(lookupChar('aa', 4)).to.equal('Incorrect index')
    })
    it('Test 5: Returns Incorrect index when index <0', () => {
        expect(lookupChar("aa", -2)).to.equal('Incorrect index')
    })
    it('Test 7: return "v", when index is 2 and string is love', () => {
        expect(lookupChar('love', 2)).equal('v')
    })
})