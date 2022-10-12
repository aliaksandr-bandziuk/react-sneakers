import React from 'react';

import './drawer.scss';

const Drawer = ({ onCloseCart, onRemove, items = [] }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between align-center">
          Basket<img onClick={onCloseCart} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
        </h2>

        {/* тут тернарный оператор очень длинный */}
        {/* не забыть это */}
        {
          items.length > 0 ? 
            <>
              <div className="items">
                {
                  items.map((obj) => (
                    <div key={obj.id} className="cartItem d-flex align-center mb-20">
                      <img className="mr-15" width={70} height={70} src={obj.imageUrl} alt="" />
                      <div className="mr-20 item-text">
                        <p className="mb-10">{obj.title}</p>
                        <p><b>$ {obj.price}</b></p>
                      </div>
                      <img
                        onClick={() => onRemove(obj.id)}
                        className="removeBtn"
                        src="/img/btn-remove.svg"
                        alt="Remove" />
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
            </> 
            : 
            <div className="cartEmpty d-flex align-center justify-center flex-column flex">
              <img src="/img/cart-empty.png" alt="" />
              <h2>Cart is empty</h2>
              <p className="opacity-6">Please add at least 1 pair sneakers</p>
              <button onClick={onCloseCart} className='greenButton'>
                <img src="/img/arrow.svg" alt="" />
                Go Back
              </button>
            </div>
        }
      </div>
    </div>
  )
}

export default Drawer;