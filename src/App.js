import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Hero from './components/Navbar/Hero';
import Products from './components/Products';
import Feature from './components/Feature';
import Footer from './components/Footer';
import { productData, productDataTwo } from './components/Products/data';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products 
        heading='Choose your favourite'
        data={productData}
      />
      <Feature/>
      <Products 
        heading='Sweet Treats'
        data={productDataTwo}
      />
      <Footer/>
    </Router>
  );
}

export default App;
