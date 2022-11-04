import React from 'react';
import './Footer.css';
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import github from './github-blue.svg'
import linkedin from './linkedin.svg'

const Footer = () => {
    return (
        <div id='contact' className='App'>
            <h2 className='App-header'>
                Contact me
            </h2>
            <p className='App-concret'>
                I’m open to new opportunities. If you have one for me we should talk!
            </p>
            <div className='Social-buttons'>
                <a href='https://www.linkedin.com/in/tomasz-j%C4%85der-a25427200/' target='_blank' className='Social-button'>
                    <img src={linkedin} />
                </a>
                <a href='https://www.instagram.com/leonardo_davidoff/' target='_blank' className='Social-button'>
                    <img src={instagram} />
                </a>
                <a href='https://github.com/tomaszjader' target='_blank' className='Social-button'>
                    <img src={github} />
                </a>
                <a href="mailto:tomasz.jader@gmail.com" className='Sent-button'>tomasz.jader@gmail.com</a>
            </div>

            
        </div>
    );
}

export default Footer;