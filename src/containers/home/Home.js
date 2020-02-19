import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Card from './../../components/card/card';
import movieImage from '../../assets/movies.PNG';
import seriesImage from '../../assets/series.PNG';
import './card.scss';

class Index extends Component {
    state = {
        homeItems: [
            {id: 1, image: seriesImage, title: 'Popular Series', link: '/series'},
            {id: 2, image: movieImage, title: 'Popular Movies', link: '/movies'}
        ]
    }
    render() { 
        return ( 
            <div className="home-container">
                <div class="section-card">
                <div className="card-container">
                    {this.state.homeItems.map(homeItem => (
                        <NavLink className="card-link" to={homeItem.link} key={homeItem.id}>
                            <Card image={homeItem.image} title={homeItem.title} />
                       </NavLink>
                    ))}
                </div>
            </div>
            </div>
         );
    }
}
 
export default Index;