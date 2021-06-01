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
}

export default BasketPage