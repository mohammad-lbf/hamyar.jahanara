import Skills from '@/components/modules/Skills';
import Teachers from '@/components/modules/Teachers';
import Image from 'next/image';
import React from 'react';

const AboutSchool = () => {
    return (
        <div className="container page-padding-tops">
        <div className='pt-4 mt-2 mb-2 row justify-content-center'>
              <div className='col-12 col-sm-10 py-4 border my-4 rounded bg-white shadow-sm'>
              <h5 style={{fontSize:"24px",color:"#464749" , lineHeight:"1.9" , 
                  fontFamily:"KalamehWeb-Bold"}} 
                  className='text-center my-4 pb-2'>
                  معرفی دبستان شهید جهان‌آرا
              </h5>
              <p style={{fontSize:"15px",color:"#464749" , lineHeight:"1.9" , 
                  fontFamily:"KalamehWeb-Bold" , direction:'rtl' , textAlign:"justify"}} 
                  className='text-justify my-4'>
                دبستان شهید جهان‌آرا یکی از مدارس برجسته و فعال در منطقه ۱۲ تهران است که با فراهم آوردن محیطی امن و دوستانه، نقش مهمی در ارتقای کیفیت آموزش ابتدایی ایفا می‌کند. این مدرسه با پذیرش دانش‌آموزان در پایه‌های سوم، چهارم، پنجم و ششم، تلاش می‌کند تا با ارائه برنامه‌های آموزشی و پرورشی متنوع، زمینه پیشرفت علمی و تربیتی دانش‌آموزان را فراهم کند. هدف اصلی مدرسه، تربیت افرادی مسئولیت‌پذیر، خلاق و اخلاق‌مدار است که بتوانند در آینده نقش مؤثری در جامعه ایفا کنند.
              </p>
              <div className='text-center'>
              <Image className='rounded shadow' src={"/images/components/modules/IMG_۲۰۲۴۱۱۲۲_۱۱۵۹۰۵-min.jpg"} style={{width:"200px" , height:"200px"}} width={720} height={751} />
              </div>
              <p style={{fontSize:"15px",color:"#464749" ,  lineHeight:"1.9" , 
                  fontFamily:"KalamehWeb-Medium" , direction:'rtl' , textAlign:"justify"}} 
                  className='mt-4 mb-2' >
                یکی از ویژگی‌های برجسته دبستان شهید جهان‌آرا، بهره‌گیری از کادر آموزشی مجرب و دلسوز است که با استفاده از روش‌های نوین تدریس، به یادگیری عمیق‌تر و مؤثرتر دانش‌آموزان کمک می‌کنند. کلاس‌های مجهز، فضای دوستانه و برنامه‌های مکملی چون فعالیت‌های فرهنگی، هنری و ورزشی از جمله امکاناتی هستند که این مدرسه را به محیطی جذاب برای دانش‌آموزان تبدیل کرده‌اند. توجه به استعدادهای فردی هر دانش‌آموز و پرورش آن‌ها یکی از اولویت‌های این مدرسه است.
              </p>
              <Teachers />
              <div className='text-center'>
              <Image className='rounded shadow' src={"/images/components/modules/IMG_۲۰۲۴۱۱۲۲_۱۱۵۹۱۹-min.jpg"} style={{width:"200px" , height:"200px"}} width={720} height={526} />
              </div>
              <p style={{fontSize:"15px",color:"#464749" ,  lineHeight:"1.9" , 
                  fontFamily:"KalamehWeb-Medium" , direction:'rtl' , textAlign:"justify"}} 
                  className='my-2' >
                این مدرسه در نزدیکی میدان خراسان واقع شده و به دلیل موقعیت مکانی مناسب، دسترسی آسانی برای خانواده‌ها فراهم آورده است. آدرس دقیق مدرسه به این شرح است: میدان خراسان، خیابان خراسان، خیابان لرزاده، بعد از درمانگاه خیریه شهدای لرزاده، پلاک ۲۶. کدپستی مدرسه ۱۱۷۷۹۳۵۳۱۱ است. این موقعیت جغرافیایی باعث شده که دبستان شهید جهان‌آرا به یکی از گزینه‌های محبوب خانواده‌های این منطقه تبدیل شود.
              </p>
              <div className='text-center'>
              <Image className='rounded shadow' src={"/images/components/modules/IMG_۲۰۲۴۱۱۲۲_۱۱۵۹۳۶-min.jpg"} style={{width:"200px" , height:"200px"}} width={720} height={513} />
              </div>
              <p style={{fontSize:"15px",color:"#464749" , lineHeight:"1.9" , 
                  fontFamily:"KalamehWeb-Medium" , direction:'rtl' , textAlign:"justify"}} 
                  className='mt-3 mb-2' >
                    در کنار امکانات آموزشی، دبستان شهید جهان‌آرا توجه ویژه‌ای به برقراری ارتباط نزدیک با خانواده‌ها دارد و با برگزاری جلسات منظم اولیا و مربیان، خانواده‌ها را در جریان پیشرفت تحصیلی و تربیتی فرزندانشان قرار می‌دهد. همچنین، این دبستان با استفاده از تلفن‌های تماس ۳۳۵۴۳۱۴۱ و ۳۳۵۴۴۰۰۶، همواره آماده پاسخگویی به سوالات و نیازهای والدین است. دبستان شهید جهان‌آرا با افتخار مسیر رشد و تعالی فرزندان شما را هموار می‌سازد.
              </p>
              
              </div>
        </div>
      </div>
    );
};

export default AboutSchool;