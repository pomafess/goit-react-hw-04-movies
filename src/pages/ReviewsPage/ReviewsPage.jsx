import React, { Component } from 'react';

import {getReviewsById} from "../../components/Service/moviesService"

class ReviewsPage extends Component {
    state = {
        reviews: [],
        error: null
    };

     async componentDidMount() {
        const {movieId} = this.props.match.params
        const { data } = await getReviewsById(movieId);
         this.setState({ reviews: data.results})
        }
    render(){
        const { reviews, error } = this.state;
        const reviewsItem = reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4> Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))
    return (
      <>
        <ul>
          {reviewsItem}
        </ul>
        {error && <h3 className="ErrorMessage">{error.message}</h3>}
      </>
    );
  }
}

 
export default ReviewsPage;

