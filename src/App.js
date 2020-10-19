import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
         <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">Prime</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-item nav-link" to="/home"> </Link>
                  <Link className="nav-item nav-link" to="/about">About</Link>
                  <Link className="nav-item nav-link" to="/projects">Projects</Link>
                  <Link className="nav-item nav-link" to="/contact">Contact</Link>
                </div>
              </div>
            </nav>
            <Switch className="container">
              <Route path="/about"><About /></Route>
              <Route path="/contact"><Contact /></Route>
              <Route path="/projects"><Projects /></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;






