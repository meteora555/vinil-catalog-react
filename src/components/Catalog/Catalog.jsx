import CatalogItem from './CatalogItem';
import Сategories from '../Categories';

function Catalog() {
  return (
    <div className="main">
      <div className="main__wrapper">
        <div className="catalog">
          <div className="container">
            <Сategories
              onClick={(name) => console.log(name)}
              items={[
                'Хип-хоп',
                'Регги',
                'Диско',
                'Поп',
                'Рок',
                'Электро',
                'Джаз',
                'Блюз',
                'Кантри',
                'Фолк',
              ]}
            />
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
