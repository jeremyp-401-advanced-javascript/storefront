var uuid = require('uuid-v4');

let initialState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartStore = (state = initialState, action) => {
  let { type, payload } = action;
  let uuidTest = uuid();
  console.log({uuidTest})
  console.log({type},{payload});
  console.log({state});

  switch (type) {
    case 'ADD_TO_CART':
      let totalPriceAdd = (state.totalPrice);
      let thisPrice = payload.price;
      totalPriceAdd = (Math.round(((totalPriceAdd + thisPrice) * 1e12)) / 1e12);
      // See if this item is already in the cart
      let newAddCartItems = [];
      let alreadyInCart = state.cartItems.find(item => item.id === payload.id);
      if (!alreadyInCart) {
        console.log(`Payload: `, payload);
        console.log(`Item wasn't already in cart: `, alreadyInCart)
        payload = {...payload, quantityInCart: 1}
        newAddCartItems = [...state.cartItems, payload];
      } else {
        newAddCartItems = state.cartItems.filter(item => item.id !== payload.id);
        payload = {...payload, quantityInCart: payload.quantityInCart + 1}
      }
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
        totalItems: state.totalItems + 1,
        totalPrice: totalPriceAdd,
      };

    case 'QTY_IN_CART':
      console.log('Trying to change quantity in cart: ', payload);
      // TODO: Try pushing the payload to the cart. Add an id to make deleting easier.
      // This will require concurrently changing the product store as well.
      payload = {...payload, quantityInCart: payload.quantityInCart + 1}
      return {
        ...state, 
        cartItems: [...state.cartItems, payload],
        totalItems: state.totalItems + 1
      };
  

    case 'DELETE_FROM_CART':
      // Remove the item
      let newCartItems = state.cartItems.filter(item => item.id !== payload.id);
      // Change the price
      let totalPriceRemove = (state.totalPrice);
      let thisPriceRemove = payload.price;
      totalPriceRemove = (Math.round(((totalPriceRemove - thisPriceRemove) * 1e12)) / 1e12);
      return {
        ...state,
        cartItems: newCartItems,
        totalItems: state.totalItems - 1,
        totalPrice: totalPriceRemove,
      };

    case 'RESET':
      // TODO: This won't be good enough. Resetting the cart will need to take all of the items and +1
      // to their stock numbers. A 'delete one from cart' may be easier to implement first.
      return initialState;

    default:
      return state;
  }
};

export const addProductToCart = (item) => {
  return {
    type: 'ADD_TO_CART',
    payload: item
  };
};

export const removeProductFromCart = (item) => {
  return {
    type: 'DELETE_FROM_CART',
    payload: item
  };
};

export const resetCart = () => {
  return {
    type: 'RESET',
  };
};

export default cartStore;