import React from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import ImageItem from './ImageItem';
import image from '../images/Connection-Lost.png';


const textContent = [
    {
        id:1,
        text:' We rewrite your resume to help you excel in your career.'
    },
    {
        id:2,
        text: 'Our services are designed to help you stand out in today\'s hiring environment, double your interviews, and land that dream job.'
    }
]

function HeroSection() {
    AOS.init();
    return (
        <div id="hero_container" className="container">
            <div className='row'>
                <div id="hero-text" className="col-12 mt-md-5 d-flex">
                    <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-around"  data-aos="fade-right" data-aos-duration="3000">
                        <div>
                            <h1 className="lh-sm mt-sm-5 mt-md-0">
                               {textContent[0].text}
                            </h1>
                            <div className="col-10 mt-4">
                                <p className="lh-lg">{textContent[1].text}</p>
                            </div>
                            <div className="col-md-6 col-sm-12 mt-4 d-flex justify-content-between">
                                <Button>Try For Free</Button>
                                <Link to='/'>
                                <Button id="link_btn">See Pricing</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 text-center d-sm-none d-md-block" data-aos="fade-left" data-aos-duration="3000">
                        <ImageItem 
                            src={image}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
