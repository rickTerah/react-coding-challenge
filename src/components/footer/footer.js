import React, { Component } from 'react';
import facebook_white from '../../assets/social/facebook-white.svg';
import twitter_white from '../../assets/social/twitter-white.svg';
import instagram_white from '../../assets/social/instagram-white.svg';
import app_store from '../../assets/store/app-store.svg';
import play_store from '../../assets/store/play-store.svg';
import windows_store from '../../assets/store/windows-store.svg';
import './footer.scss';

class Footer extends Component {
    linkItems = [
        {id: 1, link: '/home', name: 'Home'},
        {id: 2, link: '/terms', name: 'Terms and Conditions'},
        {id: 3, link: '/statement', name: 'Collection Statement'},
        {id: 4, link: '/help', name: 'Help'},
        {id: 5, link: '/account', name: 'Manage Account'}
    ]

    socialItems = [
        {id: 1, link: 'https://facebook.com/', source: facebook_white, alt: 'facebook'},
        {id: 2, link: 'https://twitter.com/', source: twitter_white, alt: 'twitter'},
        {id: 3, link: 'https://instagram.com/', source: instagram_white, alt: 'instagram'}
    ]

    storeItems = [
        {id: 1, link: 'https://app-store.com/', source: app_store, alt: 'app-store'},
        {id: 2, link: 'https://play-store.com/', source: play_store, alt: 'play-store'},
        {id: 3, link: 'https://windows-store.com/', source: windows_store, alt: 'window-store'}
    ]


    render() { 
        return ( 
            <footer className="footer">
                <div className="footer__navigation">
                    <ul className="footer__list">
                        {this.linkItems.map(linkItem => (
                            <li className="footer__item" key={linkItem.id}>
                                <a href={linkItem.link} className="footer__link">
                                    {linkItem.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="footer__copyright">
                    Copyright &copy; 2020 DEMO Streaming. All rights reserved.
                </p>
        
        <div className="social-store">
            <div className="social footer__social">
                <ul className="social-icons">
                    {this.socialItems.map(socialItem => (
                        <li className="social-list" key={socialItem.id}>
                        <a className="social-link" rel="noopener noreferrer" target="_blank" href={socialItem.link}>
                            <img className="social-icon" src={socialItem.source} alt={socialItem.alt} />
                        </a>
                    </li>
                    ))}
                </ul>
            </div> 
            <div className="social footer__social">
                <ul className="social-icons">
                    {this.storeItems.map(storeItem => (
                        <li className="store-list" key={storeItem.id}>
                            <a className="social-link" rel="noopener noreferrer" target="_blank" href={storeItem.link}>
                                <img className="store-icon" src={storeItem.source} alt={storeItem.alt} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div> 
        </div>
    </footer>
         );
    }
}
 
export default Footer;