import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
      
      <footer class="footer">
          <p class="footer__author">&copy; 2021. Денис Марьянский, Лилия Володина</p>
          <ul class="footer__links">
            <li class="footer__links_element">
              <Link class="footer__link" exact to="/">Продукты</Link>
            </li>
            <li class="footer__links_element">
              <Link class="footer__link" to="/favourites">Избранное</Link>
            </li >
            <li class="footer__links_element">
              <Link class="footer__link" to="/aboutUs">О нас</Link>
            </li>
            <li class="footer__links_element">
              <Link class="footer__link" to="/login">Войти</Link>
            </li>
          </ul>
      </footer>    
    )
}

export default Footer