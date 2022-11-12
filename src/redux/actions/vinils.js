import axios from 'axios';

export const fetchVinils = (category, sortBy) => (dispatch) => {
  // Получение винилов с локального хоста json
  console.log(category);

  axios
    .get(
      `/vinils?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order
      }`,
    )
    .then(({ data }) => {
      dispatch(setVinils(data));
    });
  // Получение винилов с mockApi
  // axios.get(

  // ).then(({ data }) => {
  //   dispatch(setVinils(data));
  // });
};

export const setVinils = (items) => ({
  type: 'SET_VINILS',
  payload: items,
});
