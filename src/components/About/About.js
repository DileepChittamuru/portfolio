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
                        I am currently working as a Development Engineer for Abn Amro Bank Neterlands, where my passion for JavaScript development.
                        Building the web application using React.js, Redux, unit testing with jest, bundling the application using webpack and perfoimg code reviews for better performance and ensuring the 
                        standards as per organization.See my previous work history on <a href="https://www.linkedin.com/in/dileep-chittamuru-021128173/">LinkedIn</a>
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