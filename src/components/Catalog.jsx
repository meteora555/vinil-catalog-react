import CatalogItem from "./CatalogItem";


function Catalog () {
    return(
        <div className="main">
            <div className="main__wrapper">
                <div className="catalog">
                    <div className="container">
                            <div className="catalog__filter">
                                <div className="catalog__filter-item">
                                    <button className="catalog__button catalog__button-active">Все</button>
                                </div>
                                <div className="catalog__filter-item">
                                    <button className="catalog__button">Хип-хоп</button>
                                </div>
                                <div className="catalog__filter-item">
                                    <button className="catalog__button">Регги</button>
                                </div>
                                <div className="catalog__filter-item">
                                    <button className="catalog__button">Диско</button>
                                </div>
                                <div className="catalog__filter-item">
                                    <button className="catalog__button">Поп</button>
                                </div>
                                <div className="catalog__filter-item">
                                    <button className="catalog__button">Рок</button>
                                </div>
                                <div className="catalog__filter-item">
                                    <button className="catalog__button">Электро</button>
                                </div>
                                <div className="catalog__filter-item">
                                    <button className="catalog__button">Джаз</button>
                                </div>
                                <div className="catalog__filter-item">
                                    <button className="catalog__button">Блюз</button>
                                </div>
                                <div className="catalog__filter-item">
                                    <button className="catalog__button">Кантри</button>
                                </div>
                                <div className="catalog__filter-item">
                                    <button className="catalog__button">Фолк</button>
                                </div>
                                <div className="sort">
                                    <div className="sort__label">
                                    <svg
                                        width="10"
                                        height="6"
                                        viewBox="0 0 10 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                                        fill="#2C2C2C"
                                        />
                                    </svg>
                                    <b>Сортировка по:</b>
                                    <span>популярности</span>
                                    </div>
                                    <div className="sort__popup">
                                    <ul>
                                        <li className="active__item">популярности</li>
                                        <li>цене</li>
                                        <li>алфавиту</li>
                                    </ul>
                                    </div>
                                
                                </div>
                            </div>
                            <h2 className="catalog__title">Все товары</h2>
                            <div className="catalog__content">
                                <CatalogItem />
                                <CatalogItem />
                                <CatalogItem />
                                <CatalogItem />
                            </div>              
                    </div>
                </div>
            </div>
        </div>
 );
}

export default Catalog;