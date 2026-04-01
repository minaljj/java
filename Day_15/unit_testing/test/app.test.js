const {describe,it}=require('mocha');
const add=require('../app');

const{expect}=require('chai');

beforeEach(()=>{
    console.log("before Each");
})
describe('testing math operation',()=>{
    it('normal add',()=>{
        const result =add(2,3);
        expect(result).to.equal(5) ;
    })
    it('normal add -ve number',()=>{
        const result =add(-2,-3);
        expect(result).to.equal(-5) ;
    })
})