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
import Popup from '../Popup/Popup';
import { api } from '../../utils/Api';
import * as auth from '../../utils/auth';
import './App.css';


function App() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const handleCardClick = (e) => {
      return (
        <Route path="/login">
          <Login />
        </Route>
      )
  }

  // TODO: catch регистрация
    const handleRegister = (data) => { 
        const {name, number, email, password } = data;
        auth.register({name, number, email, password })
          .then(res => {
            console.log('OТКРЫВАЕМ ПОПАП')
          })
        
    }

  const handleMakeOrderClick = () => {
    if (isPopupOpen == false) {
      setIsPopupOpen(true);
    } else {
      setIsPopupOpen(false);
      };
  };
  const handleMenuClick = () => {
    if (isMenuOpen == false) {
      setIsMenuOpen(true)
    } else {
      setIsMenuOpen(false)
    }
  };

  function closePopup() {
    setIsPopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <NavBar />
      <Route exact path="/">
        <div className="product-main">
          <ProductMenu onMenuClick={handleMenuClick} isMenuOpen={isMenuOpen}/>
          <Product  
            onCardClick={handleCardClick}
          />  
        </div>
      </Route>
      <Route exact path="/?category=Овощи">
        <div className="product-main">
          <ProductMenu onMenuClick={handleMenuClick} isMenuOpen={isMenuOpen}/>
          <Product  
            onCardClick={handleCardClick}
          />  
        </div>
      </Route>  
      <Route path="/aboutUs">
        <AboutUs />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/registration">
        <Registration onRegister={handleRegister} />
      </Route>
      <Route path="/product-page">
        <ProductPage />
      </Route>
      <Route path="/basket-page">
        <BasketPage onClick={handleMakeOrderClick}/>
      </Route>
      <Route path="/favorites">
        <div className="product-favorites">
            <ProductMenu onMenuClick={handleMenuClick} isMenuOpen={isMenuOpen}/>
            <Product  onCardClick={handleCardClick}/>  
        </div>
      </Route>
      <Footer />

      <Popup isOpen={isPopupOpen} onClose={closePopup}></Popup>
      {/*<div>Автор иконок: <a href="https://www.flaticon.com/ru/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div>
      */}
    </div>
  );
}

export default App 