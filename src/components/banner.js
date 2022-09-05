import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
};

function Banner() {
    return (
        <div className='banner'>
            <Slider {...settings}>
                <img src= {require("../imgs/banner4.png")} alt='배너이미지'/>
                <img src={require('../imgs/banner3.jpg')} alt='배너이미지'/>
                <img src={require('../imgs/banner1.jpg')} alt='배너이미지'/>
                <img src={require('../imgs/banner2.jpg')} alt='배너이미지'/>
            </Slider>
        </div>
    );
}

export default Banner;