import React from 'react'
import Banner from './components/banner';
import Header from './components/Header/Header'
import BestGrid from './components/Nav/BestGrid';
import Nav from './components/Nav/Nav';

function Home({products, setProducts, convertPrice, cartProducts, setcartProducts}) {
  return (
    <div className='home'>
        <Header /> 
        <Nav />
        <Banner />
        <BestGrid products={products} setProducts={setProducts} convertPrice={convertPrice} cartProducts={cartProducts} setcartProducts={setcartProducts}/>
    </div>
  );
}

export default Home