
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const chaharom = () => {
    return (
        <div style={{minHeight:"100vh"}} className='page-padding-tops'>
    <div style={{marginTop:"50px" , paddingTop:"50px" , paddingBottom:"50px"}} className='container bg-white rounded shadow border'>
    <div className='row align-items-center'>
            <div className='col-12 col-lg-7'>
                <h2 className='text-center text-lg-end' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>
                    پایه چهارم دبستان
                </h2>
                <p
                className='mt-3 mb-4 mb-lg-0 text-center text-lg-end' 
                style={{fontSize:"15px" , fontFamily:"KalamehWeb-Medium" , color:"#000" , lineHeight:"1.6rem"}}>پایه چهارم دبستان | سامانه همیار معلم دبستان جهان آرا</p>
            </div>
            <div className='col-12 col-lg-5 text-center text-lg-start'>
                    <Image style={{width:"100px" , height:"100px"}} src={"/images/components/modules/number-4.png"} height={512} width={512} />
            </div>
    </div>
</div>

            <h3 style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}} className='mb-4 text-center mt-4 pt-4'>ابزار های سامانه | پایه چهارم</h3>
        <div className='container'>
                    <div className='row justify-content-center'>
            <div className='col-12 col-lg-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                <Link href={"/chaharom/soalat"}>
                <div className='hover-up-element d-flex align-items-center bg-white rounded border py-2 px-3'>
                    <Image style={{width:"60px" , height:"60px"}} width={512} height={512} src={"/images/components/modules/tests.png"} />
                    <span className='me-3' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>نمونه سوال</span>
                </div>
                </Link>
            </div>
            <div className='col-12 col-lg-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                <Link href={"/chaharom/tarhedars"}>
                <div className='hover-up-element d-flex align-items-center bg-white rounded border py-2 px-3'>
                    <Image style={{width:"60px" , height:"60px"}} width={512} height={512} src={"/images/components/modules/tarhedars.png"} />
                    <span className='me-3' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e" , lineHeight:"1.9rem"}}>طرح درس</span>
                </div>
                </Link>
            </div>
            <div className='col-12 col-lg-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                <Link href={"/chaharom/mohtava"}>
                <div className='hover-up-element d-flex align-items-center bg-white rounded border py-2 px-3'>
                    <Image style={{width:"60px" , height:"60px"}} width={512} height={512} src={"/images/components/modules/mohtavaye-amoozeshi.png"} />
                    <span className='me-3' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e" , lineHeight:"1.9rem"}}>محتوای آموزشی</span>
                </div>
                </Link>
            </div>
            <div className='col-12 col-lg-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                <Link href={"/chaharom/darsnameh"}>
                <div className='hover-up-element d-flex align-items-center bg-white rounded border py-2 px-3'>
                    <Image style={{width:"60px" , height:"60px"}} width={512} height={512} src={"/images/components/modules/darsnameh.png"} />
                    <span className='me-3' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>درسنامه آموزشی</span>
                </div>
                </Link>
            </div>
        </div>
        </div>

        </div>
    );
};

export default chaharom;