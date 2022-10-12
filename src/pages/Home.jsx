import React from 'react';

import Card from '../components/card/Card';

const Home = ({ 
                items, 
                cartItems,
                searchValue, 
                onChangeSearchInput, 
                onAddToFavorite, 
                onAddToCart,
                // isItemFavorite,
                isLoading
              }) => {

  const renderItems = () => {
    const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => {
      return (
        <Card
          key={isLoading ? index : item.id}
          onFavorite={obj => onAddToFavorite(obj)}
          onPlus={obj => onAddToCart(obj)}
          // favorite={!isLoading && isItemFavorite(item.id)}
          loading={isLoading}
          {...item}
        />
      );
    });
  }

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
        {renderItems()}
      </div>
    </div>
  )
}

export default Home;