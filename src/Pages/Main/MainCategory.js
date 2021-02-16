import React, { Component } from 'react';

class MainCategory extends Component {
  render() {
    return (
      <>
        <div className="shop">SHOP</div>
        <div className="categorycontainer">
          <div className="main-categorys">
            <div className="main-categorycontainer">
              <img
                alt="main-category"
                src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fG1lc3NlbmdlciUyMGJhZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                className="main-categoryimg"
              ></img>
              <div className="main-categorytext">BACKPACK</div>
            </div>
          </div>
          <div className="main-categorys">
            <div className="main-categorycontainer">
              <img
                alt="main-category"
                src="https://images.unsplash.com/photo-1458836229581-464bd8518d67?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lc3NlbmdlciUyMGJhZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                className="main-categoryimg"
              ></img>
              <div className="main-categorytext">MESSENEGER</div>
            </div>
          </div>
          <div className="main-categorys">
            <div className="main-categorycontainer">
              <img
                alt="main-category"
                src="https://images.unsplash.com/photo-1601592996763-f05c9c80a7f1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyZCUyMHdhbGxldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                className="main-categoryimg"
              ></img>
              <div className="main-categorytext">ACCESSORIES</div>
            </div>
          </div>
          <div className="main-categorys">
            <div className="main-categorycontainer">
              <img
                alt="main-category"
                src="https://images.unsplash.com/photo-1572196284554-4e321b0e7e0b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8YmFnfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                className="main-categoryimg"
              ></img>
              <div className="main-categorytext">TOTEBAG</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainCategory;
