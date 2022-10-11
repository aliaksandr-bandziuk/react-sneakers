import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import './header.scss';

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Sport online shop</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 d-flex align-center cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="" />
          <span className="span">$ 412</span>
        </li>
        <li>
          <Link to="/favorites">
            <img className='mr-30 cu-p' width={18} height={18} src="/img/fav-btn.svg" alt="" />
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="" />
        </li>
      </ul>
    </header>
  )
}

export default Header;