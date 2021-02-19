import React, { Component } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

class MainStories extends Component {
  constructor() {
    super();
    this.state = {
      slidewidth: 2264,
      curwidth: '',
      nextbtn: true,
      prevbtn: false,
    };
  }

  slideRight = () => {
    const { curwidth } = this.state;
    this.setState({
      curwidth: curwidth >= -849 && curwidth - 283,
      nextbtn: curwidth === -849 ? false : true,
      prevbtn: true,
    });
  };

  slideLeft = () => {
    const { curwidth } = this.state;
    this.setState({
      curwidth: curwidth !== 0 && curwidth + 283,
      prevbtn: curwidth === -283 ? false : true,
      nextbtn: true,
    });
  };

  render() {
    const { storydata } = this.props;
    const { curwidth, nextbtn, prevbtn } = this.state;
    return (
      <>
        <div className="storiesHead">STORIES FROM FREITAG</div>
        <div className="mainStories">
          <div
            className="wrapStory"
            style={{
              transform: `translate3d(${curwidth}px,0,0)`,
              transition: ` 0.5s ease-in `,
            }}
          >
            {storydata.map(story => {
              return (
                <div key={story.id} className="mainStoriesbox">
                  <img alt="story" src={story.img} className="storyImg"></img>
                  <div className="storyName">{story.name}</div>
                </div>
              );
            })}
          </div>
          <span onClick={this.slideRight} className={nextbtn ? 'next' : 'none'}>
            <FaArrowCircleRight />
          </span>
          <span onClick={this.slideLeft} className={prevbtn ? 'prev' : 'none'}>
            <FaArrowCircleLeft />
          </span>
        </div>
      </>
    );
  }
}

export default MainStories;
