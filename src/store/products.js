let initialState = {
  products: [
    { 
      id: '4bcca153-36ca-4135-b8e0-d1536f155625', name: 'TV', 
      category: 'electronics', price: 699.00, inStock: 5, imgsrc: '-I8lDurtfAo'
    },
    { 
      id: 'c2ed444b-7503-4640-ab29-c463d8460726', name: 'Radio',
      category: 'electronics', price: 99.00, inStock: 15, imgsrc: 'idwpKeO-ZWk'
    },
    { 
      id: 'cc9f746d-b0b4-41f5-b0dd-d3427e181780', name: 'Light Bulbs',
      category: 'electronics', price: 9.00, inStock: 15, imgsrc: 'N4iXu_kkq_k'
    },
    { 
      id: 'a3ec7077-b59f-4ef3-aaea-53ed7922bd8c', name: 'Immobile Phone',
      category: 'electronics', price: 9.00, inStock: 15, imgsrc: '8gWEAAXJjtI'
    },
    { 
      id: '6431198d-5c4d-4d18-9de1-0292fc2f74f3"', name: 'Calculator',
      category: 'electronics', price: 9.00, inStock: 15, imgsrc: 'ymCt-vtHYqs'
    },
    { 
      id: 'ad8bbd04-f744-4b24-9840-95a676c42bd1', name: 'N95 Mask',
      category: 'clothing', price: 9.00, inStock: 25, imgsrc: '74a0JAn2llQ'
    },
    { 
      id: 'db2c053b-c2f4-442a-89bb-11012894aee3', name: 'Shirt',
      category: 'clothing', price: 9.00, inStock: 25, imgsrc: 'xPJYL0l5Ii8'
    },
    { 
      id: 'fae644a8-1d99-4e14-9465-9be050fd4ce3', name: 'Shoes',
      category: 'clothing', price: 52.00, inStock: 10, imgsrc: '2uGTx_SajL0'
    },
    { 
      id: '32498ecb-fddd-4440-9778-71839c81a041', name: 'Shoes',
      category: 'clothing', price: 20.00, inStock: 15, imgsrc: 'YQbJLyY0hFU'
    },
    { 
      id: '637a27de-7bc7-422f-9bb3-05a2db2f6508', name: 'Denim Jeans',
      category: 'clothing', price: 52.00, inStock: 10, imgsrc: 'UP9DtTjRYpI'
    },
    { 
      id: 'cb0bb58d-dfea-4ed5-9008-ea64c1343d41', name: 'Apples',
      category: 'food', price: .99, inStock: 500, imgsrc: 'FcDDFUuXh-c'
    },
    { 
      id: '5ea9e07a-7e7e-4ac4-8f7e-cc95441d7b3c', name: 'Eggs',
      category: 'food', price: 1.99, inStock: 12, imgsrc: 'Hj53USePB1E'
    },
    { 
      id: '51a387b6-f2a3-431d-99e3-9fd7220ba363', name: 'Bread',
      category: 'food', price: 2.39, inStock: 90, imgsrc: 'rsWZ-P9FbQ4'
    },
    { 
      id: '103f2278-bd6e-4c7e-b9b3-166b24947616', name: 'Corn',
      category: 'food', price: 2.39, inStock: 30, imgsrc: 'Ja34SI--lfc'
    },
    { 
      id: '45b2ba12-de8c-446a-933f-c458b310bb67', name: 'Tacos',
      category: 'food', price: 4.39, inStock: 90, imgsrc: 'v-UlAEJTSVw'
    },
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