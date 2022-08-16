import { Link } from 'react-router-dom';

function Button(props) {
  return (
    <div>
      <Link to={'/cart'}>
        <button className="header__card-button">
          <span>
            <b>0</b> Товаров
          </span>
          <span>
            <b>0</b> ₽
          </span>
        </button>
      </Link>
    </div>
  );
}

export default Button;
