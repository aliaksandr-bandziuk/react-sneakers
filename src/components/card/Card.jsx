import React, { useState } from 'react';

import './card.scss';

const Card = ({ imageUrl, title, price, onFavorite, onPlus }) => {

  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    onPlus({ imageUrl, title, price });
    setIsAdded(!isAdded);
  }

  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="button unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="" />
      <p>{title}</p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Cost: </span>
          <b>$ {price}</b>
        </div>
          <img
            onClick={onClickPlus}
            className='plus'
            src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
            alt="" 
          />
      </div>
    </div>
  )
}

export default Card;