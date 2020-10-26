import React from 'react';
import './Projects.scss';

class Projects extends React.Component {
    render() {
       return (
        <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-2 col-sm-1">
                <h4 className="text-center">Agile</h4>
                <p className="text-center">An iterative approach to project management and software development that helps teams deliver value to their customers faster</p>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-1">
                <h4 className="text-center">Responsive</h4>
                <p className="text-center">Bootstrap, the world’s most popular framework for building responsive, mobile-first sites</p>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-1">
                <h4 className="text-center">React/Angular/vue</h4>
                <p className="text-center">Bootstrap, the world’s most popular framework for building responsive, mobile-first sites</p>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-1">
                <h4 className="text-center">Node.js</h4>
                <p className="text-center">Bootstrap, the world’s most popular framework for building responsive, mobile-first sites</p>
            </div>
        </div>
   </div>
        )
    }
  }
  export default Projects;