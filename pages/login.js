import React from 'react';
import { useState , useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    const [password, setPassword] = useState('');
    const [Err , setErr] = useState(false)
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = Cookies.get('auth');
      if (isAuthenticated === 'true') {
        router.push('/'); // هدایت به صفحه لاگین در صورت عدم احراز هویت
      }
    }, []);
    const handleLogin = (e) => {
      e.preventDefault();
        const correctPassword = "1323"; // رمز عبور مورد نظر خود
        if (password === correctPassword) {
          setErr(false);
          // تنظیم کوکی با انقضای یک روز
          Cookies.set('auth', 'true', { expires: 1 });
          router.push('/'); // به صفحه محافظت‌شده هدایت می‌شود
        } else {
          setErr('true');
        }
      };
    
    return (
      <div className="container page-padding-tops">
      <div className='pt-4 mt-2 mb-2 row justify-content-center'>
            <div className='col-12 col-sm-10 col-md-7 col-lg-5 py-4 border my-4 rounded bg-light'>
            <h5 style={{fontSize:"24px",color:"#464749" , 
                fontFamily:"KalamehWeb-Bold"}} 
                className='text-center my-4'>
                ورود به سامانه
            </h5>
            <p 
              style={{fontSize:"15px" , 
              color:"#474d52" ,lineHeight:"2em" , 
              textAlign:"center" , 
              fontFamily:"KalamehWeb-Medium"}} 
              className=' pb-2 mb-2'>
                برای استفاده از سامانه همیار معلم دبستان شهید جهان آرا، لطفا ابتدا رمز عبور را وارد کنید</p>
      <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Control
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='text-center'
            placeholder='رمز عبور'
          />
        </Form.Group>
        {
          Err &&
          <p 
              style={{fontSize:"15px" ,  
              textAlign:"justify" , 
              fontFamily:"KalamehWeb-Medium"}} 
              className='mt-3 text-danger text-center'>
               رمز عبور اشتباه است
          </p>
        }
        <button className='border-0 px-3 mt-4 rounded btn-main-2 w-100' style={{fontFamily:"KalamehWeb-Medium"}}  type="submit">ورود به سامانه</button>
      </Form>
            </div>
      </div>
    </div>
    );
};

export default Login;