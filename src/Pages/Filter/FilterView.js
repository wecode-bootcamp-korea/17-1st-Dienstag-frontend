import React, { Component } from 'react';
// import BackpackList from '../Shop/BackpackList';
import RecommendAcc from '../Shop/RecommendAcc';
import ListDetail from '../Shop/ListDetail';
// import '../Shop/Shop.scss';
import './FilterView.scss';
import { ProductConsumer } from '../../context';
import FilterViewList from './FilterViewList';

class FilterView extends Component {
  constructor() {
    window.scrollTo({ top: 0 });

    super();
    this.state = {
      isdescOpen: false,
      backdescdata: [],
      Accdata: [],
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
        console.log(data);
        this.setState({
          Accdata: data,
        });
      });
  }

  showDesc = (e, backpackdata) => {
    if (0 < e[0] && e[0] < 9) {
      window.scrollTo({ top: 400, behavior: 'smooth' });
    } else if (8 < e[0] && e[0] < 17) {
      window.scrollTo({ top: 550, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 690, behavior: 'smooth' });
    }

    const backpackdesc = backpackdata.filter(bag => {
      return bag.model_number === e[1];
    });

    this.setState({ backdescdata: backpackdesc, isdescOpen: true }, () => {});
  };

  descClose = () => {
    this.setState({ isdescOpen: false });
  };

  render() {
    const { backdescdata, isdescOpen, Accdata } = this.state;
    return (
      <>
        <div className="listCategoryHead">STORES - BAGS </div>
        <div className="baglistName">WHAT ARE YOU LOOKING FOR?</div>
        <ProductConsumer>
          {value => {
            return (
              <>
                {range.map((list, idx) => {
                  return (
                    <FilterViewList
                      key={idx}
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
              </>
            );
          }}
        </ProductConsumer>
        <ListDetail />

        <div className="recommendAceesoriesHead">완벽한 동반자</div>
        <RecommendAcc key={Accdata.id} recommendAccdata={Accdata} />
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
