import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <section className="login">
          <h2 className="login__title">Вход</h2>
          <form className="login__form">
            <input className="login__input" type="email" name="login-email" placeholder="Введите адрес электронной почты"/>
            <input className="login__input" type="password" name="login-password" placeholder="Введите пароль"/>
          </form>
          <button className="login__button" type="submit">Войти</button>
          <p className="login__text">Еще не зарегистрированы? <Link to="/registration" className="login__link">Зарегистрироваться</Link></p>
        </section>
    )
}

export default Login
