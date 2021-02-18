import React, { Component } from 'react';
import { RiFilterLine } from 'react-icons/ri';
import BackpackList from './BackpackList';
import './Shop.scss';

export default class BackpackListbox extends Component {
  constructor() {
    super();
    this.state = {
      backpackdata: [],
      isdescOpen: false,
      backdescdata: [],
      isdescClose: true,
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
  }

  showDesc = e => {
    if (0 < e && e < 9) {
      window.scrollTo({ top: 242, behavior: 'smooth' });
    } else if (8 < e && e < 17) {
      window.scrollTo({ top: 400, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 422, behavior: 'smooth' });
    }

    const backpackdesc = this.state.backpackdata.filter(bag => {
      return bag.id === e;
    });

    this.setState({ backdescdata: backpackdesc, isdescOpen: true });
    console.log(backpackdesc);
  };

  descClose = () => {
    this.setState({ isdescOpen: false });
  };

  render() {
    const { backpackdata, backdescdata, isdescOpen, isdescClose } = this.state;
    return (
      <>
        <div className="store-bags-minihead">STORES - BAGS </div>
        <div className="bagpacks-furybighead">F132 bag</div>
        <div className="priceandfilter">
          <span className="f132-price">A BLAST FROM THE PAST, $346</span>
          <span className="filterlogo">
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

        <div className="product-btn">나만의 F132 FURY 선택하기</div>
      </>
    );
  }
}

const range = [
  { rangenumone: 0, rangenumtwo: 9 },
  { rangenumone: 8, rangenumtwo: 17 },
  { rangenumone: 16, rangenumtwo: 25 },
];
