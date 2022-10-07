function App() {
  return (
    <div className="wrapper">
      <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between align-center">
            Basket<img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </h2>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <img className="mr-15" width={70} height={70} src="/img/sneakers/1.jpg" alt="" />
              <div className="mr-20">
                <p className="mb-10">Мужские Кроссовки Nike Air Max 270</p>
                <p><b>12 999 руб.</b></p>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenButton">Confirm <img src="/img/arrow.svg" alt="" /></button>
          </div>
        </div>
      </div>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Sport online shop</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30 d-flex align-center">
            <img width={18} height={18} src="/img/cart.svg" alt="" />
            <span className="span">1205 руб.</span></li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-30">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." type="text" name="" id="" />
          </div>
        </div>
        <div className="d-flex flex-wrap cards">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="button unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/5.jpg" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/6.jpg" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/7.jpg" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/8.jpg" alt="" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
