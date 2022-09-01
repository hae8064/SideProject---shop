import React from 'react'
import { Link } from 'react-router-dom';
import "../../App.css";

function Nav() {
    return (
        <div className='nav'>
            <ul className='nav1'><Link to = "/home">Home</Link></ul>
            <ul className='nav2'><Link to = "/best">Best</Link></ul>
            <ul className='nav3'><Link to = "/top">Top</Link></ul>
            <ul className='nav4'><Link to = "/bottom">Bottom</Link></ul>
            <ul className='nav5'><Link to = "/shoes">Shoes</Link></ul>
            <ul className='nav6'><Link to = "/accessory">Accessory</Link></ul>
        </div>
    );
}

export default Nav;