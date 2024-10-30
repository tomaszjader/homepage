import React, { useState } from 'react';
import GitHubCard from './GithubCard';
import './Projects.css'
import { useEffect } from 'react';


const Projects = () => {
    const [gitHubData, setGitHubData] = useState([]);
    useEffect(
        () => {
            fetch('https://api.github.com/users/tomaszjader/repos')
                .then((response) => response.json())
                .then((data) => {
                    const newData =data.filter(
                        (repo) => repo.description && repo.homepage
                      );
                    setGitHubData(newData);
                    console.log(newData);
                });
        }, []);
    return (
        <div id='projects' className='Projects'>
            <h2 className='ProjectHeader'>Recent projects</h2>
            <p className='ProjectParagraf'>I started my developer path in 2020. Since then, I’ve built multiple projects. Here’s the list of some of the things I’ve done so far.</p>
            <div className='ProjectsGap'>
                <div className='ProjectsGitHubCards'>
                    <GitHubCard
                        project={gitHubData.length?gitHubData[0].name:''}
                        description={gitHubData.length?gitHubData[0].description:''}
                        website={gitHubData.length?gitHubData[0].homepage : ''}
                        link={gitHubData.length?gitHubData[0].html_url :''} />
                    <GitHubCard
                        project={gitHubData.length?gitHubData[1].name:''}
                        description={gitHubData.length?gitHubData[1].description:''}
                        website={gitHubData.length?gitHubData[1].homepage : ''}
                        link={gitHubData.length?gitHubData[1].html_url :''} />
                </div>
                <div className='ProjectsGitHubCards'>
                <GitHubCard
                        project={gitHubData.length?gitHubData[2].name:''}
                        description={gitHubData.length?gitHubData[2].description:''}
                        website={gitHubData.length?gitHubData[2].homepage : ''}
                        link={gitHubData.length?gitHubData[2].html_url :''} />
                    <GitHubCard
                        project={gitHubData.length?gitHubData[3].name:''}
                        description={gitHubData.length?gitHubData[3].description:''}
                        website={gitHubData.length?gitHubData[3].homepage: ''}
                        link={gitHubData.length?gitHubData[3].html_url :''} />
                </div>
            </div>


        </div>
    );
}

export default Projects;