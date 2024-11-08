import FirstBanner from '@/components/modules/sevom/FirstBanner';
import ToolsMenu from '@/components/modules/sevom/ToolsMenu';
import React from 'react';

const sevom = () => {
    return (
        <div style={{minHeight:"100vh"}} className='page-padding-tops'>
            <FirstBanner />
            <h3 style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}} className='mb-4 text-center mt-4 pt-4'>ابزار های سامانه | پایه سوم</h3>
            <ToolsMenu />
        </div>
    );
};

export default sevom;