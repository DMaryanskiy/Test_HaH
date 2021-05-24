import React from 'react';
import { Link } from 'react-router-dom';
import './ProductMenu.css'

const ProductMenu = ({onMenuClick, isMenuOpen}) => {
 
    return (
        <div className={`product-menu ${isMenuOpen ? 'product-menu_active' : ''}`}>
            <button className={`product-menu__button product-menu__button_line ${isMenuOpen ? 'product-menu__button_is-active' : ''}`} onClick={onMenuClick}>
                <span>Menu</span>
            </button>
            <ul className={`product-menu__list ${isMenuOpen ? '' : 'product-menu__list_inactive'}`}> 
                <li className="product-menu__item">
                    <Link to="" className="product-menu__link">Все продукты</Link>  
                </li>
                <li className="product-menu__item">
                    <Link to="/?category=Овощи" className="product-menu__link">Овощи</Link>  
                </li>
                <li className="product-menu__item">
                    <Link to="/?category=Фрукты" className="product-menu__link">Фрукты</Link>  
                </li>
                <li className="product-menu__item">
                    <Link to="/?category=Ягоды" className="product-menu__link">Ягоды</Link>  
                </li>
                <li className="product-menu__item">
                    <Link to="/?category=Рыба" className="product-menu__link">Рыба</Link>  
                </li>
                <li className="product-menu__item">
                    <Link to="/?category=Мясо" className="product-menu__link">Мясо</Link>  
                </li>
                <li className="product-menu__item">
                    <Link to="/?category=Морепродукты" className="product-menu__link">Морепродукты</Link>  
                </li>
                <li className="product-menu__item">
                    <Link to="/?category=Молочная%D20продукция" className="product-menu__link">Молочная продукция</Link>  
                </li>
            </ul>
        </div>
    )
}


export default ProductMenu
