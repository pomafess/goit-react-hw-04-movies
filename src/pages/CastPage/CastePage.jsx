import React, { Component } from 'react';

import {getCastById} from "../../components/Service/moviesService"

class CastPage extends Component {
    state = {
        casts: [],
        error: null
    };

     async componentDidMount() {
    const {movieId} = this.props.match.params
        const { data } = await getCastById(movieId);
         this.setState({ casts: data.cast})
         console.log(data.cast)
        }
  render() {
        const castItem = this.state.casts.map(({ id, name, character, profile_path }) => (
            <li key={id} className="CastGalleryItem">
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w92/${profile_path}`
                    : "Фото не найдено"
                }
                alt={name}
                width="92"
                className="CastGalleryItem-image"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))
        return (<>
            
        <ul className="CastGallery">
          {castItem}
            </ul>
        </>
        )    
        }
    }

 
export default CastPage;
