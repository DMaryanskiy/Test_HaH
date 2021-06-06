import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
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
import { api } from '../../utils/Api';
import PopupOrder from '../PopupOrder/PopupOrder';


function App() {
  
    const history = useHistory();

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [isInfoPopupOpen, setIsInfoPopupOpen] = React.useState(false);
    const [isOrderPopupOpen, setIsOrderPopupOpen] = React.useState(false); 
    const [isSuccessAuth, setIsSuccessAuth] = React.useState(false);
    const [isSuccessOrder, setIsSuccessOrder] = React.useState(false);
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({username:''});

    console.log(currentUser);

    /*
    const handleButtonClick = (product) => {
      console.log(product);
      if (isProductAdded) {
        setIsProductAdded(false);
        return console.log('удаление')
        /*
        api.deleteProduct(currentUser, product)
          .then(() => {
            console.log('delete');
          })
          .catch(err => console.log(err)); 
      } else {
        setIsProductAdded(true);
         return console.log('добавление')
        
        api.buyProduct(currentUser, product)
          .then(() => {
            console.log('add');
          })
          .catch(err => console.log(err));
        } 
    } */


    /*
    React.useEffect(() => {
        if (loggedIn) {
            history.push("/");
        }
    }, [loggedIn]); */

    React.useEffect(() => {
        if (loggedIn) {
          api.getUserInfo()
          .then(data => {
            setCurrentUser(data);
          })
        }
    }, [loggedIn]);

    React.useEffect(() => {
        tokenCheck()
    }, [])

    //проверка токена
    const tokenCheck = () => {
      if (localStorage.getItem('token')) {
        setLoggedIn(true);
    }}

    const handleCardClick = (e) => {
        return (
          <Route path="/login">
            <Login />
          </Route>
        )
    }

    const handleLogout = () => {
      setLoggedIn(false);
      console.log('hi');
      auth.logout()
        .then(() => {
          console.log('logout');
          localStorage.removeItem('token');
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        })
    }


    const handleLogin = (data) => {
      const {password, username} = data;
      auth.login({password, username})
      .then((data) => {
        if (!data) {
          console.log('Error');
        }
        if (data.auth_token) {
          localStorage.setItem('token', data.auth_token);
          setLoggedIn(true);
          history.push('/');  
        } else {
          localStorage.removeItem('token', data.auth_token);
          history.push('/login');
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
      setIsOrderPopupOpen(false);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      closePopup();
      //TODO: если заказ офомрлен, то setIsSuccessOrder(true) иначе setIsSuccessOrder(false);
      //setIsSuccessOrder(true);
      setIsOrderPopupOpen(true);
    }

    const handleDeleteCard = (product) => {
      console.log(product);
      api.deleteProduct(currentUser, product)
      .then((res)=> {
        console.log(res);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
    }

    return (
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
            <Header />
            <NavBar loggedIn ={loggedIn} handleLogout={handleLogout}/>
            
            <Route exact path="/">
              <div className="product-main">
                <ProductMenu onMenuClick={handleMenuClick} isMenuOpen={isMenuOpen}/>
                <Product loggedIn={loggedIn}
                  onCardClick={handleCardClick}
                />  
              </div>
            </Route>
            {
            /* <Route exact path="/?category=Овощи">
              <div className="product-main">
                <ProductMenu onMenuClick={handleMenuClick} isMenuOpen={isMenuOpen}/>
                <Product  
                  onCardClick={handleCardClick}
                />  
              </div>
            </Route> */
            } 
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
              <ProductPage/>
            </Route>
            <Route path="/basket-page">
              <BasketPage onClick={handleMakeOrderClick} loggedIn={loggedIn} handleDeleteCard={handleDeleteCard}/>
            </Route>
            <Route path="/favorites">
              <div className="product-favorites">
                  <ProductMenu onMenuClick={handleMenuClick} isMenuOpen={isMenuOpen}/>
                  <Product  onCardClick={handleCardClick}/>  
              </div>
            </Route>
            <Footer loggedIn ={loggedIn} handleLogout={handleLogout}/>

            <Popup isOpen={isPopupOpen} onClose={closePopup} onSubmit={handleSubmit}></Popup>
            <InfoTooltip auth={isSuccessAuth} isOpen={isInfoPopupOpen} onClose={closePopup}></InfoTooltip>
            <PopupOrder isOrder={isSuccessOrder} isOpen={isOrderPopupOpen} onClose={closePopup}></PopupOrder>
            {/*<div>Автор иконок: <a href="https://www.flaticon.com/ru/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div>
            */}
        </CurrentUserContext.Provider>
      </div>
    );
  }

export default App 