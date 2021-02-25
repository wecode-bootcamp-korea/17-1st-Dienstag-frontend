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
            src="https://freitag.rokka.io/fullwidth_1919max_2x/0a0ef9272093dfc7efa6c91a6f49e5bb2a4d2d41/fttb-backpack-rgb-highres-2.jpg?itok=eKFctM-m"
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
