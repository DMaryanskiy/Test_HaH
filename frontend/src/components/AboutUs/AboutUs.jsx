import React from 'react';
import './AboutUs.css';
import call from '../../images/uil_outgoing-call.svg';
import email from '../../images/line-md_email.svg';

function AboutUs() {
    return (
        <section className="about-us">
            <h1 className="about-us__title">О нас:</h1> 
            <p className="about-us__text"> Данный проект создан студентами второго курса Московского Авиационного Института - Марьянским Денисом
            и Володиной Лилией. Предприятие розничной торговли ООО «Рога и копыта» осуществляет торговлю натуральными продуктами питания.</p>  
            <div className="about-us__contacts">
                <div className="about-us__wrapper">
                    <img className="about-us__icon" src={call}/>
                    <p className="about-us__inner-text">8 (000) 000 00 00</p>
                </div>
                <div className="about-us__wrapper">
                    <img className="about-us__icon" src={email}/>
                    <p className="about-us__inner-text">Project@mail.ru</p>
                </div>
            </div>
        </ section>
    )
}

export default AboutUs