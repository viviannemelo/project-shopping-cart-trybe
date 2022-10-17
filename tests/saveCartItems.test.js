const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado', async () => {
    saveCartItems('cartItem');
    await expect(localStorage.setItem).toHaveBeenCalled();
    // expect(cartItemCalled).toHaveBeenCalledWith(localStorage.setItem);
  })
  it('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro a chave cartItems e o segundo sendo o valor passado como argumento para saveCartItems', async () => {
    saveCartItems('cartItem');
    await expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'cartItem');
  })
});
