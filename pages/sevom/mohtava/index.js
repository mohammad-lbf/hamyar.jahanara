import Image from 'next/image';
import React , { useState } from 'react';
import data from '@/DB/sevom/mohtava';
import Card from '@/components/modules/Card';
import styles from '../../../styles/filterselect.module.css'
const Mohtava = () => {
  const reverseData = data.reverse();
  const [selectedOption, setSelectedOption] = useState('all');
  const reverseSelectedOption = data.filter(item => item.book == selectedOption).reverse();
    const handleChange = (e) => {
        setSelectedOption(e.target.value);
      };

    return (
        <div style={{minHeight:"100vh"}} className='page-padding-tops'>
                <div style={{marginTop:"50px" , paddingTop:"20px" , paddingBottom:"20px"}} className='container bg-white rounded shadow border'>
                    <div className='row align-items-center'>
                            <div className='col-12 col-lg-7'>
                                <h2 className='text-center text-lg-end' style={{fontSize:"25px" , fontFamily:"KalamehWeb-Bold" , color:"#03004e"}}>
                                  محتوای آموزشی دروس پایه سوم
                                </h2>
                            </div>
                            <div className='col-12 col-lg-5 text-center text-lg-start'>
                                    <Image className='mt-3 mt-lg-0' style={{width:"50px" , height:"50px"}} src={"/images/components/modules/number-3.png"} height={512} width={512} />
                            </div>
                    </div>
                </div>
                <div style={{marginTop:"0px" , paddingTop:"20px" , paddingBottom:"20px"}} className='container mb-3 mt-3'>
                    <div className='row align-items-center justify-content-center'>
                            <div className='col-12 d-flex justify-content-center'>
                            <div className={styles.container}>
      <div className={styles.formGroup}>
        <label style={{fontFamily:"KalamehWeb-Bold"}} htmlFor="filter" className={styles.label}>انتخاب درس:</label>
        <select
          id="filter"
          className={styles.selectBox}
          value={selectedOption}
          onChange={handleChange}
        >
          <option value="all">همه دروس</option>
          <option value="quran">آموزش قرآن</option>
          <option value="riazi">ریاضی</option>
          <option value="oloom">علوم</option>
          <option value="farsi">فارسی</option>
          <option value="negaresh">نگارش</option>
          <option value="hedye">هدیه های آسمان</option>
          <option value="motaleat">مطالعات اجتماعی</option>
        </select>
      </div>
    </div>
                            </div>
                    </div>
                </div>
                <div className='container'>
                        <div className='row justify-content-center align-items-center'>
                                {
                                    selectedOption == "all" ?
                                    reverseData.map(item =>
                                        
                                        <div key={item.id} className='col d-flex justify-content-center'>
                                                <Card caption={item.caption} fileType={item.fileType} name={item.name} image={item.image} creator={item.creator} slug={item.slug}   />
                                        </div>):
                                    
                                    reverseSelectedOption.map(item =>
                                        
                                    <div key={item.id} className='col d-flex justify-content-center'>
                                            <Card caption={item.caption} fileType={item.fileType} name={item.name} image={item.image} creator={item.creator} slug={item.slug}   />
                                    </div>)
                                }
                        </div>
                </div>
        </div>
    );
};

export default Mohtava;