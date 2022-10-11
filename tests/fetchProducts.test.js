require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const fetchSimulator = require('../mocks/fetchSimulator');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  })
  it('Execute a função fetchProducts com o argumento computador e teste se fetch foi chamada', async () => {
    expect(fetchProducts('computador')).toHaveBeenCalled;
  })
  it('Teste se, ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint https://api.mercadolibre.com/sites/MLB/search?q=computador', () => {
    //
  })
  it('Teste se o retorno da função fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch', () => {
    expect(fetchProducts('computador')).toStrictEqual(computadorSearch.body);
  });
  it('', () => {
    expect(fetchProducts()).toThrow;
  });
});
