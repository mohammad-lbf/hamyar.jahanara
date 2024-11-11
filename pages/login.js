import React from 'react';
import { useState , useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Login = () => {
    const [password, setPassword] = useState('');
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = Cookies.get('auth');
      if (isAuthenticated === 'true') {
        router.push('/'); // هدایت به صفحه لاگین در صورت عدم احراز هویت
      }
    }, []);
    const handleLogin = () => {
        const correctPassword = "1323"; // رمز عبور مورد نظر خود
        if (password === correctPassword) {
          // تنظیم کوکی با انقضای یک روز
          Cookies.set('auth', 'true', { expires: 1 });
          router.push('/'); // به صفحه محافظت‌شده هدایت می‌شود
        } else {
          alert('رمز عبور اشتباه است');
        }
      };
    
    return (
        <div style={{minHeight:"100vh"}}>
            <div className='page-padding-tops'>
            <div style={{marginTop:"50px" , paddingTop:"20px" , paddingBottom:"20px"}} className='container bg-white rounded shadow border'>
            <input
        type="password"
        placeholder="رمز عبور"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>ورود</button>
            </div>
            </div>
        </div>
    );
};

export default Login;