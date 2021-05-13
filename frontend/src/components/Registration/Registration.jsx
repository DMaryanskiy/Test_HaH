import React from 'react';
import './Registration.css'

const Registration = () => {
    return (
        <section className="login registration">
          <h2 className="login__title">Регистрация</h2>
          <form className="login__form">
            <input className="login__input" type="text" name="name" placeholder="Имя и фамилия пользователя"/>
            <input className="login__input" type="text" name="number" placeholder="Номер телефона"/>
            <input className="login__input" type="email" name="registration-email" placeholder="Адрес электронной почты"/>
            <input className="login__input" type="password" name="registration-password" placeholder="Пароль"/>
            <input className="login__input" type="password" name="registration-repeat-password" placeholder="Повторите пароль"/>
          </form>
          <button className="login__button registration__button" type="submit">Зарегистрироваться</button>
        </section>
    )
}

export default Registration