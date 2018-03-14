import React, { Component } from 'react';
import './Nearby.css';

import FoodIcon from '../assets/24/food';
import NightlifeIcon from '../assets/24/nightlife';
import CoffeeIcon from '../assets/24/coffee';
import OrderIcon from '../assets/24/order';
import ReservationIcon from '../assets/24/reservation';
import DrugstoresIcon from '../assets/24/drugstores';
import MoneyIcon from '../assets/24/money';
import GasStationIcon from '../assets/24/gas_station';

const categories = [
  {name: "Restaurants", Icon: FoodIcon},
  {name: "Bars", Icon: NightlifeIcon},
  {name: "Coffee & Tea", Icon: CoffeeIcon},
  {name: "Order Takeout or Delivery", Icon: OrderIcon},
  {name: "Make a Reservation", Icon: ReservationIcon},
  {name: "Drugstores", Icon: DrugstoresIcon},
  {name: "Banks & Credit Unions", Icon: MoneyIcon},
  {name: "Gas Stations", Icon: GasStationIcon}
];

class Nearby extends Component {
  render() {
    return (
      <section className="browse-nearby">
        <ul className="category-list">

          {categories.map(({name, Icon}, index) =>
            <li key={index} className="search-link interactive-list-item active-background">
              <a className="category-icon h-link">
                <span
                  className="icon icon--size-24 u-space-r1"
                  style={{width: "24px", height: "24px"}}>
                >
                  <Icon />
                  {name}
                </span>
              </a>
            </li>)}

          <li className="search-link interactive-list-item active-background">
            <a className="h-link">More Categories...</a>
          </li>
        </ul>
      </section>
    );
  }
}

export default Nearby;
