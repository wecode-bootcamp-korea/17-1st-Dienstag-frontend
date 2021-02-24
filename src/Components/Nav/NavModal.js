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

    return (
      <div>
        {!isnavopen && (
          <>
            <div className="modalOutside" onClick={openNav}></div>
            <div className="modalNavContainer">
              <ul>
                <li></li>
                <li className="loginEn">
                  <span
                    onClick={() => {
                      this.handleShowLogin();
                    }}
                  >
                    <RiUser3Line size={20} /> {isToken ? '유저명' : 'Login'}
                  </span>
                  <div>
                    <img alt="korea" className="ko" src={korea} />
                    <span> KO</span>
                  </div>
                </li>
                <li className={'loginForm ' + (!isLoginClick && 'showLogin')}>
                  <Login isToken={isToken} handleLogout={this.handleLogout} />
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
                      className="shopArrow"
                      style={{ transform: isShopsclick && 'rotate(180deg)' }}
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
                          className="bagsArrow"
                          style={{ transform: isbagsclick && 'rotate(180deg)' }}
                        >
                          <MdKeyboardArrowDown size={20} />
                        </div>
                      </li>
                      {!openbags && (
                        <div className="bagsLists">
                          {bagLists.map(list => {
                            return (
                              <Link to={list.link}>
                                <li key={list.categoryName}>
                                  {list.categoryName}
                                </li>
                              </Link>
                            );
                          })}
                        </div>
                      )}
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
                  <li>
                    <RiHeartAddLine size={20} /> S.W.A.P
                  </li>
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
  { categoryName: 'ALL MODELS', link: '/bagcategoryview' },
  { categoryName: 'BACK PACKS', link: '/bagcategoryview' },
  { categoryName: 'MESSENGER', link: '/bagcategoryview' },
  { categoryName: 'SHOPPER', link: '/bagcategoryview' },
  { categoryName: 'SHOULDER BAGS', link: '/bagcategoryview' },
  { categoryName: 'TOTE BAGS', link: '/bagcategoryview' },
  { categoryName: 'LAPTOP BAGS', link: '/bagcategoryview' },
  { categoryName: 'TRAVEL BAGS', link: '/bagcategoryview' },
  { categoryName: 'SPORTS BAGS', link: '/bagcategoryview' },
];
