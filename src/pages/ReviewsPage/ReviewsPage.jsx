import React, { Component } from 'react';

import ReviewsItem from "../../components/RewiewsItem"
import {getReviewsById} from "../../components/Service/moviesService"

class ReviewsPage extends Component {
    state = {
        reviews: [],
        error: null
    };

  
     async componentDidMount() {
       const { movieId } = this.props.match.params;
       try {
         const { data } = await getReviewsById(movieId);
         this.setState({ reviews: data.results })
       }
       catch (error) {
                this.setState({
                    error
                })
            }
      }
  
    render(){
        const { reviews, error } = this.state;
    return (
      <>
       {error && <p>Не удалось загрузить страницу</p>}
        {!error &&
          <ul>
          <ReviewsItem reviews={reviews}/>
        </ul>}
      </>
    );
  }
}

 
export default ReviewsPage;

