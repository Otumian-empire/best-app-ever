import React, { Component, Fragment } from "react";
import Description from "./Description";
import MainNavBar from "./NavBar";
import SquareApps from "./SquareApps";
import OtherPage from "./OtherPage";

class MainPage extends Component {
  state = {
    isShowingMainPage: true,
    configs: [
      { id: 1, name: "App", token: "sq0id-wjbkjFj2esUGNKghj2Qedfsff" },
      { id: 2, name: "SHACk15 App", token: "sq0id-ABekjFjygkUGNKghj23n-dfsVw" },
    ],
  };

  handleClick = () => {
    this.setState((prevState) => {
      return { isShowingMainPage: !prevState.isShowingMainPage };
    });
  };

  render() {
    return this.state.isShowingMainPage ? (
      <Fragment>
        <MainNavBar />
        <Description />
        <SquareApps
          configs={this.state.configs}
          handleClick={this.handleClick}
        />
      </Fragment>
    ) : (
      <OtherPage handleClick={this.handleClick} />
    );
  }
}

export default MainPage;
