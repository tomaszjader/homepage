import React from 'react';
import './Header.css'
import tomaszjader from './tomaszjader.png'
import speechCloud from './speech-cloud.svg'
import bracketLeft from './bracket-left.svg'
import bracketRight from './bracket-right.svg'
const Header = () => {
    return (
        <div className='Header'>
            <div className='HeaderHello'>
                <div className='HeaderSpeechClouds'>
                    <header className='HeaderSpeechCloud'>
                        <h1 >Hey there! 👋</h1>
                    </header>
                    <div>

                    </div>
                    <img src={speechCloud} alt="speech cloud" className='HeaderSpeechCloudEnd' />
                </div>

                <div className='HeaderImageGrid'>
                    <img src={tomaszjader} className='HeaderImage' />
                </div>
            </div>




            <div className='HeaderContent'>
                <img className='HeaderBrackets' src={bracketLeft} alt="bracket left" />
                <div className="HeaderText">
                    <h2 className={"HeaderTextCenter "+"HeaderTextMargin"}>My name is Tomasz and I’m an aspiring<br /><strong className='HeaderDev'>Frontend developer</strong> and cryptocurrency fan. </h2>
                    <p className={'HeaderParagraf ' + "HeaderTextCenter"}>You might be interested in checking the list of <a className='HeaderLinks' href="#skills">my skills</a>. Don’t forget to  have a glimpse at<br /><a href="#projects" className='HeaderLinks'>my projects</a>. Currently I’m looking for new challenges so if you have one - <a href="#contact" className='HeaderLinks'>contact me</a> 😊</p>

                </div>
                <img className='HeaderBrackets' src={bracketRight} alt="bracket right" />
            </div>


            <a href="mailto:tomasz.jader@gmail.com" className='Sent-button'>tomasz.jader@gmail.com</a>
        </div>
    );
}

export default Header;