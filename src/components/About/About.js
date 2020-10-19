import React from 'react';

class About extends React.Component {
    render() {
       return (
          <div className="container-fluid">
             <section id="about" className="px-5 py-3">
                <div class="text-justify">
                   <h3 className="my-2">I enjoy working closely with design teams to faithfully translate their designs right down to the last pixel. Daily, you'll find me using modern frontend technologies that bring the creative process to life just as designers intended them to be.</h3>
                   <h4 className="my-2">Technical</h4>
                   <p class="text-muted">Right now you can find me hacking away primarily with Vue.js, Nuxt.js, Gridsome, Prismic CMS, GraphQL and in general anything JavaScript, HTML and CSS related. Also been known to dabble in React.js and Gatsby from time to time or wrestling with Webpack.</p>
                   <h4>Personal</h4>
                   <p class="text-muted">I grew up in Nottingham and moved to London many years ago. Being half Italian and half British, I try to visit family in Sicily whenever I can to practice (struggling) with the basics of the language.</p><p>Allora, lavoriamo insieme!</p></div></section>
          </div>
       )
    }
  }
  export default About;