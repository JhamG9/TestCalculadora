var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var calculator = require('../calculator');

describe('Test para calculadora ', () => {

    it('Suma: 3 + 5 = 8', () => {
        var resultado = calculator.suma(3, 5);
        assert.equal(resultado, 8);
    });

    it('Resta: 5 - 3 = 2', () => {
        var resultado = calculator.resta(5, 3);
        assert.equal(resultado, 2);
    });

    it('División 8 / 2 = 4', () => {
        var resultado = calculator.division(8, 2);
        assert.equal(resultado, 4);
    });

    it('Multiplicación 4 X 5 = 20', () =>{
        var resultado = calculator.multiplicacion(4,5);
        assert.equal(resultado, 20);
    });


    // it('División: 8/2')



    // it('Check the returned value using: assert.equals(value, value)', () => {
    //     result = calculator.sum(1, 1);
    //     assert.equal(result, 2);
    // })

})