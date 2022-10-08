import React from 'react';

import './card.scss';

const Card = (props) => {

  const plusButtonClick = () => {
    alert(props.title)
  }

  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="button unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="" />
      <p>{props.title}</p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Cost: </span>
          <b>$ {props.price}</b>
        </div>
        <button className="button" onClick={plusButtonClick}>
          <img width={11} height={11} src="/img/plus.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Card;