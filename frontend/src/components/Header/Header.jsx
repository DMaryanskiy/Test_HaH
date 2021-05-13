import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import headerLogo from '../../images/header__logo.svg'
import magnifier from '../../images/header__magnifier.svg'

function Header() {
    return (
        <header className="header">
            <Link to='/basket-page' className="header__icons header__icons_basket"></Link>
            <div className="header__logo-wrapper">
                <img className="header__logo" src={headerLogo}/>
                <h1 className="header__logo-name">Рога и копыта</h1>
            </div>
            <a className="header__icons header__icons_menu"></a>
            <form className="header__form">
                <input className="header__form_field" name="s" placeholder="Искать продукт..." type="text" />
                <div className="header__button-wrapper">
                    <img className="header__form_button-picture" src={magnifier}/>
                    <button className="header__form_button" type="submit"></button>
                </div>  
            </form>
        </header>     
    )
}

export default Header

  
