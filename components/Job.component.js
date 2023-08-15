/* /components/Job.component.jsx */
import styles from './job.module.css';

function Schedule() {
    const dayOfTheWeek = new Date().getDay();
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


    const gridContainerStyle = {
        display: 'grid',
        gap: '50px',
        gridTemplateColumns: '350px 350px 350px 350px 350px 350px 350px',
        backgroundColor: '#2196F3',
        padding: '10px',
    }
    const gridItemStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        border: '1px solid rgba(0, 0, 0, 0.8)',
        padding: '20px',
        fontSize: '30px',
        textAlign: 'center',
        listStyle: 'none',
        width: '350px'
    }




    const liStyle = {
        // color: data.onDuty ? 'darkgreen' : 'red',
        padding: '20px',
        listStyle: 'none',
        border: 'solid 1px #565555',
        borderRadius: '8px',
        padding: '10px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        marginLeft: '10px',
        fontSize: '90%',

    }
    const listItems = schedule.map((idx, index) =>
        <li key={1} style={liStyle}>{idx.day}</li>
    );

    const gridArray = [
        {
            dayOfTheWeek: 'monday',
            event: 'Meeting with Dr.Doom'
        }, { dayOfTheWeek: 'tuesday' }, { dayOfTheWeek: 'wednesday' }, { dayOfTheWeek: 'thursday' }, { dayOfTheWeek: 'friday' }, { dayOfTheWeek: 'saturday' }, { dayOfTheWeek: 'sunday' }];
    const gridItems = gridArray.map((idx, index) => {
        return (
            <>
                <li
                    key={index}
                    style={gridItemStyle}
                    className='grid-item'
                >{idx.dayOfTheWeek}</li>
            </>
        )
    })

    const listItemsContainer = <ul>{listItems}</ul>



    return (
        <div className='grid-container' style={gridContainerStyle}>
            {gridItems}
        </div>
    );
}




export default function Job() {

    const gridContainerStyle = {
        display: 'grid',
        gap: '50px',
        gridTemplateColumns: '350px 350px 350px 350px 350px 350px 350px',
        backgroundColor: '#2196F3',
        padding: '10px',
    }

    const gridItemStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        border: '1px solid rgba(0, 0, 0, 0.8)',
        padding: '20px',
        fontSize: '30px',
        textAlign: 'center',
        listStyle: 'none',
        width: '350px'
    }

    const result = {
        ...gridContainerStyle,
        ...gridItemStyle
    }

    return (
        <>
            <Schedule />
            <div
                style={gridContainerStyle}
            >
                <p style={result
                    }>Monday</p>
            </div>
        </>
    )

}