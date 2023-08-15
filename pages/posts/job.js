import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
// import Layout from '../../components/layout';
import Job from '../../components/Job.component';



export default function Post() {
    return (
        <>
            <Head>
                <title>Work Schedule</title>
            </Head>
            <h1 className='job-heading'>work schedule</h1>
            <div className='job-container'>
                <section>
                    <Job />
                </section>
            </div>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}
