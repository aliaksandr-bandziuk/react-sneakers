import React from 'react';

import Card from '../components/card/Card';

const Home = ({ 
                items, 
                searchValue, 
                onChangeSearchInput, 
                onAddToFavorite, 
                onAddToCart 
              }) => {
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-30">
        <h1>
          {searchValue ? `Search fo "${searchValue}"` : 'All Sneakers'}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Search..."
            type="text"
          />
        </div>
      </div>
      <div className="d-flex flex-wrap cards">
        {
          items.filter(item => item.title.toLowerCase().includes(searchValue)).map((item) => (
            <Card 
              key={item.imageUrl}
              onFavorite={(item) => onAddToFavorite(item)}
              onPlus={(item) => onAddToCart(item)}
              {...item}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home;