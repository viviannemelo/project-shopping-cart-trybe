const API_URL = (QUERY) => `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;

const fetchProducts = async (link) => {
  if (!link) {
    throw new Error('You must provide an url');
  }
  const url = API_URL(link);
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
