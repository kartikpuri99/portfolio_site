import React, { Component } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import "./App.css";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Navigation from "./components/Navigation/Navigation";
import SideDrawer from "./components/Navigation/SideDrawer/SideDrawer";
import Backdrop from "./components/Navigation/Backdrop/Backdrop";
import Loading from "./utils/Loading/Loading";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    show: false,
    lottieanimation: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        ...this.state,
        lottieanimation: false,
      });
    }, 3000);
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    if (this.state.lottieanimation) {
      return <Loading show={this.state.lottieanimation} />;
    }
    return (
      <React.Fragment>
        <Navigation
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          click={this.backdropClickHandler}
        />
        ;{backdrop}
        <Home />
        <About />
        <Experience />
        <Work />
        <Contact />
      </React.Fragment>
    );
  }
}

export default App;
