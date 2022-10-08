import React from 'react';

import './drawer.scss';

const Drawer = () => {
  return (
    <div style={{display: 'none'}} className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between align-center">
          Basket<img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
        </h2>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <img className="mr-15" width={70} height={70} src="/img/sneakers/1.jpg" alt="" />
            <div className="mr-20">
              <p className="mb-10">Мужские Кроссовки Nike Air Max 270</p>
              <p><b>12 999 руб.</b></p>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">Confirm <img src="/img/arrow.svg" alt="" /></button>
        </div>
      </div>
    </div>
  )
}

export default Drawer;