import React, { Component } from 'react';
import MainCategory from './MainCategory';
import MainDiy from './MainDiy';
import MainStories from './MainStories';
import './Main.scss';

class Main extends Component {
  constructor() {
    super();
    this.state = { MainStoriesdata: [], isNavOpen: false };
  }

  componentDidMount() {
    fetch('/data/mainStoriesData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          MainStoriesdata: data,
        });
      });
    window.scrollTo({ top: 0 });
  }

  openNav = () => {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  };

  render() {
    const { MainStoriesdata } = this.state;

    return (
      <div className="Main">
        <div className="videoLogoContiner">
          <img
            alt="background"
            className="mainVideo"
            src="https://images.unsplash.com/photo-1556300673-04df21735615?ixid=MXwxMjA3fDB8MHxwaG90by1[…]ufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          />
          <span className="unfoldingLogo">UNFOLDING SOON</span>
        </div>
        <MainCategory />
        <MainDiy />
        <MainStories storydata={MainStoriesdata} />
      </div>
    );
  }
}

export default Main;
