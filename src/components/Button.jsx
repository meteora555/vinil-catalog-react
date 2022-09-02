import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

function Button(props) {
  const { totalPrice, totalCount } = useSelector(({ cartReducer }) => ({
    totalPrice: cartReducer.totalPrice,
    totalCount: cartReducer.totalCount,
  }));
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
