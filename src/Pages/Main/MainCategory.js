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
        console.log(data);
      });
  }

  render() {
    const { mainCategoryData } = this.state;
    return (
      <>
        <div className="shop">SHOP</div>
        <div className="categorycontainer">
          {mainCategoryData.map(category => {
            return (
              <div className="main-categorys">
                <Link to={category.link} style={{ textDecoration: 'none' }}>
                  <div className="main-categorycontainer">
                    <img
                      alt="main-category"
                      src={category.src}
                      className="main-categoryimg"
                    ></img>
                    <div className="main-categorytext">{category.name}</div>
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
