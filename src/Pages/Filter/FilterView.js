import React, { Component } from 'react';
import BackpackList from '../Shop/BackpackList';
import RecommendAcc from '../Shop/RecommendAcc';
import ListDetail from '../Shop/ListDetail';
// import '../Shop/Shop.scss';
import './FilterView.scss';
import { ProductConsumer } from '../../context';

class FilterView extends Component {
  constructor() {
    window.scrollTo({ top: 0 });

    super();
    this.state = {
      isdescOpen: true,
      backdescdata: [],
      recommendAccdata: [],
    };
  }

  componentDidMount() {
    // fetch('/data/backpackdata.json', {
    //   method: 'GET',
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       backpackdata: data,
    //       // recommendAccdata: data.meesage[1],
    //     });
    //   });

    fetch('/data/recommendAcc.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          recommendAccdata: data,
        });
      });
    window.addEventListener('scroll', this.show);
  }

  showDesc = (e, backpackdata) => {
    if (0 < e && e < 9) {
      window.scrollTo({ top: 400, behavior: 'smooth' });
    } else if (8 < e && e < 17) {
      window.scrollTo({ top: 550, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 690, behavior: 'smooth' });
    }

    const backpackdesc = backpackdata.filter(bag => {
      return bag.id === e;
    });

    this.setState({ backdescdata: backpackdesc, isdescOpen: true });
  };

  descClose = () => {
    this.setState({ isdescOpen: false });
  };

  render() {
    const { backdescdata, isdescOpen, recommendAccdata } = this.state;
    return (
      <>
        <div className="listCategoryHead">STORES - BAGS </div>
        <div className="baglistName">WHAT ARE YOU LOOKING FOR?</div>
        <ProductConsumer>
          {value => {
            console.log(value.backpackdata);
            return (
              <>
                {range.map((list, inx) => {
                  return (
                    <BackpackList
                      key={inx}
                      backpackdata={value.backpackdata}
                      backdescdata={backdescdata}
                      showDesc={this.showDesc}
                      descClose={this.descClose}
                      isdescOpen={isdescOpen}
                      firstrange={list.rangenumone}
                      lastrange={list.rangenumtwo}
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
          }}
        </ProductConsumer>
      </>
    );
  }
}

export default FilterView;

const range = [
  { rangenumone: 0, rangenumtwo: 9 },
  { rangenumone: 8, rangenumtwo: 17 },
  { rangenumone: 16, rangenumtwo: 25 },
];
