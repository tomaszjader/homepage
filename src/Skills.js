import React from 'react';

import './Skills.css'
const Skills = () => {
    return (
        <div className='Skills'>

            <h2 className='SkillsHeader'>My skills</h2>
            <div className='SkillsConteiner'>
                <div className='SkillsConteinerConcret'>
                    <h3 className='SkillsEmoji'>💪</h3>
                    <h3 className='SkillsHeaderH3'>Working knowledge</h3>
                    <ul className={'SkillsList '+'SkillsListWorking'}>
                        <li>Semantic HTML5</li>
                        <li>Flexbox</li>
                        <li>Markdown</li>
                        <li>JS: Local storage</li>
                        <li>Figma</li>
                        <li>CSS grid</li>
                        <li>Forms</li>
                        <li>JS: DOM manipulations</li>
                        <li>SASS</li>
                    </ul>
                </div>
                <div className='SkillsConteinerConcret'>
                    <h3 className='SkillsEmoji'>🤔</h3>
                    <h3 className='SkillsHeaderH3'>Know something about</h3>
                    <ul className={'SkillsList '+'SkillsListKnow'}>

                        <li>JavaScript ES6 + features</li>
                        <li>CSS animations</li>
                        <li>Working with API</li>
                        <li>NPM Scripts</li>
                        <li>Progressive web apps</li>
                        <li>Git</li>
                        <li>Accessibility </li>

                    </ul>
                </div>
                <div className='SkillsConteinerConcret'>
                    <h3 className='SkillsEmoji'>🎓</h3>
                    <h3 className='SkillsHeaderH3'>Want to learn</h3>
                    <ul className={'SkillsList '+'SkillsListWant'} >
                        <li>React JS</li>
                        <li> Node JS</li>
                        <li>Electron</li>
                        <li>Server side rendering</li>
                        <li>Typecript</li>
                        <li>Gatsby</li>
                        <li>Websockets</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;