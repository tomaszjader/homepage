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
                <header className='HeaderSpeechCloud'>
                    <h1 >Hey there! 👋</h1>
                </header>
<div>
    
</div>
                <img src={speechCloud} alt="speech cloud" className='HeaderSpeechCloudEnd' />
                <div className='HeaderImageGrid'>
                    <img src={tomaszjader} className='HeaderImage' />
                </div>
            </div>




            <div className='HeaderContent'>
                <img src={bracketLeft} alt="bracket left" />
                <div className="HeaderText">
                    <h2 className="HeaderTextCenter">My name is Tomasz and I’m an aspiring<br /><strong className='HeaderDev'>Frontend developer</strong> and cryptocurrency fan. </h2>
                    <p className={'HeaderParagraf '+"HeaderTextCenter"}>You might be interested in checking the list of <a className='HeaderLinks' href="#">my skills</a>. Don’t forget to  have a glimpse at<br /><a href="#" className='HeaderLinks'>my projects</a>. Currently I’m looking for a new challenges so if you have one - <a href="#" className='HeaderLinks'>contact me</a> 😊</p>

                </div>
                <img src={bracketRight} alt="bracket right" />
            </div>


            <div className='Sent-button'>tomaszjader@gmail.com</div>
        </div>
    );
}

export default Header;