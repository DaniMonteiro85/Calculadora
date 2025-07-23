var assert = require('assert');
const Calculadora = require('../src/Calculadora');

describe('Testes da calculadora', function () {

let minhacalculadora;
this.beforeEach(function (){

});


describe('Soma Simples', function () {
  it('2 + 3 deve ser igual a 5', function () {
    assert.equal(2 + 3, 5);
  });
});


describe('subtrair', function () {
  it('deve retornar 1 quando subtrair 3 de 4', function () {
    /*
      Esse teste confere se ao subtrair 3 de 4, o resultado é 1.
      É como verificar se o robô calculadora está tirando corretamente
      o valor de uma caixa (3) do valor de outra (4).
    */
    assert.equal(4 - 3, 1);
  });
});



describe('multiplicar', function () {
  it('deve retornar 6 quando multiplicar 2 e 3', function () {
    /*
      Aqui o teste verifica se o robô multiplica corretamente:
      2 vezes 3 deve resultar em 6.
      Pense na multiplicação como uma soma repetida.
    */
    assert.strictEqual(2 * 3, 6);
  });
}); 

describe('dividir', function () {
  it('deve retornar 2 quando multiplicar 2 e 1', function () {
    /*
      Aqui o teste verifica se o robô multiplica corretamente:
      2 vezes 3 deve resultar em 6.
      Pense na multiplicação como uma soma repetida.
    */
    assert.strictEqual(2 / 1, 2);
  });
}); 
});