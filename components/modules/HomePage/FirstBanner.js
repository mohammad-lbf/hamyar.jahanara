import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const FirstBanner = () => {

  return (
    <div style={{marginTop:"50px" , paddingTop:"50px" , paddingBottom:"50px"}} className='container bg-white rounded shadow border'>
    <div className='row align-items-center'>
            <div className='col-12 col-lg-7'>
                <h2 className='text-center text-lg-end lh-lg' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>
                    سامانه همیار معلم | دبستان شهید جهان آرا
                </h2>
                <p
                className='mt-3 mb-4 mb-lg-0 text-center text-lg-end' 
                style={{fontSize:"15px" , fontFamily:"KalamehWeb-Medium" , color:"#000" , lineHeight:"1.6rem"}}>سامانه همیار معلم دبستان جهان آرا یک پلتفرم نوین و کارآمد است که به منظور ارتقاء کیفیت آموزش و تسهیل فرآیند یادگیری در این دبستان طراحی شده است.</p>
            </div>
            <div className='col-12 col-lg-5 text-center text-lg-start'>
                    <Image style={{width:"250px" , height:"80px"}} src={"/images/components/modules/logo-dark.png"} height={1000} width={275} />
            </div>
    </div>
</div>
  );
};

export default FirstBanner;
