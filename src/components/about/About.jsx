import React from 'react';
import './About.css';
import Image from '../../assets/avatar-4.svg';
import Resume from '../../assets/Resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Shivam, and I'm based in Biahr, India. I studied at Nalanda College Biharsharif, where I completed my BCA.<br /><br />
                            Fastforward to today, and I can honestly say it's been a beautiful journery and I hope to grow even further as Software Engineer. My current focus these days
                            is on expanidng my portfolio by building more projects that I can add on here, as well as being a great team player at my current role.<br /><br />
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>HTML5</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About
