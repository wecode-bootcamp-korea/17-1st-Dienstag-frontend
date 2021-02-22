import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdColorLens, MdKeyboardArrowDown } from 'react-icons/md';
import { GiResize } from 'react-icons/gi';
import './FilterModal.scss';
import { ProductConsumer } from '../../context';

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

  render() {
    const { iscoloropen, issizeopen } = this.state;
    return (
      <ProductConsumer>
        {value => {
          return (
            <>
              <div className="modalOutside" onClick={value.openFilter}></div>
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
                    <div className="colorList">
                      {colors.map(color => {
                        return (
                          <Link to="/filterview">
                            <li
                              id={color.id}
                              key={color.id}
                              onClick={() => value.handleClick(color.id)}
                            >
                              {color.name}
                            </li>
                          </Link>
                        );
                      })}
                    </div>
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
                    <div className="sizeList">
                      <Link to="/filterview">
                        {sizes.map(size => {
                          return (
                            <li
                              key={size.id}
                              onClick={() => value.handleClick(size.id)}
                            >
                              {size.name}
                            </li>
                          );
                        })}
                      </Link>
                    </div>
                  )}
                </ul>
                <div></div>
              </div>
            </>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default FilterModal;
const colors = [
  { name: 'RED', id: '1' },
  { name: 'GREEN', id: '2' },
  { name: 'BLUE', id: '3' },
  { name: 'YELLOW', id: '4' },
];
const sizes = [
  { name: 'SMALL', id: '5' },
  { name: 'MEDIUM', id: '6' },
  { name: 'LARGE', id: '7' },
];
