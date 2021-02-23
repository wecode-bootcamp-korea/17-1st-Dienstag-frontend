import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Nav from './Components/Nav/Nav';
import BackpackListBox from './Pages/Shop/BackpackListBox';
import BagCategoryView from './Pages/Shop/BagCategoryView';
import SignUp from './Pages/SignUp/SignUp';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Cart/Checkout';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/bagcategoryview" component={BagCategoryView} />
          <Route exact path="/backpacklistbox" component={BackpackListBox} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
