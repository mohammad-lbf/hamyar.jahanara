import React from 'react';
import Card from '../Card';

const CoursesCards = () => {
    return (
        <>
            {/* <h3 className="color-linear text-center text-lg-end">آزمون ها</h3> */}
            <div className="container px-0 mt-4">
            <h3 style={{fontFamily:"KalamehWeb-Bold" , color:"#090736" , fontSize:"27px"}} className='lh-lg text-center mb-2'>آخرین دوره ها</h3>
            <div style={{maxWidth:"300px"}} className="lbf-after-card-img mb-4 mt-0 mx-auto"></div>
                <div className="row justify-content-center row-cols-xxl-4 row-cols-lg-2 row-cols-sm-1 row-cols-md-2 row-cols-xs-1">
                    <div className='col-sm d-flex justify-content-center'>
                    <Card
                     slug={`/courses/termic`}
                     coverPhoto={`/images/courses/termic/coverphoto.jpg`}
                     title={`دوره های ترمیک و فشرده`}
                     caption={"در این دوره زبان انگلیسی در کنار تدریس هر 4 مهارت اصلی زبان انگلیسی شامل:        Reading، Writing، Listening، Speaking و زیرمهارت های ..."}
                     buttonText="مشاهده ی دوره"
                     />
                    </div>

          
                </div>
            </div>
        </>
    );
};

export default CoursesCards;