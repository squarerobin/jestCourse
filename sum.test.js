const sum = require('./sum')

describe('test sum positive scenarios', ()=>{
    test('sum 2 + 8 should equal to 6', () => {
        expect(sum(2,8)).toBe(10)
    })
})

