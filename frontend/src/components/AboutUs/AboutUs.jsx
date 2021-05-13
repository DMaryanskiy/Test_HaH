import React from 'react';
import './AboutUs.css';
import call from '../../images/uil_outgoing-call.svg';
import email from '../../images/line-md_email.svg';

function AboutUs() {
    return (
        <section className="about-us">
            <h1 className="about-us__title">О нас:</h1> 
            <p className="about-us__text">Мы, Денис Марьянский и Володина Лиля, - команда разработчиков. В рамках дисциплины "Проектный практикум" перед нами стала
                задача разработать интернет-магазин //////////////////////////////////////////////////////////////////////////////////
                ////////////////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////////////////////
                МНОГО ТЕКСТА ОАОАООАОАОАОА ...............................................................
                ..............................000000000000000000000000000000)))))))))))))))))))
                )))))))))))))))))))))))))))))))))))
                ))))))))))))))))))))))))))))))))))))))))))))))))))))
                ))))))))))0000111111111111111111111111111 </p>  
            <div className="about-us__contacts">
                <div className="about-us__wrapper">
                    <img className="about-us__icon" src={call}/>
                    <p className="about-us__inner-text">8 (000) 000 00 00</p>
                </div>
                <div className="about-us__wrapper">
                    <img className="about-us__icon" src={email}/>
                    <p className="about-us__inner-text">lalalalala@mail.ru</p>
                </div>
            </div>
        </ section>
    )
}

export default AboutUs