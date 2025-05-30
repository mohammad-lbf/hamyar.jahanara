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
                                    کتابهای درسی
                                </h2>
                                <p
                                className='mt-3 mb-4 mb-lg-0 text-center text-lg-end' 
                                style={{fontSize:"15px" , fontFamily:"KalamehWeb-Medium" , color:"#000" , lineHeight:"1.6rem"}}>برای دریافت جدیدترین ویرایش کتابهای درسی پایه خود، روی پایه مورد نظر کلیک کنید</p>
                            </div>
                            <div className='col-12 col-lg-5 text-center text-lg-start'>
                                    <Image style={{width:"100px" , height:"100px"}} src={"/images/components/modules/books.png"} height={512} width={512} />
                            </div>
                    </div>
                </div>
                <div style={{marginTop:"50px"}} className='container mb-4'>
                <div className='row align-items-center justify-content-center'>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"300px" , height:"185px"}}>
                                    <Link className='py-3 text-center' style={{width:"300px" , height:"185px"}} href={"/sevom/books"}>
                                        <Image style={{width:"100px" , height:"100px" }} src={"/images/components/modules/number-3.png"} width={512} height={512} />
                                        <p className='mt-4' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>کتابهای درسی پایه سوم</p>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"300px" , height:"185px"}}>
                                    <Link className='py-3 text-center' style={{width:"300px" , height:"185px"}} href={"/chaharom/books"}>
                                        <Image style={{width:"100px" , height:"100px" }} src={"/images/components/modules/number-4.png"} width={512} height={512} />
                                        <p className='mt-4' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>کتابهای درسی پایه چهارم</p>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"300px" , height:"185px"}}>
                                    <Link className='py-3 text-center' style={{width:"300px" , height:"185px"}} href={"/panjom/books"}>
                                        <Image style={{width:"100px" , height:"100px" }} src={"/images/components/modules/number-5.png"} width={512} height={512} />
                                        <p className='mt-4' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>کتابهای درسی پایه پنجم</p>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xl-4 col-xxl-3 d-flex justify-content-center'>
                                <div className='bg-white rounded border shadow-sm d-flex flex-column align-items-center mb-3' style={{width:"300px" , height:"185px"}}>
                                    <Link className='py-3 text-center' style={{width:"300px" , height:"185px"}} href={"/sheshom/books"}>
                                        <Image style={{width:"100px" , height:"100px" }} src={"/images/components/modules/number-6.png"} width={512} height={512} />
                                        <p className='mt-4' style={{fontSize:"20px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>کتابهای درسی پایه ششم</p>
                                    </Link>
                                </div>
                            </div>
                    </div>
                </div>
        </div>
    );
};

export default Books;