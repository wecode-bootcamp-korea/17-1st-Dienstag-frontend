import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import BackpackListBox from './Pages/Shop/BackpackListBox';
import BagCategoryView from './Pages/Shop/BagCategoryView';
import SignUp from './Pages/SignUp/SignUp';
import Main from './Pages/Main/Main';
import FilterView from './Pages/Filter/FilterView';
import NewsLetter from './Pages/newsletter/NewsLetter';

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
          <Route exact path="/filterview" component={FilterView} />
          <Route exact path="/newsletter" component={NewsLetter} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
