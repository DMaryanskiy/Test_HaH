import React from 'react';

function ProductItem ({product, onFavoriteClick, isFavorite}) {

  const handleFavoriteClick = () => {
    onFavoriteClick(product);
  }

  const productFavoriteButtonClassName = (`element__button-favourite ${isFavorite ? 'element__button-favourite_active' : 'element__button-favourite_inactive'}`);

  return (
    <section className="element">
        <img className="element__image" src={product.image}></img>
        <h3 className="element__name">{product.title}</h3>
        <p className="element__category">{product.category}</p>
        <p className="element__price">{product.price} &#8381;</p>
        <div className="element__buttons">
            <button className="element__button element__button_basket">добавить в корзину</button>
            <div className="element__button-wrapper">
                <button 
                    className={productFavoriteButtonClassName} 
                    onClick={handleFavoriteClick}
                ></button>
            </div>
        </div>    
    </section>
  )
}

export default ProductItem;