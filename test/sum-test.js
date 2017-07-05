const sum = require('../sum.js');
const {expect,assert} = require('chai');

// Reference http://chaijs.com/ for questions

describe ('Sum', function() {

    it ('Should be a function', function() {
      expect(sum).to.be.a('function','sum is not a function');
      assert.isFunction(sum, 'sum is not a function');
    });

    it('Should return 0 if no arguments are passed in.', function() {
      expect(sum()).to.equal(0);
      assert.equal(sum(),0);
    });

    it('Should return undefined if argument is a negative number.', function() {
      expect(sum(-1)).to.equal(undefined);
      assert.isUndefined(sum(-1),'Negative numbers should be undefined');
    });

    it('Should include a return.', function () {
      expect(sum()).to.include('return');
      assert.include('return');
    });

});
