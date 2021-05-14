import React from 'react';
import axios from 'axios';
import ProductItem from '../ProductItem/ProductItem';
import './Product.css';

const Product = () => {

    const [products, setProducts] = React.useState([]);
    const [isFavorite, setIsFavorite] = React.useState(false);


    const handleFavoriteClick = (product) => {
        const currentState = isFavorite;
        setIsFavorite(!currentState);
    }

    React.useEffect(() => {
        if (window.location.href == "http://localhost:3000/") {
            axios.get("http://127.0.0.1:8000")
            .then(res =>{
                setProducts(res.data);
            })
        } else {
            axios.get("http://127.0.0.1:8000/favourites")
            .then(res =>{
                setProducts(res.data);
            })
        }
    }, []); 


    if (window.location.href == "http://localhost:3000/") {
        return (
            <section className="elements"> 
                {products.map(product => ( 
                    <ProductItem product={product} onFavoriteClick={handleFavoriteClick} isFavorite={isFavorite}></ProductItem>
                ))}
            </section>
        )
    }

        /*
        if (window.location.href == "http://localhost:3000/") {
            return (
                <section className="elements"> 
                    {this.state.products.map(product => ( 
                    <section className="element" onClick={this._onCardClick}>
                        <img className="element__image" src={product.image}></img>
                        <h3 className="element__name">{product.title}</h3>
                        <p className="element__category">{product.category}</p>
                        <p className="element__price">{product.price} &#8381;</p>
                        <div className="element__buttons">
                            <button className="element__button element__button_basket">добавить в корзину</button>
                            <div className="element__button-wrapper">
                                <button 
                                    className={`element__button-favourite ${this.state.isFavorite ? 'element__button-favourite_active' : 'element__button-favourite_inactive'}`} 
                                    onClick={this._handleFavoriteClick}
                                ></button>
                            </div>
                        </div>    
                    </section>
                    ))}
                </section>
            )
        }  else {
            return (
                <section className="elements"> 
                    {this.state.products.map(fav => ( 
                    <section className="element" onClick={this._onCardClick}>
                        <img className="element__image" src={fav.product.image}></img>
                        <h3 className="element__name">{fav.product.title}</h3>
                        <p className="element__category">{fav.product.category}</p>
                        <p className="element__price">{fav.product.price} &#8381;</p>
                        <div className="element__buttons">
                            <button className="element__button element__button_basket">добавить в корзину</button>
                            <div className="element__button-wrapper">
                                <button 
                                    className={`element__button-favourite ${this.state.isFavorite ? 'element__button-favourite_active' : 'element__button-favourite_inactive'}`} 
                                    onClick={this._handleFavoriteClick}
                                ></button>
                            </div>
                        </div>    
                    </section>
                    ))}
                </section>
            )
        } */
}

export default Product;