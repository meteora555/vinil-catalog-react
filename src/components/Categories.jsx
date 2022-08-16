import React from 'react';
import SortPopup from './SortPopup';

function Сategories({ items, onClick }) {
  const [activeItem, setActiveItem] = React.useState(null);
  const onSelectItem = (index) => {
    setActiveItem(index);
  };
  return (
    <div className="catalog__filter">
      <div className="catalog__filter-item">
        <button
          onClick={() => onSelectItem(null)}
          className={activeItem === null ? 'catalog__button-active' : 'catalog__button'}>
          Все
        </button>
      </div>
      {items &&
        items.map((name, index) => (
          <div key={`${name}__${index}`}>
            <button
              className={activeItem === index ? 'catalog__button-active' : 'catalog__button'}
              onClick={() => onSelectItem(index)}>
              {name}
            </button>
          </div>
        ))}
      <SortPopup />
    </div>
  );
}

export default Сategories;
