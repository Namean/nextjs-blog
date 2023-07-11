import Head from 'next/head';
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css'
import { useState, useEffect } from 'react';


import { Route,Routes, NavLink, HashRouter } from 'react-router-dom';



const Main = () => {
  return (
    <HashRouter>
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/stuff">Stuff</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="content">
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

const Home = () => {
  return (
    <div>
      <h2>HELLO</h2>
      <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>

      <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
    </div>
  );
}

const Stuff = () => {
  return (
    <div>
      <h2>STUFF</h2>
      <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
      <ol>
        <li>Nulla pulvinar diam</li>
        <li>Facilisis bibendum</li>
        <li>Vestibulum vulputate</li>
        <li>Eget erat</li>
        <li>Id porttitor</li>
      </ol>
    </div>
  );
}

const Contact = () => {
  return (
    <div>
      <h2>GOT QUESTIONS?</h2>
      <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
      </p>
    </div>
  );
}



const openCity = (event, cityName) => {
  event.currentTarget.className += ' active';
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div suppressHydrationWarning={true}>
    <div suppressHydrationWarning={true}>{process.browser && <Main />}</div>

      </div>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>

      <div>
        <section>
          <div class="tab">
            <button class="tablinks" onClick={(event) => openCity(event, 'London')} id="defaultOpen">London</button>
            <button class="tablinks" onClick={(event) => openCity(event, 'Paris')}>Paris</button>
            <button class="tablinks" onClick={(event) => openCity(event, 'Tokyo')}>Tokyo</button>
          </div>

          <div id="London" className="tabcontent">
            <h3>London</h3>
            <p>London is the capital city of England.</p>
          </div>

          <div id="Paris" className="tabcontent">
            <h3>Paris</h3>
            <p>Paris is the capital of France.</p>
          </div>

          <div id="Tokyo" className="tabcontent">
            <h3>Tokyo</h3>
            <p>Tokyo is the capital of Japan.</p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
