import React, { Component } from 'react';
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

class FnavModal extends Component {
  constructor() {
    super();
    this.state = {
      openShop: true,
      isbagsclick: false,
      isShopsclick: false,
      openbags: true,
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

  render() {
    const { isnavopen, openNav } = this.props;
    const { isbagsclick, isShopsclick, openbags, openShop } = this.state;
    return (
      <div>
        {!isnavopen && (
          <>
            <div className="modaloutside" onClick={openNav}></div>
            <div className="modalNavcontainer">
              <ul>
                <li></li>
                <li className="loginen">
                  <span>
                    <RiUser3Line size={20} /> LOGIN
                  </span>
                  <div>
                    <img alt="korea" className="ko" src={korea} />
                    <span> KO</span>
                  </div>
                </li>
                <ul className="searchstores">
                  <div>
                    <AiOutlineSearch size={20} /> SEARCH
                  </div>
                  <div>
                    <MdStoreMallDirectory size={20} /> STORES
                  </div>
                </ul>
                <div className="navlist">
                  <li onClick={this.shopOpen} className="shop_list">
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
                    <ul className="shopcate">
                      <li>BESTSELLERES</li>
                      <li>ONLINE SPECIALS</li>

                      <li onClick={this.bagsOpen} className="bags_list">
                        <span>BAGS</span>
                        <div
                          className="bagsArrow"
                          style={{ transform: isbagsclick && 'rotate(180deg)' }}
                        >
                          <MdKeyboardArrowDown size={20} />
                        </div>
                      </li>
                      {!openbags && (
                        <div className="bags_lists">
                          <li>ALL MODELS</li>
                          <li>BACK PACKS</li>
                          <li>MESSENGER</li>
                          <li>SHOPPER</li>
                          <li>SHOULDER BAGS</li>
                          <li>TOTE BAGS</li>
                          <li>LAPTOP BAGS</li>
                          <li>TRAVEL BAGS</li>
                          <li>SPORTS BAGS</li>
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

                  <div className="navbottomicons">
                    <div className="nav_bottom_iconscontainer">
                      <RiNewspaperLine size={20} />
                      <RiInstagramLine size={20} />
                      <FaFacebookF size={20} />
                    </div>
                    <div className="nav_bottom_dienstagmark">
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

export default FnavModal;
