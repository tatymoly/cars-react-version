import React, { Component } from "react";
import Card from "../card/Card";
import cars from "./data";

class Cars extends Component {
  constructor() {
    super();
    this.state = {
      allCars: cars,
      filterCars: []
    };
    this.getCarsByBrand = this.getCarsByBrand.bind(this);
  }

  componentDidMount() {
    this.setState({
      filterCars: this.state.allCars
    });
  }

  carData = () => {
    return this.state.filterCars.map(car => {
      return <Card key={car.id} car={car} />;
    });
  };

  getCarsByBrand = brand => {
    let updateCars = this.state.allCars;
    updateCars = updateCars.filter(car => {
      return brand.target.value.toLowerCase() === car.brand;
    });
    this.setState({
      filterCars: updateCars
    });
    if (brand.target.value === "") {
      this.setState({
        filterCars: this.state.allCars
      });
    }
  };

  render() {
    const car = this.carData();
    return (
      <div>
        <div>
          <input
            type="text"
            className="center-block"
            placeholder="Filter here..."
            onChange={this.getCarsByBrand}
          />
        </div>
        {car}
      </div>
    );
  }
}

export default Cars;
