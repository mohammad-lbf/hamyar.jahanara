import React from 'react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Signup from '../../components/templates/Signup';
import CourseTemplate from '@/components/modules/course/CourseTemplate';
import testData from '@/assets/Tests/sampleTest';

const BasicWord = () => {
    const courseTestData = {
        courseName:"آموزش ورد مقدماتی",
        coursePublishDate:'8 فروردین 1404',
        courseTumbnailSrc:"/images/public.png",
        courseCaption:"دوره مقدماتی ورد یک آموزش کاربردی برای آشنایی با اصول اولیه Microsoft Word است. در این دوره، معلمان یاد می‌گیرند چگونه اسناد متنی ایجاد و ویرایش کنند، تنظیمات صفحه را مدیریت کنند، از ابزارهای قالب‌بندی استفاده کنند و جداول و تصاویر را به متن اضافه کنند.\n<br />این دوره به‌صورت گام‌به‌گام طراحی شده تا افراد بدون پیش‌زمینه قبلی نیز بتوانند به‌راحتی مهارت‌های موردنیاز را کسب کنند. با شرکت در این دوره، توانایی کار با یکی از پرکاربردترین نرم‌افزارهای اداری را خواهید یافت و می‌توانید محتوای آموزشی خود را حرفه‌ای‌تر تنظیم کنید.",
        courseQuestions: testData.questions,
        courseSlug:"/courses/basicWord",
        courseTime:"1:25:45",
        courseVideos:"15",
        courseEpizodes:[
            {caption:"قسمت اول: معرفی دوره" , src:"/"} , 
            {caption:"قسمت اول: نصب آفیس 2024" , src:"/"} , 
        ]
    }
    const router = useRouter();
    const [localSign, setLocalSign] = useState(false);
    const [isChecking, setIsChecking] = useState(true); // حالت اولیه برای بررسی
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUserName = localStorage.getItem('userName');
            if (storedUserName) {
                setLocalSign(true);
            }
            setIsChecking(false); // بعد از بررسی وضعیت، مقدار حالت را به false تغییر می‌دهیم
        }
    }, []);

    if (isChecking) {
        return (
            <>
                <Head>
                    <title>دوره Word مقدماتی | سامانه یادگیری مستمر دبستان شهید جهان‌آرا</title>
                </Head>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div>
            <div className='pb-4'>
                <Head>
                <title>دوره Word مقدماتی | سامانه یادگیری مستمر دبستان شهید جهان‌آرا</title>
                </Head>
                {localSign ? <CourseTemplate courseData={courseTestData} /> : <Signup localSign={localSign} setLocalSign={setLocalSign} />}
            </div>
        </div>
    );
};

export default BasicWord;
