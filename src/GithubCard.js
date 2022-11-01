import React from 'react';
import './GithubCard.css'
import github from './github.svg'
const GitHubCard = () => {
    return (
        <div className='GitHubCard'>
            <div className='TabBar'>
                <div className='Dot'></div>
                <div className='Dot'></div>
                <div className='Dot'></div>
            </div>
            <div >
                <img src={github} className='GithubIcon'/>
            </div>
            <p>
                project:
                <strong className='GithubTitle'>podlaski git</strong> 
            </p>
            <p>
                description:
                podlaskie aliasy dla gitowych komend
            </p>
            <p>
                demo:
                {"<see here>"}
            </p>
            <p>
                github:
                {"<source code>"}
            </p>

        </div>
    );
}

export default GitHubCard;