import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = ({onLogin}) => {

    const [data, setData] = React.useState({ email: '', password: '' });

    function handleChange(e) {
      const { name, value } = e.target
      setData({ ...data, [name]: value });
  }

    function handleSubmit(e) {
      e.preventDefault();
      onLogin(data);
    }

    return (
        <section className="login">
          <h2 className="login__title">Вход</h2>
          <form onSubmit={handleSubmit} className="login__form">
            <input onChange={handleChange} className="login__input" type="email" name="email" placeholder="Введите адрес электронной почты"/>
            <input onChange={handleChange} className="login__input" type="password" name="password" placeholder="Введите пароль"/>
            <button className="login__button" type="submit">Войти</button>
          </form>
          <p className="login__text">Еще не зарегистрированы? <Link to="/registration" className="login__link">Зарегистрироваться</Link></p>
        </section>
    )
}

export default Login
