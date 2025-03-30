import Head from 'next/head';
import CoursesPage from '../../components/templates/CoursesPage'

const Courses = () => {
    return (
        <div className='page-padding-tops pb-4'>
            <Head>

              <meta name="og:title" content="دوره ها و کلاس های آموزشی" />

              <title>دوره ها و کلاس های آموزشی</title>
            </Head>
           <CoursesPage />
           
        </div>
    );
};

export default Courses;