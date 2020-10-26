import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
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
        <nav className="navbar navbar-dark navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand mr-auto" href="./index.html">Dileep Chittamuru</a>
              <div className="collapse navbar-collapse" id="Navbar">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item active"><a class="nav-link" href="./index.html"><span className="fa fa-home fa-lg"></span> Home</a></li>
                      <li className="nav-item"><a class="nav-link" href="#home"><span className="fa fa-info fa-lg"></span> About</a></li>
                      <li className="nav-item"><a class="nav-link" href="#contact"><span className="fa fa-address-card fa-lg"></span> Contact</a></li>                  
                  </ul>               
              </div>
              
          </div>
        </nav>
        <div class="container content mb-5">
          <section id="home"><Home/></section>
          <section id="about"><About/></section>
          <section id="projects"><Projects/></section>
          <section id="contact"><Contact/></section>
        </div>
        <footer id="main-footer">
          <div class="footer-content container">
            <p className="text-center">Copyright &copy; 2020. All Rights Reserved</p>
          </div>
        </footer>
      </div> 
    );
  }
}

export default App;






