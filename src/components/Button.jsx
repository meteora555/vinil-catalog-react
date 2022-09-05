import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

function Button() {
  const { totalPrice, totalCount } = useSelector(({ cartReducer }) => cartReducer);
  console.log(totalCount, totalPrice);
  return (
    <div>
      <Link to={'/cart'}>
        <button className="header__card-button">
          <span>
            <b>{totalCount}</b> Товаров
          </span>
          <span>
            <b>{totalPrice}</b> ₽
          </span>
        </button>
      </Link>
    </div>
  );
}

export default Button;
