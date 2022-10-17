const saveCartItems = (savedContent) => localStorage.setItem('cartItems', savedContent);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
