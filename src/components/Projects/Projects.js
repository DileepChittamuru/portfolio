import React from 'react';
import './Projects.scss';

class Projects extends React.Component {
    render() {
       return (
        <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-12">
                <h6 className="text-center">Agile</h6>
                <p className="text-center">software development that helps teams deliver value to their customers faster</p>
            </div>
            <div className="col-lg-3 col-md-12">
                <h6 className="text-center">Responsive</h6>
                <p className="text-center">Bootstrap, the world’s most popular framework for building responsive, mobile-first sites</p>
            </div>
            <div className="col-lg-3 col-md-12">
                <h6 className="text-center">React / Angular / vue</h6>
                <p className="text-center">Building the web applications using latest modern front end framework</p>
            </div>
            <div className="col-lg-3 col-md-12">
                <h6 className="text-center">Node.js</h6>
                <p className="text-center">open source framework for buidling the back end services</p>
            </div>
        </div>
        
   </div>
        )
    }
  }
  export default Projects;