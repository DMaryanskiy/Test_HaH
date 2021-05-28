import React from 'react';
import { Route, useHistory } from 'react-router-dom';
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
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import * as auth from '../../utils/auth';
import './App.css';
//import { api } from '../../utils/Api';


function App() {
  
    const history = useHistory();

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [isInfoPopupOpen, setIsInfoPopupOpen] = React.useState(false);
    const [isSuccessAuth, setIsSuccessAuth] = React.useState(false);
    const [loggedIn, setLoggedIn] = React.useState(false);

    React.useEffect(() => {
        if (loggedIn) {
            history.push("/");
        }
    }, [loggedIn]);

    const handleCardClick = (e) => {
        return (
          <Route path="/login">
            <Login />
          </Route>
        )
    }

    const handleLogout = () => {
      setLoggedIn(false);
    }


    const handleLogin = (data) => {
      console.log(data);
      //setLoggedIn(true); TODO: удали, это для тестов
      const {password, email} = data;
      auth.login({password, email})
      .then((data) => {
        if (!data) {
          //history.push('/sign-in');
        } else {
          setLoggedIn(true);
          //history.push('/');  
        }
      })
      .catch((err) => {
          console.log(`Ошибка: ${err}`);
      });
    }

    const handleRegister = (data) => { 
        const {username, phone, email, password } = data;
        console.log({username, phone, email, password});
        auth.register({username, phone, email, password })
          .then(() => {
            setIsSuccessAuth(true);
            handleRegisterClick();
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`)
            setIsSuccessAuth(false);
            handleRegisterClick();
        });
        
    } 


    // open successful or unsuccessful registration popup
    const handleRegisterClick = () => {
      if (isInfoPopupOpen === false) {
        setIsInfoPopupOpen(true);
      } else {
        setIsInfoPopupOpen(false);
      };
    };

    const handleMakeOrderClick = () => {
      if (isPopupOpen === false) {
        setIsPopupOpen(true);
      } else {
        setIsPopupOpen(false);
      };
    };

    const handleMenuClick = () => {
      if (isMenuOpen === false) {
        setIsMenuOpen(true)
      } else {
        setIsMenuOpen(false)
      };
    };

    function closePopup() {
      setIsPopupOpen(false);
      setIsInfoPopupOpen(false);
    }

    return (
      <div className="page">
        <Header />
        <NavBar loggedIn ={loggedIn} handleLogout={handleLogout}/>
        
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
          <Login onLogin={handleLogin}/>
        </Route>
        <Route path="/registration">
          <Registration onRegister={handleRegister} open={handleRegisterClick}/>
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
        <InfoTooltip auth={isSuccessAuth} isOpen={isInfoPopupOpen} onClose={closePopup}></InfoTooltip>
        {/*<div>Автор иконок: <a href="https://www.flaticon.com/ru/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div>
        */}
      </div>
    );
  }

export default App 