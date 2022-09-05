export const addVinilToCart = (vinilObj) => ({
  type: 'ADD_VINIL_CART',
  payload: vinilObj,
});

export const clearAll = () => ({
  type: 'CLEAR_ALL',
});
