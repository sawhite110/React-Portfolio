import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/Navbar/NavTabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./components/Footer/index";

function App() {
  return (
    <div className="App">
      <Router>
        <NavTabs />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />           
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> 
        <Footer />
      </Router>
    </div>
  );
}

// const App = () => <PortfolioContainer />;

export default App;
