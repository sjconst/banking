import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer";
import NavTab from "./components/navtab";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Account from "./pages/Account";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <NavTab />
        <Switch>
          <Route exact path="/" component={Home} />   
          <Route exact path="/Accounts" component={Account} />       
          <Route component={NoMatch} />
        </Switch>    
        <Footer />    
      </div>
    </Router>
  );
}

export default App;

