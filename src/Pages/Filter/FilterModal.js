import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdColorLens, MdKeyboardArrowDown } from 'react-icons/md';
import { GiResize } from 'react-icons/gi';
import './FilterModal.scss';

class FilterModal extends Component {
  constructor() {
    super();
    this.state = { iscoloropen: false, issizeopen: false, chooseColor: '' };
  }

  openColorList = () => {
    this.setState({ iscoloropen: !this.state.iscoloropen });
  };

  openSizeList = () => {
    this.setState({ issizeopen: !this.state.issizeopen });
  };

  redClick = () => {
    this.setState({ chooseColor: 'red' });
  };

  render() {
    const { iscoloropen, issizeopen } = this.state;
    return (
      <>
        <div className="modalOutside" onClick={this.props.openFilter}></div>
        <div className="modalNavContainer">
          <ul>
            <li></li>
            <li onClick={this.openColorList} className="colorsList">
              <span>
                <MdColorLens /> PRIMARY COLOR
              </span>
              <span
                className="bagsArrow"
                style={{ transform: iscoloropen && 'rotate(180deg)' }}
              >
                <MdKeyboardArrowDown size={20} />
              </span>
            </li>

            {iscoloropen && (
              <Link to="/filterview">
                <div className="colorList">
                  <li onClick={this.redClick}>RED</li>
                  <li>GREEN</li>
                  <li>YELLOW</li>
                  <li>BLUE</li>
                </div>
              </Link>
            )}

            <li onClick={this.openSizeList} className="sizeLists">
              <span>
                <GiResize /> BAG SIZE
              </span>
              <span
                className="bagsArrow"
                style={{ transform: iscoloropen && 'rotate(180deg)' }}
              >
                <MdKeyboardArrowDown size={20} />
              </span>
            </li>
            {issizeopen && (
              <Link to="/filterview">
                <div className="sizeList">
                  <li>SMALL</li>
                  <li>MEDIUM</li>
                  <li>LARGE</li>
                </div>
              </Link>
            )}
          </ul>
          <div></div>
        </div>
      </>
    );
  }
}

export default FilterModal;
