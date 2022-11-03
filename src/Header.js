import React from 'react';
import './Header.css'
import tomaszjader from './tomaszjader.png'
import speechCloud from './speech-cloud.svg'
const Header = () => {
    return (
        <div className='Header'>
            <div className='HeaderHello'>
                <header className='HeaderSpeechCloud'>
                    <h1 >Hey there! 👋</h1>
                </header>

                <img src={speechCloud} alt="speech cloud" />
            </div>



            <div >
                <img src={tomaszjader} className='HeaderImage' />

            </div>

            <h2>My name is Maciej and I’m an aspiring<br /><strong className='HeaderDev'>Frontend developer</strong> and a keen Star Wars fan. </h2>
            <p className='HeaderParagraf'>You might be interested in checking the list of <a className='HeaderLinks' href="#">my skills</a>. Don’t forget to  have a glimpse at<br /><a href="#" className='HeaderLinks'>my projects</a>. Currently I’m looking for a new challenges so if you have one - <a href="#" className='HeaderLinks'>contact me</a> 😊</p>
            <div className='Sent-button'>maciej@cotenfrontend.pl</div>
        </div>
    );
}

export default Header;