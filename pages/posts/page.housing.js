import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
import rentStyle from '../../styles/rental.module.css'
export default function Post() {
    const title = `Housing List`
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <h1>{title}</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <div>
                <section>
                    <h3><Link href="https://www.zumper.com/rooms-for-rent/indianapolis-in">Zumper - Rooms for Rent</Link></h3>
                    <br />
                    <h5>SouthPort</h5>
                   
                    <div className={rentStyle.rental}>
                        <p className='price'>$349 <small> / month</small></p>
                        <Link href="https://www.zumper.com/apartments-for-rent/18961405p/room-for-rent-rumford-eastway-manor-indianapolis-in?gallery">
                            Cecil Ave & Rumford Rd
                        </Link>
                        <p className={rentStyle.description}>This place looks more my speed, a bit nicer than what I'm used to though.
                            They have a leasing office 844-326-7293 ext. 3972
                        </p>
                    </div>

                    <div className='rental'>
                        <p className='price'>$349 <small> / month</small></p>
                        <Link href="https://www.zumper.com/apartments-for-rent/53682406/room-for-rent-glenn's-valley-indianapolis-in">Iron Liege Rd & Hill Gail Dr</Link>
                        <p className='description'>The place look nice, its a little toned down. </p>
                    </div>

                    <div className='rental'>
                        <p className='price'>$999 <small> / month</small></p>
                        <Link href="">replace this name</Link>
                        <p className='description'>This is just a sample description</p>

                    </div>



                </section>
            </div>
        </Layout>
    );
}