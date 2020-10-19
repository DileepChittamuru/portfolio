
import React from 'react';
import axios from '../../axios';

class Home extends React.Component {
   
   state = {
      posts: [],
      selectedPostId: null,
      error: false
  }

  componentDidMount () {
   axios.get( '/posts' )
       .then( response => {
           const posts = response.data.slice(0, 4);
           const updatedPosts = posts.map(post => {
               return {
                   ...post,
                   author: 'Max'
               }
           });
            this.setState({posts: updatedPosts});
            console.log( this.state.posts );
       } )
       .catch(error => {
           // console.log(error);
           this.setState({error: true});
       });
   }

    render() {
       return (
          <div className="row">
            <div className="card col-4">
                <div className="card-body">
                    This is some text within a card body.
                </div>
            </div>
          </div>
       )
    }
  }
  export default Home;