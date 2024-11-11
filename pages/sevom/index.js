import FirstBanner from '@/components/modules/sevom/FirstBanner';
import ToolsMenu from '@/components/modules/sevom/ToolsMenu';
import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Sevom = () => {
    const router = useRouter();
  
    useEffect(() => {
      const isAuthenticated = Cookies.get('auth');
      if (isAuthenticated !== 'true') {
        router.push('/login'); // هدایت به صفحه لاگین در صورت عدم احراز هویت
      }
    }, []);
    
    return (
        <div style={{minHeight:"100vh"}} className='page-padding-tops'>
            <FirstBanner />
            <h3 style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}} className='mb-4 text-center mt-4 pt-4'>ابزار های سامانه | پایه سوم</h3>
            <ToolsMenu />
        </div>
    );
};

export default Sevom;