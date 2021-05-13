import React from 'react';
import axios from 'axios';
import './Product.css';
import help from '../../images/products/1.jpg'
import favourite from '../../images/favourite.svg'
import favouriteActive from '../../images/favourite_active.svg'

class Product extends React.Component {
    constructor(props){
        super(props);
        this._onCardClick = props.onCardClick;
    }
    
    state = {
        products:[]
    }

    componentDidMount(){
        if (window.location.href == "http://localhost:3000/") {
            axios.get("http://127.0.0.1:8000")
            .then(res =>{
                this.setState({
                    products:res.data
                })
            })
        } else {
            axios.get("http://127.0.0.1:8000/favourites")
            .then(res =>{
                this.setState({
                    products:res.data
                })
                console.log(res.data);
            })
        }
    }

    render() {
        if (window.location.href == "http://localhost:3000/") {
            return (
                <section className="elements"> 
                    {this.state.products.map(product => ( 
                    <section className="element" >
                        <img className="element__image" src={product.image}></img>
                        <h3 className="element__name">{product.title}</h3>
                        <p className="element__category">{product.category}</p>
                        <p className="element__price">{product.price} &#8381;</p>
                        <div className="element__buttons">
                            <button className="element__button element__button_basket">добавить в корзину</button>
                            <div className="element__button-wrapper">
                                <button className="element__button_favourite"></button>
                            </div>
                        </div>    
                    </section>
                    ))}
                </section>
            )
        } else {
            return (
                <section className="elements"> 
                    {this.state.products.map(fav => ( 
                    <section className="element" >
                        <img className="element__image" src={fav.product.image}></img>
                        <h3 className="element__name">{fav.product.title}</h3>
                        <p className="element__category">{fav.product.category}</p>
                        <p className="element__price">{fav.product.price} &#8381;</p>
                        <div className="element__buttons">
                            <button className="element__button element__button_basket">добавить в корзину</button>
                            <div className="element__button-wrapper">
                                <button className="element__button_favourite"></button>
                            </div>
                        </div>    
                    </section>
                    ))}
                </section>
            )
        }
    }
}

export default Product;