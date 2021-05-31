import React from 'react';
import { api } from '../../utils/Api';
import './BasketPage.css';
import PurchaseItem from '../PurchaseItem/PurchaseItem';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function BasketPage({onClick, loggedIn}) {

  const currentUser = React.useContext(CurrentUserContext);
  const [purchase, setPurchase] = React.useState([]);
  const productAmount = purchase.length;
  let orderPrice = 0;

  React.useEffect(() => {
      if (loggedIn) {
        api.getPurchase(currentUser.username)
        .then(data => {
          setPurchase(data);
        })
      }
  }, []);

  const calculateOrderPrice = () => {
    purchase.forEach(element => {
      orderPrice += element.product.price;
    }); 
  } 

  calculateOrderPrice();

    return (
        <section className="basket-page">
            <h2 className="basket-page__title">Товаров в корзине: {productAmount}</h2>
            <div className="basket-page__content">
                <ul className="basket-page__products">
                    {purchase.map(product => ( 
                        <PurchaseItem product={product} key={product.id}></PurchaseItem>
                    ))}
                </ul>
                <div className="basket-page__order">
                    <p className="basket-page__order-price">Итого: {orderPrice} &#8381;</p>
                    <button onClick={onClick} className="basket-page__order-button">Оформить заказ</button>
              </div>
            </div>
        </section>
    )

              /*
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
                <button onClick={onClick} className="basket-page__order-button">Оформить заказ</button>
              </div>
          </div>  
      </section>  
    ) */
}

export default BasketPage