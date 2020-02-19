import React from 'react';
import { Link } from 'react-router-dom';
import './bottomNav.scss';

const bottomNav = (props) => (
    <div className="navbar__low">
        <Link to="/" className="navbar__list-link">
            <h2 className="navbar__low-title">
                Popular Titles
            </h2>
        </Link>
    </div>
)
 
export default bottomNav;