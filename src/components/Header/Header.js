import React from 'react'
import "../../App.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className='Header'>
            <ul className='logn'><Link to = "/login">Login</Link></ul>
            <ul className='cart'><Link to = "/cart">Cart</Link></ul>
            <ul className='myPage'><Link to = "/myPage">MyPage</Link></ul>
        </div>
    );
}

export default Header;