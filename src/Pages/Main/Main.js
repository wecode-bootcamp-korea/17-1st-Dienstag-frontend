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
  }

  openNav = () => {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  };

  render() {
    const { MainStoriesdata } = this.state;

    return (
      <div className="Main">
        <div className="videologo-continer">
          <video loop autoPlay muted className="mainvideo">
            <source
              src="https://www.freitag.ch/sites/default/files/neo_content_video/210127_frbr_teaser_master_brompton_desktop-startseite.mp4"
              type="video/mp4"
            />
          </video>
          <span className="unfolding-logo">UNFOLDING SOON</span>
        </div>
        <MainCategory />
        <MainDiy />
        <MainStories storydata={MainStoriesdata} />
      </div>
    );
  }
}

export default Main;
