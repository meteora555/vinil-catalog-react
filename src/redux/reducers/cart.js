const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_VINIL_CART': {
      //вводим переменную, для получения актуального обьекта с винилами
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };
      //вычисляем кол-во всех винилов, получам новый массив и с помощью aplly и concat обьединяем в него.
      const allVinils = [].concat.apply([], Object.values(newItems));
      //вычисляем сумму, с помощью reduce пробегаем по всем обьектам, и суммируем все св-ва onb.price
      const totalPrice = allVinils.reduce((sum, obj) => obj.price + sum, 0);
      return {
        ...state,
        items: newItems,
        totalCount: allVinils.length,
        totalPrice: totalPrice,
      };
    }
    default:
      return state;
  }
};

export default cart;
