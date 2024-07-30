import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// NAVBAR CSS
import './assets/css/components/Navbar/navbar.css';
// CARDS CSS
import './assets/css/components/Card/bodySection.css';
import './assets/css/components/Card/cardCarousel.css';
import './assets/css/components/Card/productSelectedDetails.css';
// DASHBIARD CSS
import './assets/css/pages/Dashboard/dashboardLayout.css';
// INICIO CSS
import './assets/css/pages/Inicio/inicio.css';
// CAROUSEL CSS
import './assets/css/components/Carousel/carouselCard.css';
// PRODUCTDETAILS CSS
import './assets/css/pages/ProductDetails/productDetails.css';
// LOGIN CSS
import './assets/css/pages/Login/login.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
