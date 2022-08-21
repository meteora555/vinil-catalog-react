import CatalogItem from './CatalogItem';
import Сategories from '../Categories';

function Catalog({ items }) {
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
                'Альтернатива',
                'Джаз',
                'Блюз',
                'Кантри',
                'Фолк',
              ]}
            />
            <h2 className="catalog__title">Все товары</h2>
            <div className="catalog__content">
              {items.map((obj) => (
                <CatalogItem key={obj.id} {...obj} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
