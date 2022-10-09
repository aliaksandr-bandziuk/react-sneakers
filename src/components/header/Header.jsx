import React from 'react';

import './header.scss';

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="" />
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Sport online shop</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 d-flex align-center cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="" />
          <span className="span">$ 412</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="" />
        </li>
      </ul>
    </header>
  )
}

export default Header