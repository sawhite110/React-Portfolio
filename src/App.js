import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
// import PortfolioContainer from "./components/PortfolioContainer";
// import About from "./components/pages/About";
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavTabs />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfilio">
            <Portfolio />           
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>     
      </Router>
    </div>
  );
}

// const App = () => <PortfolioContainer />;

export default App;
