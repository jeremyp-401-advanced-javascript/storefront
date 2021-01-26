let initialState = {
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ],
};

const productStore = (state = initialState, action) => {
  let { type, payload } = action;
  console.log({type},{payload});
  console.log({state});

  switch (type) {
    case 'FILTER_BY_CATEGORY':
      // Filter by category, return matching results.
      let filteredProducts = initialState.products.filter(product => {
        return (product.category === payload) && { product }
      })
      return {products: filteredProducts};

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

export const filterProductsByCategory = (category) => {
  return {
    type: 'FILTER_BY_CATEGORY',
    payload: category
  };
};

export const reset = () => {
  return {
    type: 'RESET',
  };
};

export default productStore;