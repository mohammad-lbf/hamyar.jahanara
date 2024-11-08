import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BasesMenu = () => {
    return (
        <div className='container'>
                    <div className='row justify-content-center'>
            <div className='col-12 col-lg-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                <Link href={"/sevom"}>
                <div className='hover-up-element d-flex align-items-center bg-white rounded border py-2 px-3'>
                    <Image style={{width:"60px" , height:"60px"}} width={512} height={512} src={"/images/components/modules/number-3.png"} />
                    <span className='me-3' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>پایه سوم</span>
                </div>
                </Link>
            </div>
            <div className='col-12 col-lg-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                <Link href={"/chaharom"}>
                <div className='hover-up-element d-flex align-items-center bg-white rounded border py-2 px-3'>
                    <Image style={{width:"60px" , height:"60px"}} width={512} height={512} src={"/images/components/modules/number-4.png"} />
                    <span className='me-3' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>پایه چهارم</span>
                </div>
                </Link>
            </div>
            <div className='col-12 col-lg-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                <Link href={"/panjom"}>
                <div className='hover-up-element d-flex align-items-center bg-white rounded border py-2 px-3'>
                    <Image style={{width:"60px" , height:"60px"}} width={512} height={512} src={"/images/components/modules/number-5.png"} />
                    <span className='me-3' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>پایه پنجم</span>
                </div>
                </Link>
            </div>
            <div className='col-12 col-lg-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                <Link href={"/sheshom"}>
                <div className='hover-up-element d-flex align-items-center bg-white rounded border py-2 px-3'>
                    <Image style={{width:"60px" , height:"60px"}} width={512} height={512} src={"/images/components/modules/number-6.png"} />
                    <span className='me-3' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>پایه ششم</span>
                </div>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default BasesMenu;