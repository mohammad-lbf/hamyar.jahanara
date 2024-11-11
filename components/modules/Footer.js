import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.mainFooter} w-100`}>
        <div className="container pt-4 px-sm-4 rounded">
            <div className="row">
                <div className="col-12 col-lg-6 text-center text-lg-end">
                    <div className="d-flex align-items-center w-100 justify-content-center justify-content-lg-start">
                            <div className="d-flex flex-column align-items-center align-items-lg-start text-decoration-none">
                            <Link style={{height:"47px"}} className='' href={"/"}>
                                <Image style={{width:"146px" , height:"40px"}} alt='logo' width={1000} height={300} src={'/images/components/modules/logo-light.png'} />
                            </Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center justify-content-lg-start w-100'>
                        <p style={{fontFamily:"KalamehWeb-Medium" , fontSize:"14px" , width:"400px"}} className={`lh-lg mt-3 mb-3 ${styles.textColorMilky}`} >
                        سامانه همیار معلم دبستان جهان آرا یک پلتفرم نوین و کارآمد است که به منظور ارتقاء کیفیت آموزش و تسهیل فرآیند یادگیری در این دبستان طراحی شده است. این سامانه با هدف فراهم کردن ابزارهای لازم برای معلمان و دانش‌آموزان، بهبود ارتباطات آموزشی و مدیریتی و ایجاد فضایی مناسب برای یادگیری، راه‌اندازی شده است.
                            </p>
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex flex-column align-items-center">
                    <p style={{width:"170px" ,  fontFamily:"KalamehWeb-Bold"}} className={`text-warning mb-4 mt-4 mt-lg-0 fw-bold text-center ${styles.textColorMilky}`}>
                        بخش های سایت
                    </p>
                    <nav style={{width:"fit-content"}} className="d-flex flex-column text-center text-lg-end">
                        <Link style={{fontFamily:"KalamehWeb-Medium"}} className={`mx-2 mb-2 pb-1 ${styles.scaleHover}`} href="/">
                            صفحه اصلی
                        </Link>
                        <Link style={{fontFamily:"KalamehWeb-Medium"}} className={`mx-2 mb-2 pb-1 ${styles.scaleHover}`} href="/bases">
                            پایه ها
                        </Link>
                        <Link style={{fontFamily:"KalamehWeb-Medium"}} className={`mx-2 mb-2 pb-1 ${styles.scaleHover}`} href="/books">
                            کتابهای درسی
                        </Link>
                        <Link style={{fontFamily:"KalamehWeb-Medium"}}  className={`mx-2 mb-2 ${styles.scaleHover} pb-1`} href="/support">
                            پشتیبانی
                        </Link>
                        <Link style={{fontFamily:"KalamehWeb-Medium"}}  className={`mx-2 mb-2 ${styles.scaleHover} pb-1`} href="/about-developer">
                            درباره توسعه دهنده
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
  <div className="d-flex flex-column align-items-center text-light pt-2 container border-top border-secondary">
      <p className="mb-2"> &copy; تمامی حقوق محفوظ است</p>
      <p className="mb-2">Jahanara school - 2024</p>
  </div>
        </footer>

    );
};

export default Footer;