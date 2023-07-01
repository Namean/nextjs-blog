import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function SecondPost() {
    return (
        <Layout>
        <Head>
            <title>Who wants to be hired</title>
        </Head>
        <h1><a href="https://github.com/vercel/next.js/discussions/49472">Who wants to be hired</a></h1>
        <div>
            <section>
                <p>I started working with Next.js recently. It uses React, and it reminds me of Hugo in a way, how it adds pages. Which gets back to like regular web development. Where as React is like just for SPAs (Single Page Applications). So this is a little more familiar</p>
            </section>


            <section>
            
                <p>Anyway working through the tutorials on Next.js they mentions something called git discussions or something like that. Anyway I came across this section about hiring developers. People in here are submitting their information like resumes, and portfolios. So I decided to check some of them out. Compared to me there arent any bad ones but there are certainly candidates that stick out from the crowd </p>
            </section>


            <section>
                <h3>Kevin Kai a.k.a jaguar-person</h3>
                <Link href="">Website: Kevin Kai</Link>
                <p>I was very impressed by <Link href="https://www.skyscanner.com/">SkyScanner.com</Link> its on a level that I aspire to achieve, and looks professional and runs fast!</p>
            </section>

        </div>
        <h2>
            <Link href="/">Back to home</Link>
            </h2>
            </Layout>
            );
}
