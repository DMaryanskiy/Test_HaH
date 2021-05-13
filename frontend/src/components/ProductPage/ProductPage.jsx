import React from 'react';
import './ProductPage.css';
import help from '../../images/products/1.jpg';

const ProductPage = () => {
    return (
        <section className="product-page">
          <div>
            <img className="product-page__image" src={help}></img>
            <p className="product-page__amount-text product-page__text">Цена за 1 шт:</p>
            <p className="product-page__price">500 &#8381;</p>
          </div>
          <div className="product-page__info">
              <div>
                <h2 className="product-page__title">Виноград</h2>
                <button className="product-page__favourite"></button>
              </div>
              <p className="product-page__description">Однажды весною, в час небывало жаркого заката, в Москве, на Патриарших прудах, появились два гражданина. Первый из них, одетый в летнюю серенькую пару, был маленького роста, упитан, лыс, свою приличную шляпу пирожком нес в руке, а на хорошо выбритом лице его помещались сверхъестественных размеров очки в черной роговой оправе. Второй – плечистый, рыжеватый, вихрастый молодой человек в заломленной на затылок клетчатой кепке – был в ковбойке, жеваных белых брюках и в черных тапочках.</p>
              <div className="product-page__wrapper">
                <div>
                  <p className="product-page__amount-text">Количество:</p>
                  <input className="product-page__input" type="number"/>
                </div>
                <button type="submit" className="element__button element__button_product-page">Добавить в корзину</button>
              </div>
          </div>
        </section>
    )
}

export default ProductPage