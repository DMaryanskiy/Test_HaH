import React, { useRef, useEffect } from 'react';
import EscapeOutside from "react-escape-outside"
import './Popup.css';


function Popup({onClose, isOpen}) {

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
                    <form className="popup__form">
                      <div className="popup__input-wrapper">
                        <p className="popup__input-title">Фамилия и имя</p>
                        <input type="text" className="popup__input" name="name"></input>
                      </div>
                      <div className="popup__input-wrapper">
                        <p className="popup__input-title">Номер телефона</p>
                        <input type="tel" className="popup__input" name="phone"></input>
                      </div>
                      <div className="popup__input-wrapper">
                        <p className="popup__input-title">Населенный пункт</p>
                        <input  type="text" className="popup__input" name="city"></input>
                      </div>
                      <div className="popup__input-wrapper">
                        <p className="popup__input-title">Адрес</p>
                        <input type="text" placeholder="Улица" className="popup__input" name="street"></input>
                      </div>
                      <div className="popup__input-wrapper_adress">
                        <input type="text" placeholder="Дом" name="house" className="popup__input popup__input_adress"></input>
                        <input type="text" placeholder="Квартира" name="flat" className=" popup__input popup__input_adress"></input>
                      </div>
                      <div className="popup__input-wrapper">
                        <p className="popup__input-title">Дата и время доставки</p>
                        <input type="datetime-local" className="popup__input" name="street"></input>
                      </div>
                      <div className="popup__input-wrapper">
                        <p className="popup__input-title">Комментарий</p>
                        <textarea name="comment" className="popup__input_area"></textarea>
                      </div>
                      <div className="popup__input-wrapper">
                        <p className="popup__input-title">Оплата</p>
                        <select className="popup__input_payment" name="payment">
                            <option value="Наличные">Наличные</option>
                            <option value="Картой">Картой</option>
                        </select>
                      </div>
                    </form>
                    <button className="popup__button" type="submit" >Заказать</button>
            </div>
        </div>
      </EscapeOutside>
    )      
}

export default Popup; 