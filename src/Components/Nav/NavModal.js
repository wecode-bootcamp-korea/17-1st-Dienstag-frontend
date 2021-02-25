import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../../Pages/Login/Login';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { CgShoppingCart } from 'react-icons/cg';
import { GrChat } from 'react-icons/gr';
import {
  MdKeyboardArrowDown,
  MdLocationCity,
  MdStoreMallDirectory,
  MdCopyright,
} from 'react-icons/md';
import {
  RiHeartAddLine,
  RiUser3Line,
  RiInstagramLine,
  RiNewspaperLine,
} from 'react-icons/ri';
import './Nav.scss';
import { korea } from './imageList';
import { ProductConsumer } from '../../context';

export default class FnavModal extends Component {
  constructor() {
    super();
    this.state = {
      openShop: true,
      isbagsclick: false,
      isShopsclick: false,
      openbags: true,
      isLoginClick: false,
      isToken: localStorage.getItem('token') ? true : false,
    };
  }

  updateLogin = () => {
    this.setState({
      isToken: true,
    });
  };
  shopOpen = () => {
    const { openShop, isShopsclick } = this.state;
    this.setState({
      openShop: !openShop,
      isShopsclick: !isShopsclick,
    });
  };

  bagsOpen = () => {
    const { isbagsclick, openbags } = this.state;
    this.setState({
      isbagsclick: !isbagsclick,
      openbags: !openbags,
    });
  };
  handleShowLogin = () => {
    this.setState({ isLoginClick: !this.state.isLoginClick });
  };

  handleLogout = () => {
    localStorage.removeItem('token');
  };

  render() {
    const { isnavopen, openNav } = this.props;
    const {
      isbagsclick,
      isShopsclick,
      openbags,
      openShop,
      isLoginClick,
      isToken,
    } = this.state;
    const username = localStorage.getItem('username');

    return (
      <div>
        {!isnavopen && (
          <>
            <ProductConsumer>
              {value => {
                return (
                  <div className="modalOutside" onClick={value.closeNav} />
                );
              }}
            </ProductConsumer>

            <div className="modalNavContainer">
              <ul>
                <li></li>
                <li className="loginEn">
                  <span
                    onClick={() => {
                      this.handleShowLogin();
                    }}
                  >
                    <RiUser3Line size={20} /> {isToken ? username : 'Login'}
                  </span>
                  <div>
                    <img alt="korea" className="ko" src={korea} />
                    <span> KO</span>
                  </div>
                </li>
                <li className={'loginForm ' + (!isLoginClick && 'showLogin')}>
                  <Login
                    isToken={isToken}
                    handleLogout={this.handleLogout}
                    updateLogin={this.updateLogin}
                  />
                </li>
                <ul className="searchStores">
                  <div>
                    <AiOutlineSearch size={20} /> SEARCH
                  </div>
                  <div>
                    <MdStoreMallDirectory size={20} /> STORES
                  </div>
                </ul>
                <div className="navlist">
                  <li onClick={this.shopOpen} className="shopList">
                    <span>
                      <CgShoppingCart size={20} /> SHOP
                    </span>
                    <div
                      className={
                        !isShopsclick ? 'shopArrow' : 'shopArrowrotate'
                      }
                    >
                      <MdKeyboardArrowDown size={20} />
                    </div>
                  </li>
                  {!openShop && (
                    <ul className="shopCate">
                      <li>BESTSELLERES</li>
                      <li>ONLINE SPECIALS</li>

                      <li onClick={this.bagsOpen} className="bagsList">
                        <span>BAGS</span>
                        <div
                          className={
                            !isbagsclick ? 'bagsArrow' : 'bagsArrowrotate'
                          }
                        >
                          <MdKeyboardArrowDown size={20} />
                        </div>
                      </li>
                      <ProductConsumer>
                        {value => {
                          return (
                            <>
                              {!openbags && (
                                <div className="bagsLists">
                                  {bagLists.map(list => {
                                    return (
                                      <Link to="/bagcategoryview">
                                        <li
                                          key={list.categoryName}
                                          id={list.id}
                                          onClick={() => value.readId(list.id)}
                                        >
                                          {list.categoryName}
                                        </li>
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}
                            </>
                          );
                        }}
                      </ProductConsumer>
                      <li>ACCESSORIES</li>
                      <li>F-ABRIC TWO-COLOR COMBOS</li>
                      <li>APPAREL FEMALE</li>
                      <li>APPAREL MALE</li>
                      <li>VOUCHER</li>
                    </ul>
                  )}

                  <li>
                    <GrChat size={20} /> STORIES
                  </li>
                  <li>
                    <MdLocationCity size={20} /> CITY GUIDE LINES
                  </li>
                  <ProductConsumer>
                    {value => {
                      return (
                        <Link to="newsletter">
                          <li onClick={value.cloaseNav}>
                            <RiHeartAddLine size={20} /> S.W.A.P
                          </li>
                        </Link>
                      );
                    }}
                  </ProductConsumer>
                  <li>
                    <IoIosInformationCircleOutline size={20} /> CONNECT
                  </li>

                  <div className="navBottomIcons">
                    <div className="navBottomIconscontainer">
                      <RiNewspaperLine size={20} />
                      <RiInstagramLine size={20} />
                      <FaFacebookF size={20} />
                    </div>
                    <div className="navBottomDienstagmark">
                      <MdCopyright size={15} />
                      <span> DIENSTAG 2021</span>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </>
        )}
      </div>
    );
  }
}

const bagLists = [
  { categoryName: 'ALL MODELS', id: '1' },
  { categoryName: 'BACK PACKS', id: '1' },
  { categoryName: 'MESSENGER', id: '1' },
  { categoryName: 'SHOPPER', id: '1' },
  { categoryName: 'SHOULDER BAGS', id: '1' },
  { categoryName: 'TOTE BAGS', id: '1' },
  { categoryName: 'LAPTOP BAGS', id: '1' },
  { categoryName: 'TRAVEL BAGS', id: '1' },
  { categoryName: 'SPORTS BAGS', id: '1' },
];
