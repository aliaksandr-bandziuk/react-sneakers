import React from 'react';

import Card from '../components/card/Card';

const Favorites = ({ items, onAddToFavorite }) => {
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-30">
        <h1>My Wishlist</h1>
      </div>
      <div className="d-flex flex-wrap cards">
        {
          items.map((item) => (
            <Card 
              key={item.imageUrl}
              onFavorite={onAddToFavorite}
              {...item}
              // onPlus={(item) => onAddToCart(item)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Favorites;