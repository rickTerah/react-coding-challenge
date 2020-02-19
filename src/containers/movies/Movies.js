import React, { Component } from 'react';
import Card from './../../components/card/card';
import '../home/card.scss';
const apiEndpoint = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';

class Movies extends Component {
    state = { 
        movies: [],
        server_error: false
     }

     componentDidMount() {
        fetch(apiEndpoint)
        .then( response => response.json())
          .then( data => {
              const entries = data.entries;
              const totalMovies = entries.filter(e => e.programType === 'movie');
              const movies = totalMovies.slice(0, 21).sort((a, b) => (a.title > b.title) ? 1 : -1);
              this.setState({ movies })
          }).catch((error) => {
            if(error){
                this.setState({server_error: true})
            }
        })
     }
    render() { 
        if(this.state.movies.length === 0){
            return <p>Loading...</p>
        }
        if(this.state.server_error){
            return <p>Ooops something went wrong....</p>
        }
        return ( 
            <div className="section-card">
                <div className="card-container">
                    {this.state.movies.map(movie => (
                        <Card image={movie.images['Poster Art'].url} title={movie.title} key={movie.title}/>
                    ))}
                </div>
            </div>
            );
    }
}
 
export default Movies;