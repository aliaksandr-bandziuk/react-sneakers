import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Drawer from "./components/drawer/Drawer";

const cardsData = [
  {
    imageUrl: '/img/sneakers/1.jpg',
    title: 'Nike Blazer Mid Suede Green',
    price: 120
  },
  {
    imageUrl: '/img/sneakers/2.jpg',
    title: 'Nike Air Max 270',
    price: 122
  },
  {
    imageUrl: '/img/sneakers/3.jpg',
    title: 'Nike Blazer Mid Suede White',
    price: 84
  }
];

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
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
            cardsData.map((obj) => (
              <Card 
                imageUrl={obj.imageUrl}
                title={obj.title}
                price={obj.price}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
