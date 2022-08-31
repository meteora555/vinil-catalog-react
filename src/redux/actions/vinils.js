import axios from 'axios';

export const fetchVinils = (category, sortBy) => (dispatch) => {
  axios
    .get(
      `http://localhost:3001/vinils?${category !== null ? `category=${category}` : ''}&_sort=${
        sortBy.type
      }&_order=${sortBy.order}`,
    )
    .then(({ data }) => {
      dispatch(setVinils(data));
    });
};

export const setVinils = (items) => ({
  type: 'SET_VINILS',
  payload: items,
});
