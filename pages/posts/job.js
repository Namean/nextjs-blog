import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
// import Layout from '../../components/layout';


const schedule = [
    {
        day: 'sunday',
        onDuty: false
    },
    {
        day: 'monday',
        onDuty: true,
        shiftHours: 12
    },
    {
        day: 'tuesday',
        onDuty: true,
        shiftHours: 8
    },
    {
        day: 'wednesday',
        onDuty: 'true',
        shiftHours: 8
    },
    {
        day: 'thursday',
        onDuty: false,
        shiftHours: 0
    },
    {
        day: 'friday',
        onDuty: true,
        shiftHours: 12
    },
    {
        day: 'saturday',
        onDuty: true,
        shiftHours: 4
    }
];

function ShoppingList() {
    const listItems = schedule.map(data =>
        <div style={{
            border: 'solid 1px black',
            listStyle: 'none',
            display: 'inline-block',
            padding: '10px'
        }}>
        <li
            key={1}
            style={{
                color: data.onDuty ? 'darkgreen' : 'red'
            }}
        >
            {data.day}
        </li>
        </div>
    );

    return (
        <ul>{listItems}</ul>
    );
}

export default function Post() {
    return (
        <>
            <Head>
                <title>Job</title>
            </Head>
            <h1>Job</h1>
            <div>
                <section>
                    <h3>Calendar</h3>
                
                    <ShoppingList />
                </section>
            </div>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}
