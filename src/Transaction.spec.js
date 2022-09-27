const Transaction = require('./Transaction')

describe("Transaction class", ()=>{
    it('should not be create a transaction without a string label',()=>{
       const createdTransaction = () => new Transaction(1, 50);
        expect(createdTransaction).toThrow("label must be of type string")
    })

    it('should not be create a transaction without a number value',()=>{
        const createdTransaction = () => new Transaction('1', '50');
        expect(createdTransaction).toThrow("value must be of type number")
     })

    it('should not to be able to create a transaction with more than two decimal places',()=>{
        const createdTransaction = () => new Transaction('1', 50.1122);
        expect(createdTransaction).toThrow("value must have up to two decimal places")
    })

    it('should save the value is an Integer',()=>{
        const createdTransaction = new Transaction('Transaction 1', 5.11);
        expect(createdTransaction.value).toBe(511)
    })

    it('should be able to get value as a float', ()=>{
        const createdTransaction = new Transaction('Transaction 1', 5.11);
        expect(createdTransaction.getValue()).toBe(5.11)
    })
})