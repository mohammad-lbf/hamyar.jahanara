import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Books = () => {
    const router = useRouter();
  
    useEffect(() => {
      const isAuthenticated = Cookies.get('auth');
      if (isAuthenticated !== 'true') {
        router.push('/login'); // هدایت به صفحه لاگین در صورت عدم احراز هویت
      }
    }, []);
    
    return (
        <div style={{minHeight:"100vh"}} className='page-padding-tops'>
                <div style={{marginTop:"50px" , paddingTop:"50px" , paddingBottom:"50px"}} className='container bg-white rounded shadow border'>
                    <div className='row align-items-center'>
                            <div className='col-12 col-lg-7'>
                                <h2 className='text-center text-lg-end' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>
                                    کتابهای درسی پایه سوم
                                </h2>
                                <p
                                className='mt-3 mb-4 mb-lg-0 text-center text-lg-end' 
                                style={{fontSize:"15px" , fontFamily:"KalamehWeb-Medium" , color:"#000" , lineHeight:"1.6rem"}}>برای دریافت فایل کتاب، روی دریافت فایل کلیک کنید</p>
                            </div>
                            <div className='col-12 col-lg-5 text-center text-lg-start'>
                                    <Image style={{width:"100px" , height:"100px"}} src={"/images/components/modules/books.png"} height={512} width={512} />
                            </div>
                    </div>
                </div>
                <div style={{marginTop:"50px"}} className='container mb-4'>
                <div className='row align-items-center justify-content-center'>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/components/modules/books/sevom/farsi.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>فارسی سوم</p>
                                        <a className='btn-main-2 text-white mt-4' href="https://dl.heyvagroup.com/admin/Files/upload/farsi_sevom.pdf" download>دریافت فایل</a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/components/modules/books/sevom/riazi.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>ریاضی سوم</p>
                                        <a className='btn-main-2 text-white mt-4' href="https://dl.heyvagroup.com/admin/Files/upload/riazi_sevom.pdf" download>دریافت فایل</a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/components/modules/books/sevom/oloom.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>علوم سوم</p>
                                        <a className='btn-main-2 text-white mt-4' href="https://dl.heyvagroup.com/admin/Files/upload/oloom_sevom.pdf" download>دریافت فایل</a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/components/modules/books/sevom/quran.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>قرآن سوم</p>
                                        <a className='btn-main-2 text-white mt-4' href="https://dl.heyvagroup.com/admin/Files/upload/ghoran_sevom.pdf" download>دریافت فایل</a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/components/modules/books/sevom/negaresh.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>نگارش سوم</p>
                                        <a className='btn-main-2 text-white mt-4' href="https://dl.heyvagroup.com/admin/Files/upload/negaresh_sevom.pdf" download>دریافت فایل</a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/components/modules/books/sevom/motaleat.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>مطالعات اجتماعی سوم</p>
                                        <a className='btn-main-2 text-white mt-4' href="https://dl.heyvagroup.com/admin/Files/upload/motaleat_sevom.pdf" download>دریافت فایل</a>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white py-3 rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"230px" , height:"270px"}}>
                                    
                                        <Image className='rounded border' style={{width:"100px" , height:"130px" }} src={"/images/components/modules/books/sevom/hedye.jpg"} width={230} height={320} />
                                        <p className='mt-3' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}> هدیه های آسمان سوم</p>
                                        <a className='btn-main-2 text-white mt-4' href="https://dl.heyvagroup.com/admin/Files/upload/hediyeha_sevom.pdf" download>دریافت فایل</a>
                                </div>
                            </div>
                    </div>
                </div>
        </div>
    );
};

export default Books;