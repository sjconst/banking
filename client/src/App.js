import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Footer from "./components/footer";
import NavTab from "./components/navtab";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Account from "./pages/Account";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";

function App() {
  const loggedIn = useSelector(state => state.login);  
  const Wrapper = () => {
    if(!loggedIn){
      return <Redirect to="/" />
    }
    return (
      <Route path="/Account" component={Account} />
    )
  }
   return (
    <Router>
      <div>
        <NavTab />
        <Switch>
        <Route exact path="/Account" component={Wrapper}/>  
          <Route path="/" component={Home}/>               
          <Route component={NoMatch} />
        </Switch>    
        <Footer />    
      </div>
    </Router>
  );
}

export default App;

