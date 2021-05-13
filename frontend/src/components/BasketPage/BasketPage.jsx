import React from 'react';
import './BasketPage.css';
import help from '../../images/products/1.jpg'

function BasketPage() {
    return (
      <section className="basket-page">
          <h2 className="basket-page__title">Товаров в корзине: ##</h2>
          <div className="basket-page__content">
              <ul className="basket-page__products">
                  <li className="basket-page__product">
                      <img className="basket-page__picture" src={help}></img>
                      <div className="basket-page__product-info">
                        <h3 className="basket-page__product-title">Виноград</h3>
                        <p className="basket-page__product-description">Однажды весною, в час небывало жаркого заката, в Москве, на Патриарших прудах, появились два гражданина.</p>
                      </div>
                      <p className="basket-page__amount">2</p>
                      <p className="basket-page__product-price">3333 &#8381;</p>
                      <button className="basket-page__product-button"></button>
                  </li>
                  <li className="basket-page__product">
                      <img className="basket-page__picture" src={help}></img>
                        <div className="basket-page__product-info">
                          <h3 className="basket-page__product-title">Виноград</h3>
                          <p className="basket-page__product-description">Однажды весною, в час небывало жаркого заката, в Москве, на Патриарших прудах, появились два гражданина.</p>
                        </div>
                      <p className="basket-page__amount">2</p>
                      <p className="basket-page__product-price">3333 &#8381;</p>
                      <button className="basket-page__product-button"></button>
                  </li>
                  <li className="basket-page__product">
                      <img className="basket-page__picture" src={help}></img>
                        <div className="basket-page__product-info">
                          <h3 className="basket-page__product-title">Виноград</h3>
                          <p className="basket-page__product-description">Однажды весною, в час небывало жаркого заката, в Москве, на Патриарших прудах, появились два гражданина.</p>
                        </div>
                      <p className="basket-page__amount">2</p>
                      <p className="basket-page__product-price">3333 &#8381;</p>
                      <button className="basket-page__product-button"></button>
                  </li>
                  <li className="basket-page__product">
                      <img className="basket-page__picture" src={help}></img>
                        <div className="basket-page__product-info">
                          <h3 className="basket-page__product-title">Виноград</h3>
                          <p className="basket-page__product-description">Однажды весною, в час небывало жаркого заката, в Москве, на Патриарших прудах, появились два гражданина.</p>
                        </div>
                      <p className="basket-page__amount">2</p>
                      <p className="basket-page__product-price">3333 &#8381;</p>
                      <button className="basket-page__product-button"></button>
                  </li>
              </ul>
              <div className="basket-page__order">
                <p className="basket-page__order-price">Итого: 9999 &#8381;</p>
                <button className="basket-page__order-button">Оформить заказ</button>
              </div>
          </div>  
      </section>  
    )
}

export default BasketPage