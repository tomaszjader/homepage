import React from 'react';
import './Header.css'
import tomaszjader from './tomaszjader.jpg'
const Header = () => {
    return (
        <div className='Header'>
            <h1>Hey there! 👋</h1>
            <img src={tomaszjader}></img>
            <h2>My name is Maciej and I’m an aspiring<br /><strong> Frontend developer</strong>and a keen Star Wars fan. </h2>
            <p>You might be interested in checking the list of <a href="#">my skills</a>. Don’t forget to  have a glimpse at<br/><a href="#">my projects</a>. Currently I’m looking for a new challenges so if you have one - <a href="#">contact me</a> 😊</p>
            <div className='Sent-button'>maciej@cotenfrontend.pl</div>
        </div>
    );
}

export default Header;