import React, { Component } from 'react';

import CastItem from "../../components/CastItem"
import {getCastById} from "../../components/Service/moviesService"

class CastPage extends Component {
    state = {
        casts: [],
        error: null
    };
 
     async componentDidMount() {
       const { movieId } = this.props.match.params;
       try {
        const { data } = await getCastById(movieId);
              this.setState({
                casts: data.cast,
              })
          }
           catch (error) {
                this.setState({
                    error
                })
            }
    }
  
  render() {
        const {error, casts} = this.state;
    return (<>
                  {error && <p>Не удалось загрузить страницу</p>}
                  {!error &&
                  <ul className="CastGallery">
                  <CastItem casts={casts}/>
                  </ul>}
            </>
        )    
       }
    }

 
export default CastPage;
