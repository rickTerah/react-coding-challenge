import React, { Component } from 'react';
import Card from './../../components/card/card';
import '../home/card.scss';
const apiEndpoint = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';

class Series extends Component {
    state = { 
        series: [],
        server_error: false
     }

     componentDidMount() {
        fetch(apiEndpoint)
        .then( response => response.json())
          .then( data => {
              const entries = data.entries;
              const totalseries = entries.filter(e => e.programType === 'series' && e.releaseYear >= 2010);
              const series = totalseries.slice(0, 21).sort((a, b) => (a.title > b.title) ? 1 : -1);
              this.setState({ series })
          }).catch((error) => {
            if(error){
                this.setState({server_error: true})
            }
        })
     }
    render() {
        if(this.state.server_error){
            return <p className="error-container">Ooops something went wrong...</p>
        }
         
        if(this.state.series.length === 0){
            return <p className="error-container"> Loading... </p>
        }
        
        return ( 
            <div className="section-card">
                <div className="card-container">
                    {this.state.series.map(serie => (
                        <Card image={serie.images['Poster Art'].url} title={serie.title} key={serie.title} />
                    ))}
                </div>
            </div>
        );
        
    }
}
 
export default Series;