import React , {useEffect} from 'react';

import { useDispatch } from 'react-redux';
import BasicWordMainSection from '../modules/courses/basicWord/BasicWordMainSection';
import BasicWordAsideSection from '../modules/courses/basicWord/BasicWordAsideSection';
import CourseAsideSection from '../modules/course/CourseAsideSection';
import CourseBreadcrumb from '../modules/course/CourseBreadCrumb';
import CourseMainSection from '../modules/course/CourseMainSection';

const BasicWordPage = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({type:"RESET"})
    } , [])
    return (
        <div className='page-padding-tops'>
            <div className='pt-4'>
                <div className='container mt-4 mt-sm-0 mt-lg-2'>
                                <CourseBreadcrumb />
                        <div className='row justify-content-between flex-lg-row-reverse'>
                            <div className='col-12 col-xl-4'>
                                <CourseAsideSection />
                            </div>
                            <div  className='col-12 col-xl-8'>
                                <CourseMainSection />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default BasicWordPage;