import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    const props = this.props;
    return (
      <div className="car--container">
        <h2 className="model">{props.car.title}</h2>
        <div className="car--img">
          <img src={props.car.picture} alt="" />
        </div>
        <ul className="car--detail">
          <li>
            <p>
              <span className="label">Brand: </span>
              <span>{props.car.brand}</span>
            </p>
          </li>
          <li>
            <p>
              <span className="label">Model: </span>
              <span>{props.car.model}</span>
            </p>
          </li>
          <li>
            <p>
              <span className="label">Year: </span>{" "}
              <span>{props.car.year}</span>
            </p>
          </li>
          <li>
            <p>
              <span className="label">Price: </span>
              <span>{props.car.price}</span>
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Card;
