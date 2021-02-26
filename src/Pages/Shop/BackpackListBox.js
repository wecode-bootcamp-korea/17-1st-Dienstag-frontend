import React, { Component } from 'react';
import { RiFilterLine } from 'react-icons/ri';
import BackpackList from './BackpackList';
import ListDetail from './ListDetail';
import RecommendAcc from './RecommendAcc';
import './BackpackListbox.scss';
import { ProductConsumer } from '../../context';

export default class BackpackListbox extends Component {
  constructor() {
    super();
    this.state = {
      backpackdata: [],
      isdescOpen: false,
      backdescdata: [],
      recommendAccdata: [],
    };
  }

  componentDidMount() {
    fetch(`http://10.58.1.184:8000/product/model?bag_model=1`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          backpackdata: data.ModelList,
          recommendAccdata: data.RecommendationList,
        });
      });

    window.scrollTo({ top: 0 });
  }

  showDesc = e => {
    console.log(this.state.backpackdata[0]);
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
      <ProductConsumer>
        {value => {
          return (
            <div className="BackpackListbox">
              <div className="listCategoryHead">STORES - BAGS </div>
              <div className="baglistName">MIAMI</div>
              <div className="priceandFilter">
                <span className="price">A BLAST FROM THE PAST, $346</span>
                <span className="filterLogo" onClick={value.openFilter}>
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
                    firstrange={list.firstrange}
                    lastrange={list.lastrange}
                  />
                );
              })}

              <ListDetail />

              <div className="recommendAceesoriesHead">완벽한 동반자</div>
              <RecommendAcc
                key={recommendAccdata.id}
                recommendAccdata={recommendAccdata}
              />
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

const range = [
  { firstrange: 0, lastrange: 9 },
  { firstrange: 8, lastrange: 17 },
  { firstrange: 16, lastrange: 25 },
];
