import React, { useState, useEffect } from "react";

import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Drawer from "./components/drawer/Drawer";

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://634299963f83935a7845ad4c.mockapi.io/items')
    .then((res) => res.json())
    .then((data) => setItems(data));
  }, []);

  const [cardOpened, setCardOpened] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  console.log(cartItems);

  return (
    <div className="wrapper">
      {cardOpened ? <Drawer items={cartItems} onCloseCart={() => setCardOpened(false)} /> : null}
      <Header onClickCart={() => setCardOpened(true)} />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-30">
          <h1>All Sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Search..." type="text" name="" id="" />
          </div>
        </div>
        <div className="d-flex flex-wrap cards">
          {
            items.map((obj) => (
              <Card 
                imageUrl={obj.imageUrl}
                title={obj.title}
                price={obj.price}
                onFavorite={() => console.log('Added to favorite')}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
