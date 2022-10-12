import React, { useState } from 'react';
import ContentLoader from "react-content-loader";

import './card.scss';

const Card = ({ 
                id,
                imageUrl, 
                title, 
                price, 
                onFavorite, 
                onPlus,
                favorited = false, 
                added = false,
                loading = false
              }) => {

  const [isAdded, setIsAdded] = useState(added);

  const onClickPlus = () => {
    onPlus({ id, imageUrl, title, price });
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
      {
        loading ? (
          <ContentLoader
            speed={2}
            width={155}
            height={250}
            viewBox="0 0 155 265"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            // {...props}
          >
            <rect x="0" y="0" rx="10" ry="10" width="155" height="140" />
            <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
            <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
            <rect x="0" y="234" rx="5" ry="5" width="80" height="25" />
            <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
          </ContentLoader>
        ) : (
          <>
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
          </>
        )
      }
    </div>
  )
}

export default Card;