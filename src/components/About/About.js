import React from 'react';
import './About.scss';
class About extends React.Component {
    render() {
       return (
          <div className="container">
               <div className="row">
                     <h4 className="mb-4">About:</h4>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                     <p className="mb-5">
                        I am full stack web devloper, worked on front end, backend and chatbot applications.
                        I am currently working as a web devloper for AbnAmro bank, where my passion for JavaScript development.
                        See my previous work history on <a href="https://www.linkedin.com/in/dileep-chittamuru-021128173/">LinkedIn</a>
                        &nbsp; specialized in the below skills
                     </p>
                     <p></p>
                  </div>
               </div>
          </div>
       )
    }
  }
  export default About;