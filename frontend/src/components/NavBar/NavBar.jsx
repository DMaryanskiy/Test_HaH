import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    return (
        <nav className="menu">
            <NavLink exact to="/" activeClassName="menu__link_active" className="menu__link">Список товаров</NavLink>
            <NavLink to="/favorites" activeClassName="menu__link_active" className="menu__link">Избранное</NavLink>
            <NavLink to="/aboutUs" activeClassName="menu__link_active" className="menu__link">О нас</NavLink>
            <NavLink to="/login" activeClassName="menu__link_active" className="menu__link menu__link_login">Войти</NavLink>
        </nav>
    )
}

export default NavBar
