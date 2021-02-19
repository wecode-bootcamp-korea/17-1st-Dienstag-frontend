import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

class MainCategory extends Component {
  constructor() {
    super();
    this.state = { mainCategoryData: [] };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/mainCategoryData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          mainCategoryData: data,
        });
      });
  }

  render() {
    const { mainCategoryData } = this.state;
    return (
      <>
        <div className="shop">SHOP</div>
        <div className="categoryContainer">
          {mainCategoryData.map(category => {
            return (
              <div key={category.id} className="mainCategorys">
                <Link to={category.link}>
                  <div className="mainCategoryContainer">
                    <div>
                      <img
                        alt="main-category"
                        src={category.src}
                        className="mainCategoryImg"
                      />
                    </div>
                    <div className="mainCategoryText">{category.name}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default MainCategory;
