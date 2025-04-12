import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const tarhedars = () => {
    return (
        <div style={{minHeight:"75vh"}} className='page-padding-tops'>
                <div style={{marginTop:"50px" , paddingTop:"50px" , paddingBottom:"50px"}} className='container bg-white rounded shadow border'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <h3 className='mb-4' style={{fontSize:"30px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e" , lineHeight:"1.9rem"}}>پشتیبانی</h3>
                            {/* <p className='text-end my-2' style={{fontSize:"15px" , fontFamily:"KalamehWeb-Medium" , color:"#000" , lineHeight:"1.9rem"}}>در صورت بروز مشکل، جهت برقراری ارتباط</p> */}
                            <p className='text-end my-2' style={{fontSize:"15px" , fontFamily:"KalamehWeb-Medium" , color:"#000" , lineHeight:"1.9rem"}}>در صورت بروز مشکل، جهت برقراری ارتباط، یا برای ارائه نمونه سوال، طرح درس، محتوا یا درسنامه آموزشی، از راه های زیر استفاده کنید</p>
                            <p className='text-end my-2' style={{fontSize:"15px" , fontFamily:"KalamehWeb-Medium" , color:"#000" , lineHeight:"1.9rem"}}>نکته: نمونه سوالات، طرح درس ها یا محتوای ارائه شده توسط شما با نام خودتان در سامانه ثبت خواهد شد.</p>
                            <p className='text-end my-2' style={{fontSize:"15px" , fontFamily:"KalamehWeb-Medium" , color:"#000" , lineHeight:"1.9rem"}}>آیدی شاد پشتیبانی: mohammad_lbf@</p>
                            <p className='text-center my-2' style={{fontSize:"15px" , fontFamily:"KalamehWeb-Medium" , color:"#000" , lineHeight:"1.9rem"}}>شماره تماس  : 09057488687</p>
                        </div>
                </div>
        </div>
    );
};

export default tarhedars;