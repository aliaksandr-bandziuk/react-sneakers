import React, { useState } from 'react';

import './card.scss';

const Card = ({ 
                id,
                imageUrl, 
                title, 
                price, 
                onFavorite, 
                onPlus,
                favorited = false, 
                onRemove 
              }) => {

  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    onPlus({ imageUrl, title, price });
    setIsAdded(!isAdded);
  }

  // add to favorites frontend
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickFavorite = () => {
    onFavorite({ id, imageUrl, title, price });
    setIsFavorite(!isFavorite);
  }
  // add to favorites frontend

  return (
    <div className="card">
      <div className="favorite">
        <img
          onClick={onClickFavorite}
          src={
            isFavorite ? "/img/heart-liked.svg"
            :
            "/img/heart-unliked.svg"}
            alt="favorite"
        />
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