const saveCartItems = (savedContent) => {
  localStorage.setItem('cartItems', JSON.stringify(savedContent));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
