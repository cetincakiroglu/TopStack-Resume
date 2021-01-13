import React from 'react'
import image1 from '../images/List-is-Empty.png';
import image2 from '../images/Finances.png';
import image3 from '../images/Call-Service.png';
import ImageItem from './ImageItem';
import AOS from 'aos';


const mainContent=[
    {
        heading:'Resume Writing',
        text:'The hiring landscape is changing. 75% of large companies use algorithms to screen through thousands of resumes when hiring. Our services are designed to help you stand out in today\'s hiring environment, double your interviews, and land that dream job.'
    },
    {
        heading:'Cover Letter Writing',
        text: 'While a well-crafted resume demonstrates a candidate\'s qualifications and previous work experience; cover letters round out the story and explain to an employer why a candidate is applying for a job. They are a critical step in persuading the hiring manager that a candidate would be great fit for a particular position.'
    },
    {
        heading:'LinkedIn Profile Writing',
        text:'LinkedIn is the most common platform for posting professional experience, education, and skills. It differs from a resume in several ways, and we optimize our customer\'s LinkedIn profiles to enhance their social media presence and seperate themselves in a highly competitive hiring environment.'
    },
    {
        heading:'Career Consulting',
        text: 'We provide individualized, 1x1 consulting to support our clients through their career transitions.',
        text2: 'We provide career consulting services for 60 days from the time of placing an order, with a maximum of 4 hours 1x1 consulting.'
    },
    {
        // 4
        heading: 'Collection',
        text: 'You fill out our simple online form with your career goals and most recent resume (if you have one).',
      
    },
    {
        // 5
        heading:'Cooperation',
        text: 'We assign your order to one of our eperienced, U.S.-based writers (this typically happens within 1 day).',
        img: '../images/Finances.png'
    },
    {
        // 6
        heading:'Collaboration',
        text: 'Your writer collaborates with you via email or phone to complete your documents and answer any questions.',
        img: '../images/Call-Service.png'
    }
]
function Main() {
    AOS.init();
    return (
        <>
        <div className="container">
            <div className="row mt-5 pt-md-5 pt-sm-5"  data-aos="fade-left" data-aos-duration="3000">
                <div className="col-md-12">
                    <h2>Our Services</h2>
                </div>
                <div className="row py-md-5 py-sm-0">
                    <div className="col-md-3 mt-sm-5 mt-md-0">
                        <div className="col-md-6 mb-md-5">
                            <h3>{mainContent[0].heading}</h3>
                        </div>
                            <p>{mainContent[0].text}</p>
                    </div>
                    <div className="col-md-3">
                        <div className="col-md-10 mb-md-5 mt-sm-5 mt-md-0">
                            <h3>{mainContent[1].heading}</h3>
                        </div>
                        <p>{mainContent[1].text}</p>
                    </div>
                    <div className="col-md-3">
                        <div class="col-md-10 mb-md-5 mt-sm-5 mt-md-0">
                            <h3>{mainContent[2].heading}</h3>
                        </div>
                        <p>{mainContent[2].text}</p>
                    </div>
                    <div className="col-md-3">
                        <div class="col-md-6 mb-md-5 mt-sm-5 mt-md-0">
                            <h3>{mainContent[3].heading}</h3>
                        </div>
                        <p className="mt-5">{mainContent[3].text}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row mt-5 d-flex">
                    <div className="col-md-6 order-md-1 order-sm-2 d-flex flex-column justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                        <div>
                            <h2 className="lh-lg">
                                {mainContent[4].heading}
                            </h2>
                            <p className="lh-lg">
                                {mainContent[4].text}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 order-sm-1 order-md-2" data-aos="fade-down" data-aos-duration="3000">
                        <ImageItem
                        src={image1}
                        />
                    </div>
            </div>
            <div className="row d-flex">
                <div className="col-md-6 order-md-1 order-sm-1" data-aos="fade-up" data-aos-duration="3000">
                    <ImageItem 
                    src={image2}
                    />
                </div>
                <div className="col-md-6 order-md-2 order-sm-2 d-flex flex-column justify-content-around" data-aos="fade-down" data-aos-duration="3000">
                    <div>
                        <h2 className="lh-lg">
                            {mainContent[5].heading}
                        </h2>
                        <p className="lh-lg">
                            {mainContent[5].text}
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mt-5 mb-5 d-flex">
                <div className="col-md-6 mt-md-5 order-md-1 order-sm-2 d-flex flex-column justify-content-around" data-aos="fade-up" data-aos-duration="3000">
                    <div>
                        <h2 className="lh-lg">
                            {mainContent[6].heading}
                        </h2>
                            <p className="lh-lg">
                                {mainContent[6].text}
                            </p>
                    </div>
                </div>
                <div className="col-md-6 order-sm-1 order-md-2" data-aos="fade-down" data-aos-duration="3000">
                    <ImageItem 
                    src={image3}
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Main;
