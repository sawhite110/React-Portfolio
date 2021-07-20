import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/Navbar/NavTabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
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
