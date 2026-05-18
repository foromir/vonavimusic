import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routers';
import './sass/App.sass';

class App extends Component {
  render() {
    return (
      <Switch>
        {routes.map((route, index) => (
          <Route
            exact={route.exact}
            path={route.path}
            key={index}
            render={props => <route.component {...props} />}
          />
        ))}
      </Switch>
    );
  }
}

export default App;
