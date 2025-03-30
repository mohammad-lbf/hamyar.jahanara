import React from 'react';
import FirstBanner from '../modules/HomePage/FirstBanner';
import Properties from '../modules/HomePage/Properties';
import CoursesSection from '../modules/CoursesSection';
import CoursesCards from '../modules/courses/CoursesCards';
import CustomSlider from '../modules/HomePage/CustomSlider';
import InstagramBanner from '../modules/HomePage/InstagramBanner';


const HomePage = () => {
    return (
        <div className='cover-home-3 page-padding-tops'>
            <FirstBanner />
            {/* <IntroSection /> */}
            <div className='container-fluid'>
                <div className='row justify-content-center'>

                        <div className='mb-3 mt-3'>
                            <Properties />
                            <CoursesSection />
                            <CoursesCards />
                            <CustomSlider />
                            <InstagramBanner />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;