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
          {/* <video loop autoPlay muted className="mainVideo">
            <source
              src="https://www.freitag.ch/sites/default/files/neo_content_video/f601_malcolm_banner_1600x900.mp4
              "
              type="video/mp4"
            />
          </video> */}
          <img
            alt="background"
            className="mainVideo"
            src="https://images.unsplash.com/photo-1496033604106-04799291ee86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"
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
