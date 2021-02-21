import React, { Component } from 'react';
import { RiFilterLine } from 'react-icons/ri';
import BackpackList from './BackpackList';
import ListDetail from './ListDetail';
import RecommendAcc from './RecommendAcc';
import './Shop.scss';

export default class BackpackListbox extends Component {
  constructor() {
    window.scrollTo({ top: 0 });

    super();
    this.state = {
      backpackdata: [],
      isdescOpen: true,
      backdescdata: [],
      recommendAccdata: [],
    };
  }

  componentDidMount() {
    fetch('http://172.20.10.3:8000/product/models', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          backpackdata: data.message[0],
          recommendAccdata: data.message[1],
        });
        console.log(data.message[0]);
      });

    // fetch('/data/recommendAcc.json')
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       recommendAccdata: data,
    //     });
    //     // console.log(data);
    //   });
    window.addEventListener('scroll', this.show);
  }

  showDesc = e => {
    if (0 < e && e < 9) {
      window.scrollTo({ top: 400, behavior: 'smooth' });
    } else if (8 < e && e < 17) {
      window.scrollTo({ top: 550, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 690, behavior: 'smooth' });
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

        {range.map((list, inx) => {
          return (
            <BackpackList
              key={inx}
              backpackdata={backpackdata}
              backdescdata={backdescdata}
              showDesc={this.showDesc}
              descClose={this.descClose}
              isdescOpen={isdescOpen}
              rangenumone={list.rangenumone}
              rangenumtwo={list.rangenumtwo}
            />
          );
        })}

        <ListDetail />

        <div className="recommendAceesoriesHead">완벽한 동반자</div>
        <RecommendAcc
          key={recommendAccdata.id}
          recommendAccdata={recommendAccdata}
        />
      </>
    );
  }
}

const range = [
  { rangenumone: 0, rangenumtwo: 9 },
  { rangenumone: 8, rangenumtwo: 17 },
  { rangenumone: 16, rangenumtwo: 25 },
];
