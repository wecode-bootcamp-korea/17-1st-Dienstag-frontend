import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Nav from './Components/Nav/Nav';
import BackpackListbox from './Pages/Shop/BackpackListBox';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          {/* <Route exact path="/" component={Main} /> */}
          <Route exact path="/" component={BackpackListbox} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
