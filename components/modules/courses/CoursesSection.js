import React from 'react';
import Card from '../Card';

const CoursesSection = () => {
    return (
        <>
            {/* <h3 className="color-linear text-center text-lg-end">آزمون ها</h3> */}
            <div className="container px-0">
            <h3 style={{fontFamily:"KalamehWeb-Bold" , color:"#090736" , fontSize:"27px"}} className='lh-lg text-center mb-2'>دوره ها و کلاسهای آموزشی</h3>
            <div style={{maxWidth:"300px"}} className="lbf-after-card-img mb-4 mt-0 mx-auto"></div>
                <div className="row justify-content-center row-cols-xxl-4 row-cols-lg-2 row-cols-sm-1 row-cols-md-2 row-cols-xs-1">
                    <div className='col-sm d-flex justify-content-center'>
                    <Card
                     slug={`/courses/basicWord`}
                     coverPhoto={`/images/courses/termic/coverphoto.jpg`}
                     title={`دوره Word مقدماتی`}
                     caption={"در دوره مقدماتی ورد، اصول اولیه و کاربردهای اصلی Microsoft Word را می‌آموزید و مهارت‌های لازم برای ایجاد و ویرایش اسناد را کسب می‌کنید..."}
                     buttonText="مشاهده ی دوره"
                     />
                    </div>

          
                </div>
            </div>
        </>
    );
};

export default CoursesSection;