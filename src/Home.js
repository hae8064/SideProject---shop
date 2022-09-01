import React from 'react'
import Banner from './components/banner';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav';

function Home() {
  return (
    <div className='home'>
        <Header /> 
        <Nav />
        <Banner />
    </div>
  );
}

export default Home