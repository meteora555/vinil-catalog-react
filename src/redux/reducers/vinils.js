const initialState = {
  items: [],
  isLoaded: false,
};

const vinils = (state = initialState, action) => {
  if (action.type === 'SET_VINILS') {
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    };
  }
  return state;
};

export default vinils;
