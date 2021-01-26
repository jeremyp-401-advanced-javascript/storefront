let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics', description: 'Electromechanigadgetal things to consume your <strike>soul</strike> time!' },
    { name: 'food', displayName: 'Food', description: 'Food you should eat... before it eats you!' },
    { name: 'clothing', displayName: 'Clothing', description: 'Mysitcal threads, guaranteed to make you irresistable!' },
  ],
  activeCategory: 'electronics',
};

const categoryStore = (state = initialState, action) => {
  let { type, payload } = action;
  // console.log({type},{payload});
  // console.log({state});

  switch (type) {
    case 'CATEGORY_CHANGE':
      return {categories: state.categories, activeCategory: payload};

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

export const changeCategory = (category) => {
  return {
    type: 'CATEGORY_CHANGE',
    payload: category,
  };
};

export const reset = () => {
  return {
    type: 'RESET',
  };
};

export default categoryStore;