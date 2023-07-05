import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';




import Link from 'next/link';
import Date from '../components/date';

const postsDirectory = path.join(process.cwd(), 'posts')
const coursesDirectory = path.join(process.cwd(), 'courses')
//import { getSortedPostsData } from '../lib/posts';
import path from 'path';
import { getSortedData } from '../lib/posts';
export async function getStaticProps() {
  const allPostsData = { posts: getSortedData(postsDirectory), courses: getSortedData(coursesDirectory)};
  return {
    props: {
      allPostsData,
    },
  };
}



export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {/* <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.posts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li> 
          ))}
        </ul>
      </section>

       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Courses</h2>
        <ul className={utilStyles.list}>
          {allPostsData.courses.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/courses/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li> 
          ))}
        </ul>
      </section>

      <div className='posts'>
        <ul>
          <li><Link href='/posts/first-post'>first post</Link></li>
          <li><Link href='/posts/second-post'>second post</Link></li>
        </ul>
      </div>
    </Layout>
  );
}
