import React from 'react';
import './Registration.css'
    

const Registration = ({onRegister}) => {

  const [data, setData] = React.useState({ 
    username: '', 
    phone: '', 
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
            <input onChange={handleChange} className="login__input" type="text" name="username" placeholder="Имя пользователя" value={data.username} required/>
            <input onChange={handleChange} className="login__input" type="text" name="phone" placeholder="Номер телефона" value={data.numberl}/>
            <input onChange={handleChange} className="login__input" type="email" name="email" placeholder="Адрес электронной почты" value={data.email} required/>
            <input onChange={handleChange} className="login__input" type="password" name="password" placeholder="Пароль" value={data.password} required/>
            <input onChange={handleChange} className="login__input" type="password" name="repeat-password" placeholder="Повторите пароль" value={data['repeat-password']} required/>
            <button className="login__button registration__button" type="submit">Зарегистрироваться</button>
          </form>
        </section>
    )
}

export default Registration