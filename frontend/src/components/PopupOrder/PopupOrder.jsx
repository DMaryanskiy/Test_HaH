import React from 'react';
import successful from '../../images/successful_auth.svg';
import unsuccessful from '../../images/unsuccessful_auth.svg'

function PopupOrder (props) {
    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className={`popup__container`}>
                <button type="button" className={`popup__close-button`} onClick={props.onClose}></button>
                <img className="popup__picture" src={props.isOrder ? successful: unsuccessful}></img>
                <p className="popup__text">{props.isOrder ? 'Ваш заказ оформлен! Ждите звонка от курьера' : 'Что-то пошло не так! Попробуйте еще раз.'}</p>
            </div>
        </div>
    )      
}

export default PopupOrder; 