import React from 'react';
import SortPopup from './SortPopup';

import { setSortBy } from '../redux/actions/filters';
import { useDispatch, useSelector } from 'react-redux';

const sortItems = [
  { name: 'популярности', type: 'rating' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'name' },
];

//Используем memo для того чтобы категории при получение новых данных с бека не делал повторный ререндер
const Сategories = React.memo(function Сategories({ items, onClickCategory, activeCategory }) {
  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);
  const { sortBy } = useSelector(({ filterReducer }) => filterReducer);
  const dispatch = useDispatch();

  return (
    <div className="catalog__filter">
      <div className="catalog__filter-item">
        <button
          onClick={() => onClickCategory(null)}
          className={activeCategory === null ? 'catalog__button-active' : 'catalog__button'}>
          Все
        </button>
      </div>
      {items &&
        items.map((name, index) => (
          <div key={`${name}__${index}`}>
            <button
              className={activeCategory === index ? 'catalog__button-active' : 'catalog__button'}
              onClick={() => onClickCategory(index)}>
              {name}
            </button>
          </div>
        ))}
      <SortPopup
        activeSortType={sortBy.type}
        items={sortItems}
        onClickSortType={onSelectSortType}
      />
    </div>
  );
});

export default Сategories;
