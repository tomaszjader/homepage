import React from 'react';
import './GithubCard.css'
import github from './github.svg'
const GitHubCard = ({project='', description='', demo='', gitHubLink=''}) => {
    return (
        <div className='GitHubCard'>
            <div className='TabBar'>
                <div className='Dot'></div>
                <div className='Dot'></div>
                <div className='Dot'></div>
            </div>
            <div className='GithubIcon'>
                <img src={github} />
            </div>
            <div className='GithubText'>
                <p className='GithubTextProject'>{"    "}
                    project:
                    <strong className='GithubTitle'>{project}</strong>
                </p>
                <p >
                    description:
                    {description}
                </p>
                <p className='GithubTextDemo'>
                    demo:
                    <strong className='GithubTextPading'
                    >{"<"}
                        <a href={demo} target='_blank'  className='GithubTextLinks'>{
                            "see here"
                        }</a>
                        {">"}
                    </strong>
                </p>
                <p className='GithubTextGithub'>
                    github:
                    <strng className='GithubTextPading'>
                        {"<"}
                        <a href={gitHubLink} target='_blank' className='GithubTextLinks'>{
                            "source code"
                        }
                        </a>
                        {">"}
                    </strng>
                </p>
            </div>
        </div>
    );
}

export default GitHubCard;