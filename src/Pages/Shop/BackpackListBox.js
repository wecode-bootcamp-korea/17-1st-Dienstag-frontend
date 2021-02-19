import React, { Component } from 'react';
import { RiFilterLine } from 'react-icons/ri';
import BackpackList from './BackpackList';
import ListDetail from './ListDetail';
import RecommendAcc from './RecommendAcc';
import './Shop.scss';

export default class BackpackListbox extends Component {
  constructor() {
    super();
    this.state = {
      backpackdata: [],
      isdescOpen: true,
      backdescdata: [],
      isdescClose: true,
      recommendAccdata: [],
    };
  }

  componentDidMount() {
    fetch('/data/backpackdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          backpackdata: data,
        });
      });
    fetch('/data/recommendAcc.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          recommendAccdata: data,
        });
      });
  }

  showDesc = e => {
    if (0 < e && e < 9) {
      window.scrollTo({ top: 242, behavior: 'smooth' });
    } else if (8 < e && e < 17) {
      window.scrollTo({ top: 400, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 558, behavior: 'smooth' });
    }

    const backpackdesc = this.state.backpackdata.filter(bag => {
      return bag.id === e;
    });

    this.setState({ backdescdata: backpackdesc, isdescOpen: true });
  };

  descClose = () => {
    this.setState({ isdescOpen: false });
  };

  render() {
    const {
      backpackdata,
      backdescdata,
      isdescOpen,
      isdescClose,
      recommendAccdata,
    } = this.state;

    return (
      <>
        <div className="listCategoryHead">STORES - BAGS </div>
        <div className="baglistName">MIAMI</div>
        <div className="priceandFilter">
          <span className="price">A BLAST FROM THE PAST, $346</span>
          <span className="filterLogo">
            <RiFilterLine size={20} /> filter
          </span>
        </div>

        {range.map(list => {
          return (
            <BackpackList
              backpackdata={backpackdata}
              backdescdata={backdescdata}
              showDesc={this.showDesc}
              descClose={this.descClose}
              isdescOpen={isdescOpen}
              isdescClose={isdescClose}
              rangenumone={list.rangenumone}
              rangenumtwo={list.rangenumtwo}
            />
          );
        })}

        <ListDetail />
        <div className="recommendAceesoriesHead">완벽한 동반자</div>

        <RecommendAcc recommendAccdata={recommendAccdata} />
      </>
    );
  }
}

const range = [
  { rangenumone: 0, rangenumtwo: 9 },
  { rangenumone: 8, rangenumtwo: 17 },
  { rangenumone: 16, rangenumtwo: 25 },
];
