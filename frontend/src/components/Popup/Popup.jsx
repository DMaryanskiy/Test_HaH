import React, { useRef, useEffect } from 'react';
import EscapeOutside from "react-escape-outside"
import './Popup.css';


function Popup({onClose, isOpen, onSubmit}) {

    const [data, setData] = React.useState({ 
      name: '', 
      phone: '',
      city: '',
      street: '',
      house: '',
      flat: '',
      date: '',
      commentary: '',
      pay: '',
      products: ''
    });

    function handleChange(e) {
      const { name, value } = e.target
      setData({ ...data, [name]: value });
    }

    function handleSubmit(e) {
      e.preventDefault();
      onSubmit(data);
    }

    return (
      //Закрытие по escape
      <EscapeOutside onEscapeOutside={ onClose }>
        <div 
          className={`popup ${isOpen ? 'popup_opened' : ''}`}
          onClick={() => {
            // close modal when outside of modal is clicked
            onClose();
          }}
        >
            <div 
              className={`popup__container`}
              onClick={e => {
                // do not close modal if anything inside modal content is clicked
                e.stopPropagation();
              }}
            >
                <button type="button" className="popup__close-button" onClick={ onClose }></button>
                    <h2 className="popup__title">Оформление заказа</h2>
                    <form  onSubmit={handleSubmit} className="popup__form">
                      <div className="popup__input-wrapper">
                        <p className="popup__input-title">Фамилия и имя</p>
                        <input onChange={handleChange} type="text" className="popup__input" name="name"></input>
                      </div>
                      <div className="popup__input-wrapper">
                        <p className="popup__input-title">Номер телефона</p>
                        <input onChange={handleChange} type="tel" className="popup__input" name="phone"></input>
                      </div>
                      <div className="popup__input-wrapper">
                        <p className="popup__input-title">Населенный пункт</p>
                        <input onChange={handleChange} type="text" className="popup__input" name="city"></input>
                      </div>
                      <div className="popup__input-wrapper">
                        <p className="popup__input-title">Адрес</p>
                        <input onChange={handleChange} type="text" placeholder="Улица" className="popup__input" name="street"></input>
                      </div>
                      <div className="popup__input-wrapper_adress">
                        <input onChange={handleChange} type="text" placeholder="Дом" name="house" className="popup__input popup__input_adress"></input>
                        <input onChange={handleChange} type="text" placeholder="Квартира" name="flat" className=" popup__input popup__input_adress"></input>
                      </div>
                      <div className="popup__input-wrapper">
                        <p className="popup__input-title">Дата и время доставки</p>
                        <input onChange={handleChange} type="datetime-local" className="popup__input" name="date"></input>
                      </div>
                      <div className="popup__input-wrapper">
                        <p className="popup__input-title">Комментарий</p>
                        <textarea onChange={handleChange} name="commentary" className="popup__input_area"></textarea>
                      </div>
                      <div className="popup__input-wrapper">
                        <p className="popup__input-title">Оплата</p>
                        <select onChange={handleChange} className="popup__input_payment" name="pay">
                            <option value="Наличные">Наличные</option>
                            <option value="Картой">Картой</option>
                        </select>
                      </div>
                      <button className="popup__button" type="submit" >Заказать</button>
                    </form>
            </div>
        </div>
      </EscapeOutside>
    )      
}

export default Popup; 