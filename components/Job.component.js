/* /components/Job.component.jsx */
import styles from './job.module.css';

function ShoppingList() {

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

    

    const listItems = schedule.map(data =>
        <div style={{
            display: 'inline-block',
        }}>
            
            <li key={1} style={liStyle}>{data.day}</li>
            <p>{data.shiftHours}</p>
        </div>
    );

    return (
        <ul>{listItems}</ul>
    );
}

const liStyle = {
                    // color: data.onDuty ? 'darkgreen' : 'red',
                    padding: '20px',
                    listStyle: 'none',
                    border: 'solid 1px #565555',
                    borderRadius: '8px',
                    padding: '20px',
                    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                    transition: '0.3s',
                    marginLeft: '20px'
                }


export default function Job() {


    return (
        <ShoppingList />
    )

}