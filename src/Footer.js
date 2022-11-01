import React from 'react';
import './Footer.css';
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import github from './github.svg'

const Footer = () => {
    return (
        <div className='App'>
            <h2 className='App-header'>
                Contact me
            </h2>
            <p className='App-concret'>
                I’m open for new opportunities. If you have one for me we should talk!
            </p>
            <div className='Social-buttons'>
                <div className='Social-button'>
                    <img src={facebook} />
                </div>
                <div className='Social-button'>
                    <img src={instagram} />
                </div>
                <div className='Social-button'>
                    <img src={github} />
                </div>
                <div className='Sent-button'>maciej@cotenfrontend.pl</div>
            </div>

            
        </div>
    );
}

export default Footer;