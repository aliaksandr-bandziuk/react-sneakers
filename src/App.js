import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

// import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Drawer from "./components/drawer/Drawer";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {

  // add to card
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (obj) => {
    axios.post('https://634299963f83935a7845ad4c.mockapi.io/cart', obj);
    
    setCartItems((prev) => [...prev, obj]);
  }
  // add to card

  // remove from card
  const onRemoveItem = (id) => {
    axios.delete(`https://634299963f83935a7845ad4c.mockapi.io/cart/${id}`);
    
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }
  // remove from card

    // fetch data
    const [items, setItems] = useState([]);

    useEffect(() => {
      axios.get('https://634299963f83935a7845ad4c.mockapi.io/items')
        .then(res => setItems(res.data));
      axios.get('https://634299963f83935a7845ad4c.mockapi.io/cart')
        .then(res => setCartItems(res.data));
      axios.get('https://634299963f83935a7845ad4c.mockapi.io/favorite')
        .then(res => setFavorites(res.data));
    }, []);
    // fetch data

  // add to favorites backend
  const [favorites, setFavorites] = useState([]);

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)){
        axios.delete(`https://634299963f83935a7845ad4c.mockapi.io/favorite/${obj.id}`);
        // это нужно чтобы удалить сразу со страницы
        // setFavorites((prev) => prev.filter(item => item.id !== obj.id))
      } else {
        const { data } = await axios.post('https://634299963f83935a7845ad4c.mockapi.io/favorite', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Failed to add favorite');
    }
  }
  // add to favorites backend



  // open Drawer
  const [cardOpened, setCardOpened] = useState(false);
  // open Drawer

  // search
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchInput = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }
  // search

  return (
    <div className="wrapper">
      {cardOpened ? <Drawer items={cartItems} onCloseCart={() => setCardOpened(false)} onRemove={onRemoveItem} /> : null}
      <Header onClickCart={() => setCardOpened(true)} />

      <Routes>
        <Route path="/" 
          element={
            <Home 
              items={items} 
              searchValue={searchValue} 
              onChangeSearchInput={onChangeSearchInput} 
              onAddToFavorite={onAddToFavorite} 
              onAddToCart={onAddToCart}
            />} 
        />
        <Route 
          path="/favorites" 
          element={
            <Favorites 
            items={favorites}
            searchValue={searchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            />}
        />
      </Routes>


    </div>
  );
}

export default App;
