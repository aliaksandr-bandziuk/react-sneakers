import React from 'react';

import './drawer.scss';

const Drawer = ({ onCloseCart, items = [] }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between align-center">
          Basket<img onClick={onCloseCart} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
        </h2>
        <div className="items">
          {
            items.map((obj) => (
              <div className="cartItem d-flex align-center mb-20">
                <img className="mr-15" width={70} height={70} src={obj.imageUrl} alt="" />
                <div className="mr-20 item-text">
                  <p className="mb-10">{obj.title}</p>
                  <p><b>$ {obj.price}</b></p>
                </div>
                <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
              </div>
            ))
          }
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