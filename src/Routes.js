import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Nav from './Components/Nav/Nav';
import BackpackListBox from './Pages/Shop/BackpackListBox';
import BagCategoryView from './Pages/Shop/BagCategoryView';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          {/* <Route exact path="/" component={Main} /> */}
          <Route exact path="/" component={BagCategoryView} />
          <Route exact path="/backpacklistbox" component={BackpackListBox} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
