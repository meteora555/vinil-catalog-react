

import logoPng from '../assets/images/icons/logo.png';
import search from '../assets/images/icons/search.svg';
import navSvg from '../assets/images/icons/icon_menu.svg';
import basket from '../assets/images/icons/basket.svg';
import React from 'react';


import Button from './Button';



function Header() {

    const test = () => {
      alert("Hello");
    };

    return(
        <div className="Header">
            <div className="wrapper">
              <header className="header">
              <div className="header__inner">
                  <div className="header__logo">
                    <a className="header__logo-link" href="_blank">
                        <img className="header__logo-img" src={logoPng} alt="logo"></img>
                    </a>
                  </div>
                  <div className="header__search">
                    <input className="header__search-input" type="text" placeholder="Поиск..."></input>
                    <button className="header__search-button">
                        <img className="header__search-button-img" src={search} alt="search"></img>
                    </button>
                  </div>
                  <div className="header__nav">
                    <button className="header__nav">
                        <img  className="header__nav-img" src= {navSvg} alt="nav"></img>
                    </button>
                  </div>
                  <Button onClick={ test } />
                  <div className="header__basket">
                    <a className="header__basket-link" href="/card.html">
                        <img className="header__basket-img" src= {basket} alt="basket"></img>
                    </a>
                  </div>
              </div>
              <div className="breadcrumbs">
                  <div className="container">
                    <ul className="breadcrumbs__list">
                        <li className="breadcrumbs__item">Предзаказ</li>
                        <li className="breadcrumbs__item">Новые релизы</li>
                        <li className="breadcrumbs__item">Жанры</li>
                        <li className="breadcrumbs__item">Выбор критиков</li>
                        <li className="breadcrumbs__item">Лучшие '22</li>
                        <li className="breadcrumbs__item">Платиновый статус</li>
                        <li className="breadcrumbs__item">Распродажа</li>
                    </ul>
                  </div>
              </div>
            </header>
         </div>
        </div>
 );
}

export default Header;