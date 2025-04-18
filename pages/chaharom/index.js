
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import darsnameh from '@/DB/chaharom/darsnameh';
import mohtava from '@/DB/chaharom/mohtava';
import soalat from '@/DB/chaharom/soalat';
import tarhedars from '@/DB/chaharom/tarhedars';
import ToolsMenuOption from '@/components/modules/ToolsMenuOption';

const Chaharom = () => {
    const router = useRouter();
  
  useEffect(() => {
    const isAuthenticated = Cookies.get('auth');
    if (isAuthenticated !== 'true') {
      router.push('/login'); // هدایت به صفحه لاگین در صورت عدم احراز هویت
    }
  }, []);

    return (
        <div style={{minHeight:"100vh"}} className='page-padding-tops'>
    <div style={{marginTop:"50px" , paddingTop:"50px" , paddingBottom:"50px" , backgroundColor:"#fff" , boxShadow: "1px 3px 15px 2px #4f0099"}} className='container rounded'>
    <div className='row align-items-center'>
            <div className='col-12 col-lg-7'>
                <h2 className='text-center text-lg-end' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#4f0099"}}>
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
            <div className='col-12 col-sm-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0 d-flex justify-content-center'>
                <ToolsMenuOption type={"soalat"} number={soalat.length} slug="/chaharom/soalat" />
            </div>
            <div className='col-12 col-sm-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                    <ToolsMenuOption type={"tarhedars"} number={tarhedars.length} slug={"/chaharom/tarhedars"} />
            </div>
            <div className='col-12 col-sm-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                    <ToolsMenuOption type={"mohtava"} number={mohtava.length} slug={"/chaharom/mohtava"} />
            </div>
            <div className='col-12 col-sm-6 col-xl-4 col-xxl-3 mb-4 mt-2 mb-lh-0'>
                <ToolsMenuOption type={"darsnameh"} number={darsnameh.length} slug={"/chaharom/darsnameh"}  />
            </div>
        </div>
        </div>

        </div>
    );
};

export default Chaharom;