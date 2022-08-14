import telegram from '../assets/images/icons/telegram.svg';
import facebook from '../assets/images/icons/facebook.svg';
import instagram from '../assets/images/icons/instagram.svg';
import google from '../assets/images/icons/google.svg';
import React from 'react';

function Footer () {
    return(
        <footer className="footer">
        <div className="footer__advice">
           <p className="footer__advice-text">
              Зарегестрированные пользователи получают скидку 10% на первую покупку!
           </p>
        </div>
        <div className="footer__signup">
           <form className="footer__form">
              <input className="footer__form-input" type="text" placeholder="Имя"></input>
              <input className="footer__form-input" type="text" placeholder="email"></input>
              <button action="#"className="footer__form-button">Отправить</button>
           </form>
        </div>
        <div className="footer__info">
           <div className="footer__about">
              <h2 className="footer__about-title">
                 о Vinil Store
              </h2>
              <p className="footer__about-text">
                 Основанный в 2010 году, лучший музыкальный магазин  в старом добром интернете. Vinil Store возник как оазис для любителей музыки, которые не могут найти свою последнюю дозу на главной улице. Специализируясь на лучших новых группах и сливках известных альтернативных исполнителей, наш магазин стал одним из ведущих музыкальных онлайн-ритейлеров в России. Представлены эксклюзивные виниловые пластинки,кассеты, компакт диски и отпечатки с автографами ограниченным тиражом.
              </p>
              <p className="footer__about-copyright">
                 © Copyright Digital Stores
              </p>
           </div>
           <div className="footer__menu">
              <ul className="footer__list">
                 <li className="footer__item"><a className="footer__item-link" href="_blank" >Важная информация</a></li>
                 <li className="footer__item"><a className="footer__item-link" href="_blank" >Помощь</a></li>
                 <li className="footer__item"><a className="footer__item-link" href="_blank" >Доставка</a></li>
                 <li className="footer__item"><a className="footer__item-link" href="_blank" >Наша команда</a></li>
              </ul>
           </div>
           <div className="footer__social">
              <ul className="footer__social-list">
                 <li className="footer__social-item">
                    <a  className="footer__social-link" href="_blank"> Telegram
                       <img className="footer__social-img" src= {telegram} alt="telegram" ></img>
                    </a>
                 </li>
                 <li className="footer__social-item">
                    <a  className="footer__social-link" href="_blank"> Instagram
                       <img className="footer__social-img" src= {instagram} alt="instagram" ></img>
                    </a>
                 </li>
                 <li className="footer__social-item">
                    <a  className="footer__social-link" href="_blank"> Facebook
                       <img className="footer__social-img" src= {facebook} alt="facebook" ></img>
                    </a>
                 </li>
                 <li className="footer__social-item">
                    <a  className="footer__social-link" href="_blank"> Google+
                       <img className="footer__social-img" src= {google} alt="google" ></img>
                    </a>
                 </li>
              </ul>
           </div>
        </div>
  </footer>
    );
}

export default Footer;