import React from 'react'
import Banner from './components/banner';
import Header from './components/Header/Header'
import BestGrid from './components/Nav/BestGrid';
import Nav from './components/Nav/Nav';

function Home() {
  return (
    <div className='home'>
        <Header /> 
        <Nav />
        <Banner />
        <BestGrid />
    </div>
  );
}

export default Home