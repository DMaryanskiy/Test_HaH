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
        } else if (window.location.href == "http://localhost:3000/?category=%D0%9E%D0%B2%D0%BE%D1%89%D0%B8") {
            axios.get("http://127.0.0.1:8000/?category=Овощи")
            .then(res =>{
                setProducts(res.data);
            })
        } else {
            axios.get("http://127.0.0.1:8000/?category=Фрукты")
            .then(res =>{
                setProducts(res.data);
            })
        }

    }, [/*products*/]); //TODO: пофиксить зацикливание

        return (
            <section className="elements"> 
                {products.map(product => ( 
                    <ProductItem product={product} key={product.id} onFavoriteClick={handleFavoriteClick} isFavorite={isFavorite}></ProductItem>
                ))}
            </section>
        )
}

export default Product;