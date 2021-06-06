import React from 'react';
import { api } from '../../utils/Api';

function PurchaseItem ({product, user, handleDeleteCard}) {

  const changeInput = (e) => {
    e.preventDefault();
    let productPrice = 0
    if (e.target.value.length === 0 ) {
      e.target.value = 1
    }
    //TODO: на сервере прописать кол-во товара и подтянуть его на инпуты
    //productPrice = e.target.value*product.product.price;
  }

  const deleteCard = () => {
    handleDeleteCard(product.product)
    /*
    api.deleteProduct(user, product.product)
      .then((res)=> {
        console.log(res);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      }) */
  }

  return (
    <li className="basket-page__product">
        <img className="basket-page__picture" src={product.product.image}></img>
        <div className="basket-page__product-info">
          <h3 className="basket-page__product-title">{product.product.title}</h3>
          <p className="basket-page__product-description">{product.product.description}</p>
        </div>
        <input onChange={changeInput} min="1" value="1" type="number" className="basket-page__amount"></input>
        <p className="basket-page__product-price">{product.product.price} &#8381;</p>
        <button onClick={deleteCard} className="basket-page__product-button"></button>
    </li>
  )
}

export default PurchaseItem;