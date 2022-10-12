import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

// import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Drawer from "./components/drawer/Drawer";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {

  // useState for all
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cardOpened, setCardOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // useState for all
console.log(cartItems);
  // add to card
  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://634299963f83935a7845ad4c.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://634299963f83935a7845ad4c.mockapi.io/cart', obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину');
      console.error(error);
    }
  };
  // add to card

  // remove from card
  const onRemoveItem = (id) => {
    axios.delete(`https://634299963f83935a7845ad4c.mockapi.io/cart/${id}`);
    
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }
  // remove from card

    // fetch data
    useEffect(() => {
      async function fetchData() {
        const cartResponce = await axios.get('https://634299963f83935a7845ad4c.mockapi.io/cart');
        const favoritesResponce = await axios.get('https://634299963f83935a7845ad4c.mockapi.io/favorite');
        const itemsResponce = await axios.get('https://634299963f83935a7845ad4c.mockapi.io/items');

        setIsLoading(false);

        setCartItems(cartResponce.data);
        setFavorites(favoritesResponce.data);
        setItems(itemsResponce.data);
      }
      fetchData();
    }, []);
    // fetch data

  // add to favorites backend
  

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

  // search
  const onChangeSearchInput = (event) => {
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
              cartItems={cartItems}
              searchValue={searchValue} 
              onChangeSearchInput={onChangeSearchInput} 
              onAddToFavorite={onAddToFavorite} 
              onAddToCart={onAddToCart}
              isLoading={isLoading}
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
