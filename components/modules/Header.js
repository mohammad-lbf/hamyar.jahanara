import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import HambergurMenu from './HambergurMenu';

const Header = () => {
    const {pathname} = useRouter();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header  className={`sticky-bar mt-0 d-flex justify-content-center`}>
            <nav className={`bg-gray-900 header border-bottom shadow-sm px-4`}>
                <div className={`main-header justify-content-between align-items-center`}>
                    <div className='d-flex align-items-center'>
                    <div className={`text-end d-flex justfy-content-end align-items-center`}>
                        </div>
                        <div className={`header-nav`}>
                            <nav className={`d-none d-xl-block`}>
                                <ul className={`main-menu me-4 d-flex justify-content-start align-items-center`}>
                                    <li className='m-3'><Link style={{fontFamily:"KalamehWeb-Bold" , }} className={`p-0 ${pathname == "/" ? "active" : "text-dark"}`} href={"/"}>صفحه اصلی</Link></li>
                                    {/* <li className='has-children m-3'>
                                        <Link style={{fontFamily:"KalamehWeb-Bold" , }} className={`p-0 ${pathname == "/bases" ? "active" : "text-dark"}`}  href={"/bases"}>
                                        پایه ها
                                        </Link>
                                        <ul className="sub-menu shadow-sm ">
                                        <li>
                                            <Link className='text-end' href='/sevom'>
                                                    <span style={{fontFamily:"KalamehWeb-Bold" , }}>پایه سوم</span>
                                                </Link>
                                            </li>
                                            <li>
                                            <Link className='text-end' href='/chaharom'>
                                                    <span style={{fontFamily:"KalamehWeb-Bold" , }}>پایه چهارم</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='text-end' href={'/panjom'}>
                                                    <span style={{fontFamily:"KalamehWeb-Bold" , }}>پایه پنجم</span>
                                                </Link>
                                            </li>
                                            <li>
                                            <Link className='text-end' href='/sheshom'>
                                                    <span style={{fontFamily:"KalamehWeb-Bold" , }}>پایه ششم</span>
                                                </Link>
                                            </li>
                                        </ul>
                                        </li> */}
                                        {/* <li className='has-children m-3'>
                                        <Link style={{fontFamily:"KalamehWeb-Bold" , }} className={`p-0 ${pathname == "/tests" ? "active" : "text-dark"}`}  href={"/books"}>
                                        کتابهای درسی
                                        </Link>
                                        <ul className="sub-menu shadow-sm ">
                                        <li>
                                            <Link className='text-end' href='/sevom/books'>
                                                    <span style={{fontFamily:"KalamehWeb-Bold" , }}>کتابهای درسی سوم</span>
                                                </Link>
                                            </li>
                                            <li>
                                            <Link className='text-end' href='/chaharom/books'>
                                                    <span style={{fontFamily:"KalamehWeb-Bold" , }}>کتابهای درسی چهارم</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='text-end' href={'/panjom/books'}>
                                                    <span style={{fontFamily:"KalamehWeb-Bold" , }}>کتابهای درسی پنجم</span>
                                                </Link>
                                            </li>
                                            <li>
                                            <Link className='text-end' href='/sheshom/books'>
                                                    <span style={{fontFamily:"KalamehWeb-Bold" , }}>کتابهای درسی ششم</span>
                                                </Link>
                                            </li>
                                        </ul>
                                        </li> */}
                                        <li className='m-3'><Link style={{fontFamily:"KalamehWeb-Bold" , }} className={`p-0 ${pathname == "/courses" ? "active" : "text-dark"}`} href={"/courses"}>دوره های آموزشی</Link></li>
                                        <li className='m-3'><Link style={{fontFamily:"KalamehWeb-Bold" , }} className={`p-0 ${pathname == "/articles" ? "active" : "text-dark"}`} href={"/articles"}>مقالات</Link></li>
                                        {/* <li className='m-3'><Link style={{fontFamily:"KalamehWeb-Bold" , }} className={`p-0 ${pathname == "/support" ? "active" : "text-dark"}`} href={"/support"}>پشتیبانی</Link></li> */}
                                        <li className='m-3'><Link style={{fontFamily:"KalamehWeb-Bold" , }} className={`p-0 ${pathname == "/about-developer" ? "active" : "text-dark"}`} href={"/about-developer"}>درباره توسعه دهنده</Link></li>
                                        <li className='m-3'><Link style={{fontFamily:"KalamehWeb-Bold" , }} className={`p-0 ${pathname == "/about-school" ? "active" : "text-dark"}`} href={"/about-school"}>درباره مدرسه</Link></li>
                                        {/* <li className='m-3'><Link style={{fontFamily:"KalamehWeb-Bold" , }} className={`p-0 ${pathname == "/about-school" ? "active" : "text-dark"}`} href={"/developer"}>مستندات</Link></li> */}
                                        {/* <li className='m-3'><a style={{fontFamily:"KalamehWeb-Bold" , border:"none"}} className={`p-0 border-0`} href={"https://worksave-jahan.netlify.app/"}><button style={{fontFamily:"KalamehWeb-Bold"}} class="button-85 border-0" role="button">برنامه پیشرفته ثبت کار</button></a></li> */}
                                </ul>
                            </nav>
                            <button style={{backgroundColor:"transparent"}} onClick={handleShow} className="border-0 burger-icon burger-icon-white"><span class="burger-icon-top"></span><span class="burger-icon-mid"></span><span class="burger-icon-bottom"></span></button>
                            <HambergurMenu show={show} handleClose={handleClose} />
                        </div>
                    </div>

                        <div className={`d-flex align-items-center`}>
                        <Link style={{height:"47px"}} className='' href={"/"}>
                                <Image style={{width:"146px" , height:"40px"}} alt='logo' width={1000} height={300} src={'/images/components/modules/logo-dark.png'} />
                            </Link>

                        </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;