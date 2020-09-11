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

class App extends Component {
  state = {
    sideDrawerOpen: false,
    show: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        this.setState({
          ...this.state,
          show: true,
        });
      } else {
        this.setState({
          ...this.state,
          show: false,
        });
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
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
    return (
      <React.Fragment>
        <header>
          <Navigation drawerClickHandler={this.drawerToggleClickHandler} colorInverse={this.state.show} />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            click={this.backdropClickHandler}
            colorInverse={this.state.show}
          />
          ;{backdrop}
        </header>
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
