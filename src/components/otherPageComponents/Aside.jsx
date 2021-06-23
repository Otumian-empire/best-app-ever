import React, { Component } from "react";
import Icon from "./Icon";

class Aside extends Component {
  state = {
    icons: [
      { id: 1, name: "Home", style: "house-door bg-blue" },
      { id: 2, name: "Report", style: "bar-chart-line bg-green" },
      { id: 3, name: "Transactions", style: "arrow-left-right bg-pink" },
      { id: 4, name: "Items", style: "tag bg-dark" },
      { id: 5, name: "Customers", style: "person-lines-fill bg-green" },
      { id: 6, name: "Team", style: "people bg-blue" },
      { id: 7, name: "Account & Settings", style: "gear bg-pink" },
      { id: 8, name: "Orders", style: "bag bg-blue" },
    ],
  };
  render() {
    return (
      <div className="col-4">
        <div className="row m-2 p-0">
          {this.state.icons.map((icon) => (
            <Icon icon={icon} />
          ))}
        </div>
      </div>
    );
  }
}

export default Aside;
