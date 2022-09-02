import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

function CatalogItem({ id, name, imageUrl, price, rating, types, onClickAddVinil }) {
  //Создаем функциональный компонент, в пропсы которого, мы прокинули обьект obj из компонента Catalog, с помощью деструкторизации вытаскиваем известные нам свойства.
  const availableTypes = ['Vinil', 'CD', 'Бокс сет'];

  // Создаем хук useState для отслеживания состояния типа, и в зависемости от того, сколько элементов в obj.type мы создаем функцию для установки иднекса и в дальнейшем на этот индекс с помощью библиотеки classNames устанавливаем класс активности 'active' или 'disabled'
  const [activeType, setActiveType] = React.useState(types[0]);
  const onSelectType = (index) => {
    setActiveType(index);
  };

  // Создаем константу для хранения обьекта выбранного винила, для дальнейшей передачи его в state
  const onAddVinil = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      type: availableTypes[activeType],
    };
    onClickAddVinil(obj);
  };

  return (
    <div className="CatalogItem">
      <div className="vinil__item">
        <img className="vinil__item-img" src={imageUrl} alt=""></img>
        <h4 className="vinil__item-title"> {name}</h4>
        <div className="vinil__item-rating">Рейтинг критиков: {rating}</div>
        <div className="vinil__selector">
          <ul>
            {/* При рендере пробегаем методом по полученному обьекту, и рендерим карты товаров на странице */}
            {availableTypes.map((availableTypes, index) => (
              <li
                key={availableTypes}
                onClick={() => onSelectType(index)}
                // в зависемости от итндекса добавляем определенные классы
                className={classNames({
                  active: activeType === index,
                  disabled: !types.includes(index),
                })}>
                {availableTypes}
              </li>
            ))}
          </ul>
        </div>
        <div className="vinil__item-bottom">
          <div className="vinil__item-price"> {price} ₽</div>

          <button onClick={onAddVinil} className="vinil__item-addbtn">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="black"
              />
            </svg>
            <span>Добавить</span>
            <i>1</i>
          </button>
        </div>
      </div>
    </div>
  );
}

CatalogItem.propTypes = {
  name: propTypes.string.isRequired,
  imageUrl: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  types: propTypes.arrayOf(propTypes.number).isRequired,
};

export default CatalogItem;
