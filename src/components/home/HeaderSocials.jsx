import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter} from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://www.github.com/shivamsaurabh25' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            {/* <a href='https://hashnode.com/@gregsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHashnode />
            </a> */}

            {/* <a href='https://dev.to/gregsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev />
            </a> */}

            <a href='https://www.linkedin.com/in/shivam-saurabh-095764195/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://wwww.facebook.com/shivam.saurabh.714' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            <a href='https://x.com/Shivam2862' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
