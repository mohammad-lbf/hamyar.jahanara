import Skills from '@/components/modules/Skills';
import React from 'react';

const AboutDeveloper = () => {
    return (
        <div className="container page-padding-tops">
        <div className='pt-4 mt-2 mb-2 row justify-content-center'>
              <div className='col-12 col-sm-10 py-4 border my-4 rounded bg-white shadow-sm'>
              <h5 style={{fontSize:"24px",color:"#464749" , 
                  fontFamily:"KalamehWeb-Bold"}} 
                  className='text-center my-4 pb-2'>
                  درباره توسعه دهنده
              </h5>
              <p style={{fontSize:"17px",color:"#464749" , 
                  fontFamily:"KalamehWeb-Bold"}} 
                  className='text-end my-4'>
                نام و نام خانوادگی توسعه دهنده: محمد لبافی
              </p>
              <p style={{fontSize:"15px",color:"#464749" , 
                  fontFamily:"KalamehWeb-Medium"}} 
                  className='text-end mt-4 mb-2' >
                همکاران گرامی دبستان شهید جهان آراء
              </p>
              <p style={{fontSize:"15px",color:"#464749" , 
                  fontFamily:"KalamehWeb-Medium"}} 
                  className='text-end my-2' >
                با سلام و احترام
              </p>
              <p style={{fontSize:"15px",color:"#464749" , lineHeight:"1.9" , 
                  fontFamily:"KalamehWeb-Medium"}} 
                  className='text-end mt-3 mb-2' >
                سامانه حاضر، با توجه به نیازسنجی انجام شده توسط اینجانب-محمد لبافی، آموزگار ، طراح، برنامه نویس و توسعه دهنده ارشد وب (senior Mern Stack developer)- 
                و جهت تسهیل روند تدریس شما آموزگاران بزرگوار، راه اندازی شده است.
              </p>
              <p style={{fontSize:"15px",color:"#464749" , lineHeight:"1.9" , 
                  fontFamily:"KalamehWeb-Medium"}} 
                  className='text-end mt-3 mb-2' >
                    سامانه همیار معلم دبستان جهان آرا یک پلتفرم نوین و کارآمد است که به منظور ارتقاء کیفیت آموزش و تسهیل فرآیند یادگیری در این دبستان طراحی شده است. این سامانه با هدف فراهم کردن ابزارهای لازم برای معلمان و دانش‌آموزان، بهبود ارتباطات آموزشی و مدیریتی و ایجاد فضایی مناسب برای یادگیری، راه‌اندازی شده است.
              </p>
              <p style={{fontSize:"15px",color:"#464749" , lineHeight:"1.9" , 
                  fontFamily:"KalamehWeb-Medium"}} 
                  className='text-end mt-3 mb-2' >
                   در این سامانه شما می‌توانید پایه مورد نظر خود را انتخاب کرده و بنا بر نیاز خود، از ابزار کتابهای درسی، نمونه سوالات امتحانی، طرح درسهای سالانه و روزانه، محتوای آموزشی و درسنامه های آموزشی (به تفکیک دروس پایه خود) بهره مند شوید.
              </p>
              <p style={{fontSize:"15px",color:"#464749" , lineHeight:"1.9" , 
                  fontFamily:"KalamehWeb-Medium"}} 
                  className='text-end mt-3 mb-2' >
              همچنین شما می‌توانید نمونه سوالات، طرح درسها و... خود را ارسال کنید تا با نام خودتان در سامانه قرار گیرد. راه های برقراری ارتباط با توسعه دهنده در صفحه پشتیبانی موجود است.
              </p>
              <p style={{fontSize:"15px",color:"#464749" , lineHeight:"1.9" , 
                  fontFamily:"KalamehWeb-Medium"}} 
                  className='text-end mt-3 mb-2' >
از نظرات سازنده و ارزشمند شما در بهبود عملکرد سامانه و استفاده نسل های بعدی آموزگاران در این دبستان، قطعا استقبال و قدردانی خواهد شد.
              </p>
              <p style={{fontSize:"15px",color:"#464749" , lineHeight:"1.9" , 
                  fontFamily:"KalamehWeb-Medium"}} 
                  className='text-start mt-3 mb-1'>
                با تشکر
              </p>
              <p style={{fontSize:"15px",color:"#464749" , lineHeight:"1.9" , 
                  fontFamily:"KalamehWeb-Medium"}} 
                  className='text-start mb-1'>
                محمد لبافی
              </p>
              <p style={{fontSize:"15px",color:"#464749" , lineHeight:"1.9" , 
                  fontFamily:"KalamehWeb-Medium"}} 
                  className='text-start mt-1 mb-1'>
                    پائیز 1403
              </p>
              <Skills />
              </div>
        </div>
      </div>
    );
};

export default AboutDeveloper;