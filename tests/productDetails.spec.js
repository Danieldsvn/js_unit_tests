const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {    
    // ESCREVA SEUS TESTES ABAIXO:
    expect(typeof productDetails).toBe('function');
    // Teste se productDetails é uma função.
    expect(Array.isArray(productDetails())).toBeTruthy();
    // Teste se o retorno da função é um array.
    expect(productDetails()).toHaveLength(2);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(typeof productDetails()[0] === 'object' && typeof productDetails()[1] === 'object').toBeTruthy();    
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(productDetails('arroz', 'feijão')[0] !==  productDetails('arroz', 'feijão')[1]).toBeTruthy(); 
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails()[0].details.productId.endsWith('123') && productDetails()[1].details.productId.endsWith('123')).toBeTruthy(); 
    // Teste se os dois productIds terminam com 123.
  });
});
