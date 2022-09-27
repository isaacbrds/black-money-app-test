const { isValidDecimal} = require('./utils');

describe('utils.js', ()=>{
    it('should return true if number is integer',()=>{
        expect(isValidDecimal(52)).toBe(true)
    })

    it('should return true if number has one decimal place',()=>{
        expect(isValidDecimal(1.1)).toBe(true)
    })

    it('should return true if has two decimal places', ()=>{
        expect(isValidDecimal(5.21)).toBe(true)
    })

    it('should return false for number is more of two decimal places', ()=>{
        expect(isValidDecimal(4.1122)).toBe(false)
        expect(isValidDecimal(4.11111122)).toBe(false)
    })
})