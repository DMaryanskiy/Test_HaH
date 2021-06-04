import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { api } from '../../utils/Api';

function ProductItem ({product}) {

  const [isFavorite, setIsFavorite] = React.useState(false);
  const [isProductAdded, setIsProductAdded] = React.useState(false);
  const currentUser = React.useContext(CurrentUserContext);

  const handleFavoriteClick = () => {
    isFavorite 
    ? setIsFavorite(false)
    : setIsFavorite(true);
  }

  const handleButtonClick = () => {
    if (isProductAdded) {
      setIsProductAdded(false);
      api.deleteProduct(currentUser, product)
        .then(() => {
          console.log('delete');
        })
        .catch(err => console.log(err));
    } else {
      setIsProductAdded(true);
      api.buyProduct(currentUser, product)
        .then(() => {
          console.log('add');
        })
        .catch(err => console.log(err));
      } 
  } 

  const productFavoriteButtonClassName = (`element__button-favourite ${isFavorite ? 'element__button-favourite_active' : 'element__button-favourite_inactive'}`);
  const buttonText = (`${isProductAdded ? 'Удалить' : 'Добавить в корзину'}`);

  return (
    <section className="element">
        <img className="element__image" src={product.image} alt={product.title}></img>
        <h3 className="element__name">{product.title}</h3>
        <p className="element__category">{product.category}</p>
        <p className="element__price">{product.price} &#8381;</p>
        <div className="element__buttons"> 
            <button className="element__button element__button_basket" onClick={handleButtonClick}>{buttonText}</button>
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