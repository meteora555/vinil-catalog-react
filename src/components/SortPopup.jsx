import React from 'react';

function SortPopup({ items }) {
  // Используем useState для определения  показа модального окна сортировки
  const [visiblePopup, setVisiblePopup] = React.useState(false);

  //Используем useState для определения состояния окна сортировки
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index);
    setVisiblePopup(false);
  };
  const activeLavel = items[activeItem];

  // Создаем ссылку для дом элемента сортировки
  const sortRef = React.useRef();

  //для переключения показать/скрыть модального окна сортировки
  const toogleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  //переменная для определения клика вне области модального окна
  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  // создаем обраотчик событий на body для отслеживание клика
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);
  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          className={visiblePopup ? 'rotated' : ''}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={toogleVisiblePopup}>{activeLavel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {items &&
              items.map((name, index) => (
                <li
                  key={`${name}__${index}`}
                  className={activeItem === index ? 'active__item' : ''}
                  onClick={() => onSelectItem(index)}>
                  {name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SortPopup;
