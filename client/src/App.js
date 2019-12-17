import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory, useLocation } from "react-router-dom";
import Footer from "./components/footer";
import NavTab from "./components/navtab";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Account from "./pages/Account";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";

function App() {
  const loggedIn = useSelector(state => state.login);  
  function PrivateRoute({ children, ...rest}){
    return (
      <Route 
      {...rest}
      render={({ location }) =>
      loggedIn ? (
        children
      ) : (
        <Redirect to={{
          pathname: "/",
          state: { from: location }
        }}
        />
      )
    }
    />
    );
  };
  return (
    <Router>
      <div>
        <NavTab />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <PrivateRoute path="/Account">
            <Account />
          </PrivateRoute>
          <Route component={NoMatch} />
        </Switch>    
        <Footer />    
      </div>
    </Router>
  );
}

export default App;

