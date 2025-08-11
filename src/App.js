import React from 'react'
import Home from './app/views/home'
import './App.css'
const social = [
  { name: "GitHub", href: "https://github.com/yourname" },
  { name: "Twitter", href: "https://twitter.com/yourname" },
  { name: "LinkedIn", href: "https://linkedin.com/in/yourname" },
];

const projects = [
  { title: "Project One", desc: "A short description of project one.", url: "#" },
  { title: "Project Two", desc: "A short description of project two.", url: "#" },
  { title: "Project Three", desc: "A short description of project three.", url: "#" },
];

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Your Name</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="py-5 text-center bg-dark text-white">
      <div className="container">
        <h1 className="display-4">Hi — I’m <span className="text-info">Your Name</span></h1>
        <p className="lead">I design and build fast & delightful web apps. I work on front-end systems, UI, and simple APIs.</p>
        <div className="mt-4">
          <a href="#projects" className="btn btn-outline-light me-2">See projects</a>
          <a href="/resume.pdf" className="btn btn-primary">Resume</a>
        </div>
        <div className="mt-3">
          {social.map(s => (
            <a key={s.name} href={s.href} className="text-light me-3" target="_blank" rel="noreferrer">{s.name}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2>Recent projects</h2>
        <div className="row mt-4">
          {projects.map(p => (
            <div key={p.title} className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text">{p.desc}</p>
                  <a href={p.url} className="btn btn-sm btn-primary">View →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2>About</h2>
        <p>I’m a developer focused on creating accessible, performant web experiences. I enjoy crafting small libraries and iterating on UX problems that feel crisp and fast.</p>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="p-3 border rounded bg-white">
              <small className="text-muted">Location</small>
              <div>Your City</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 border rounded bg-white">
              <small className="text-muted">Experience</small>
              <div>5+ years</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 border rounded bg-white">
              <small className="text-muted">Focus</small>
              <div>Frontend & Design Systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div>© {new Date().getFullYear()} Your Name. Built with React + Bootstrap.</div>
        <div>
          {social.map(s => (
            <a key={s.name} href={s.href} className="text-light me-3">{s.name}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
       <Nav />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
