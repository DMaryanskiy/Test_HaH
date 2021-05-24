import React from 'react';
import './Registration.css'
import { Link } from 'react-router-dom';

    

const Registration = ({onRegister}) => {

  const [data, setData] = React.useState({ 
    name: '', 
    number: '', 
    email: '',
    password: '',
    "repeat-password": ''
  });

    function handleSubmit(e){
      e.preventDefault()
      if (data['password'] === data['repeat-password']) {
        console.log('РЕГИСТРАЦИЯ');
        onRegister(data);
      } else {
        console.log('НЕ РЕГИСТРАЦИЯ')
      }

    } 

    function handleChange(e) {
      const {name, value} = e.target;
      setData({ ...data, [name]: value });
    }

    return (
        <section className="login registration">
          <h2 className="login__title">Регистрация</h2>
          <form className="login__form" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="login__input" type="text" name="name" placeholder="Имя пользователя"/>
            <input onChange={handleChange} className="login__input" type="text" name="number" placeholder="Номер телефона"/>
            <input onChange={handleChange} className="login__input" type="email" name="email" placeholder="Адрес электронной почты"/>
            <input onChange={handleChange} className="login__input" type="password" name="password" placeholder="Пароль"/>
            <input onChange={handleChange} className="login__input" type="password" name="repeat-password" placeholder="Повторите пароль"/>
            <button className="login__button registration__button" type="submit">Зарегистрироваться</button>
          </form>
        </section>
    )
}

export default Registration