const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

// техническая функция для подсчета суммы, с помощью reduce пробегаем по всем обьектам, и суммируем все св-ва obj.price
const getTotalprice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_VINIL_CART': {
      // отображение текущих винилов
      const currentItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      //вводим переменную, для получения актуального обьекта с винилами
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentItems,
          totalPrice: getTotalprice(currentItems),
        },
      };

      //вычисляем кол-во всех винилов, получам новый массив и с помощью aplly и concat обьединяем в него.
      const allVinils = [].concat.apply([], Object.values(newItems));

      const totalPrice = getTotalprice(allVinils);
      console.log(allVinils);

      return {
        ...state,
        items: newItems,
        totalCount: allVinils.length,
        totalPrice,
      };
    }

    case 'CLEAR_ALL':
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };

    default:
      return state;
  }
};

export default cart;
