import React from 'react';
import { Link, Route } from 'react-router-dom';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import AboutUs from '../AboutUs/AboutUs';
import Product from '../Product/Product';
import ProductMenu from '../ProductMenu/ProductMenu';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import ProductPage from '../ProductPage/ProductPage';
import Footer from '../Footer/Footer';
import BasketPage from '../BasketPage/BasketPage';
import './App.css';


function App() {

  const [isFavourite, setIsFavourite] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isClickedCard, setIsClickedCard] = React.useState(false);

  const handleCardClick = (e) => {
      console.log(e.target);
      return (
        <Route path="/login">
          <Login />
        </Route>
      )
  }

  const handleFavouriteClick = () => {
    if (isFavourite == false) {
      setIsFavourite(true);
    } else {
      setIsFavourite(false);
      };
    }
  const handleMenuClick = () => {
    if (isMenuOpen == false) {
      setIsMenuOpen(true)
    } else {
      setIsMenuOpen(false)
    }
  };

  return (
    <div className="page">
      <Header />
      <NavBar />
      <Route exact path="/">
        <div className="product-main">
          <ProductMenu onMenuClick={handleMenuClick} isMenuOpen={isMenuOpen}/>
          <Product onCardClick={handleCardClick}/>  
        </div>
      </Route> 
      <Route path="/aboutUs">
        <AboutUs />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/registration">
        <Registration />
      </Route>
      <Route path="/product-page">
        <ProductPage />
      </Route>
      <Route path="/basket-page">
        <BasketPage />
      </Route>
      <Route path="/favorites">
        <div className="product-main">
          <ProductMenu onMenuClick={handleMenuClick} isMenuOpen={isMenuOpen}/>
          <Product onCardClick={handleCardClick}/>  
        </div>
      </Route>
      <Footer />
      {/*<div>Автор иконок: <a href="https://www.flaticon.com/ru/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div>
      */}
    </div>
  );
}

export default App 