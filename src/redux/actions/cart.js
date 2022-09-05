export const addVinilToCart = (vinilObj) => ({
  type: 'ADD_VINIL_CART',
  payload: vinilObj,
});

export const clearAll = () => ({
  type: 'CLEAR_ALL',
});

export const removeCartItem = (id) => ({
  type: 'REMOVE_CART_ITEM',
  payload: id,
});

export const plusCartItem = (id) => ({
  type: 'PLUS_CART_ITEM',
  payload: id,
});

export const minusCartItem = (id) => ({
  type: 'MINUS_CART_ITEM',
  payload: id,
});
