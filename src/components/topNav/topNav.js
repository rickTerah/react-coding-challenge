import React from 'react';
import './topNav.scss';
import {Link} from 'react-router-dom';

const topNav = (props) => {
    return ( 
    <div className="navbar">
        <Link to="/" className="navbar__list-link">
            <div className="nav__list-name">
                <span className="navbar__list-title">
                    DEMO Streaming
                </span>
            </div>
        </Link>
        <ul className="navbar__list">
            <li className="navbar__list-item">
                <a href="contact" className="navbar__list-link">
                    Log in
                </a>
            </li>

            <li className="navbar__list-item">
                <Link to="startProject" className="navbar__list-link btn btn-cta last">
                    Start your free trial
                </Link>
            </li>
        </ul>
    </div>
     );
}
 
export default topNav;