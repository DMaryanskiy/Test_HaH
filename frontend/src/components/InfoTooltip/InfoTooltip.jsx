import React from 'react';
import successfulAuth from '../../images/successful_auth.svg';
import unsuccessfulAuth from '../../images/unsuccessful_auth.svg'
import './InfoTooltip.css';

function InfoTooltip(props) {
    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className={`popup__container`}>
                <button type="button" className={`popup__close-button`} onClick={props.onClose}></button>
                <img className="popup__picture" src={props.auth ? successfulAuth : unsuccessfulAuth}></img>
                <p className="popup__text">{props.auth ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте еще раз.'}</p>
            </div>
        </div>
    )      
}

export default InfoTooltip; 