import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, RouteComponentProps, Redirect } from 'react-router'
import Menu from "./Navbar/Menu";
import Usuarios from "./Usuarios";
import Login from "./Login";
import Footer from './Footer'

const App = () => (
  <BrowserRouter>
    <div style={{ height: '100vh', overflow: 'auto' }}>
      <Switch>
        <Route
          path='/'
          exact
          render={() => <Redirect to='/login' />} />
        <Route
          path='/home'
          exact
          render={(props: RouteComponentProps) =>
            <React.Fragment>
              <Menu {...props} />
              <Usuarios {...props} />
              <Footer {...props} />
            </React.Fragment>}
        />
        <Route
          path='/login'
          exact
          render={(props: RouteComponentProps) =>
            <React.Fragment>
              <Login {...props} />
              <Footer {...props} />
            </React.Fragment>}
        />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
