import CatalogItem from './CatalogItem';
import Сategories from '../Categories';
import CatalogLoading from './CatalogLoading';

import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchVinils } from '../../redux/actions/vinils';
import { setCategory } from '../../redux/actions/filters';
import { addVinilToCart } from '../../redux/actions/cart';

const categoryNames = [
  'Хип-хоп',
  'Регги',
  'Диско',
  'Поп',
  'Рок',
  'Альтернатива',
  'Джаз',
  'Блюз',
  'Кантри',
  'Фолк',
];

function Catalog() {
  //Получаем данные с redux и рендерим их на странице сначала наш обьект с винилами, а также процесс загрузки
  const items = useSelector(({ vinilReducer }) => vinilReducer.items);
  const isLoaded = useSelector(({ vinilReducer }) => vinilReducer.isLoaded);
  const { category } = useSelector(({ filterReducer }) => filterReducer);
  const { sortBy } = useSelector(({ filterReducer }) => filterReducer);
  const dispatch = useDispatch();
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  //получаем данные через dispatch от redux, и выполняем action
  React.useEffect(() => {
    dispatch(fetchVinils(category, sortBy));
  }, [category, sortBy]);

  const handelAddVinil = (obj) => {
    dispatch(addVinilToCart(obj));
  };
  return (
    <div className="main">
      <div className="main__wrapper">
        <div className="catalog">
          <div className="container">
            <Сategories
              activeCategory={category}
              onClickCategory={onSelectCategory}
              items={categoryNames}
            />
            <h2 className="catalog__title">Все товары</h2>
            <div className="catalog__content">
              {/* указываем состояние, если данные пришли то рендорим наши винилы, если нет то рендерим массив из 12 компонетнов процесса загрузки */}
              {isLoaded
                ? items.map((obj) => (
                    <CatalogItem onClickAddVinil={handelAddVinil} key={obj.id} {...obj} />
                  ))
                : Array(12)
                    .fill(0)
                    .map((_, index) => <CatalogLoading key={index} />)}
              {}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
