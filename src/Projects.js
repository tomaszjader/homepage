import React from 'react';
import GitHubCard from './GithubCard';
import './Projects.css'

const Projects = () => {
    return (
        <div className='Projects'>
            <h2 className='ProjectHeader'>Recent projects</h2>
            <p className='ProjectParagraf'>I started my frontend developer path in 2003. Since then, I’ve built some projects. Here’s the list of the things I’ve done so far.</p>
            <div className='ProjectsGap'>
                <div className='ProjectsGitHubCards'>
                    <GitHubCard></GitHubCard>
                    <GitHubCard></GitHubCard>
                </div>
                <div className='ProjectsGitHubCards'>
                    <GitHubCard></GitHubCard>
                    <GitHubCard></GitHubCard>
                </div>
            </div>


        </div>
    );
}

export default Projects;