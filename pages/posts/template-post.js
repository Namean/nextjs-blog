import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function Post() {
    return(
        <Layout>
            <Head>
                <title>Template Post</title>
            </Head>
            <h1>Template Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
           </h2>
           </Layout>
           );
}
