import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar({loggedIn, handleLogout}) {
    console.log(loggedIn);
    return (
        <nav className="menu">
            <NavLink exact to="/" activeClassName="menu__link_active" className="menu__link">Список товаров</NavLink>
            <NavLink to="/favorites" activeClassName="menu__link_active" className="menu__link">Избранное</NavLink>
            <NavLink to="/aboutUs" activeClassName="menu__link_active" className="menu__link">О нас</NavLink>
            { loggedIn 
                ? <NavLink onClick={handleLogout} to="/login" activeClassName="menu__link_active" className="menu__link menu__link_login">Выйти</NavLink>
                : <NavLink to="/login" activeClassName="menu__link_active" className="menu__link menu__link_login">Войти</NavLink>
            }
        </nav>
    )
}

export default NavBar
