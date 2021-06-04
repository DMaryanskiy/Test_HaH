import React from 'react';
import axios from 'axios';
import ProductItem from '../ProductItem/ProductItem';
import './Product.css';

const Product = () => {

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        if (window.location.href === "http://localhost:3000/") {
            axios.get("http://127.0.0.1:8000")
            .then(res =>{
                setProducts(res.data);
            })
        } else if (window.location.href === "http://localhost:3000/?category=%D0%9E%D0%B2%D0%BE%D1%89%D0%B8") {
            axios.get("http://127.0.0.1:8000/?category=Овощи")
            .then(res =>{
                setProducts(res.data);
            })
        } else if (window.location.href === "http://localhost:3000/?category=%D0%A4%D1%80%D1%83%D0%BA%D1%82%D1%8B") {
            axios.get("http://127.0.0.1:8000/?category=Фрукты")
            .then(res =>{
                setProducts(res.data);
            })
        } else if (window.location.href === "http://localhost:3000/?category=%D0%AF%D0%B3%D0%BE%D0%B4%D1%8B") {
            axios.get("http://127.0.0.1:8000/?category=Ягоды")
            .then(res =>{
                setProducts(res.data);
            })
        } else if (window.location.href === "http://localhost:3000/?category=%D0%A0%D1%8B%D0%B1%D0%B0") {
            axios.get("http://127.0.0.1:8000/?category=Рыба")
            .then(res =>{
                setProducts(res.data);
            })
        } else if (window.location.href === "http://localhost:3000/?category=%D0%9C%D1%8F%D1%81%D0%BE") {
            axios.get("http://127.0.0.1:8000/?category=Мясо")
            .then(res =>{
                setProducts(res.data);
            })
        } else if (window.location.href === "http://localhost:3000/?category=%D0%9C%D0%BE%D1%80%D0%B5%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D1%8B") {
            axios.get("http://127.0.0.1:8000/?category=Морепродукты")
            .then(res =>{
                setProducts(res.data);
            })
        } else if (window.location.href === "http://localhost:3000/?category=%D0%9C%D0%BE%D0%BB%D0%BE%D1%87%D0%BD%D0%B0%D1%8F+%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%86%D0%B8%D1%8F") {
            axios.get("http://127.0.0.1:8000/?category=Молочная+продукция")
            .then(res =>{
                setProducts(res.data);
            })
        }

    }, [/*products*/]); //TODO: пофиксить зацикливание */

        return (
            <section className="elements"> 
                {products.map(product => ( 
                    <ProductItem product={product} key={product.id}></ProductItem>
                ))}
            </section>
        )
}

export default Product;