import React, { useState } from 'react';
import GitHubCard from './GithubCard';
import './Projects.css'
import { useEffect } from 'react';


const Projects = () => {
    const [gitHubData, setGitHubData] = useState([]);
    useEffect(
        () => {
            fetch('https://gh-pinned-repos.egoist.dev/?username=tomaszjader')
                .then((response) => response.json())
                .then((data) => {
                    setGitHubData(data);
                    console.log(data);
                });
        }, []);
    return (
        <div id='projects' className='Projects'>
            <h2 className='ProjectHeader'>Recent projects</h2>
            <p className='ProjectParagraf'>I started my frontend developer path in 2003. Since then, I’ve built some projects. Here’s the list of the things I’ve done so far.</p>
            <div className='ProjectsGap'>
                <div className='ProjectsGitHubCards'>
                    <GitHubCard
                        project={gitHubData.length?gitHubData[0].repo:''}
                        description={gitHubData.length?gitHubData[0].description:''}
                        demo={gitHubData.length?gitHubData[0].website : ''}
                        gitHubLink={gitHubData.length?gitHubData[0].link :''} />
                    <GitHubCard
                        project={gitHubData.length?gitHubData[1].repo:''}
                        description={gitHubData.length?gitHubData[1].description:''}
                        demo={gitHubData.length?gitHubData[1].website : ''}
                        gitHubLink={gitHubData.length?gitHubData[1].link :''} />
                </div>
                <div className='ProjectsGitHubCards'>
                <GitHubCard
                        project={gitHubData.length?gitHubData[2].repo:''}
                        description={gitHubData.length?gitHubData[2].description:''}
                        demo={gitHubData.length?gitHubData[2].website : ''}
                        gitHubLink={gitHubData.length?gitHubData[2].link :''} />
                    <GitHubCard
                        project={gitHubData.length?gitHubData[3].repo:''}
                        description={gitHubData.length?gitHubData[3].description:''}
                        demo={gitHubData.length?gitHubData[3].website : ''}
                        gitHubLink={gitHubData.length?gitHubData[3].link :''} />
                </div>
            </div>


        </div>
    );
}

export default Projects;