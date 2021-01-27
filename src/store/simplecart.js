let initialState = {
  cart: [],
};

const cartStore = (state = initialState, action) => {
  let { type, payload } = action;
  console.log({type},{payload});
  console.log({state});

  switch (type) {
    case 'ADD_TO_CART':
      // TODO: Try pushing the payload to the cart. 
      // This will require concurrently changing the product store as well.
      return state.cart.push(payload);

    case 'DELETE_FROM_CART':
      // TODO: Try removing payload to the cart. 
      // This will require concurrently changing the product store as well.
      return state.cart.pop(payload);

    case 'RESET':
      // TODO: This won't be good enough. Resetting the cart will need to take all of the items and +1
      // to their stock numbers. A 'delete one from cart' may be easier to implement first.
      return initialState;

    default:
      return state;
  }
};

export const addProductToCart = (category) => {
  return {
    type: 'ADD_TO_CART',
    payload: category
  };
};

export const removeProductFromCart = (category) => {
  return {
    type: 'ADD_TO_CART',
    payload: category
  };
};

export const resetCart = () => {
  return {
    type: 'RESET',
  };
};

export default cartStore;