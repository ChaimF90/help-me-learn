import React from 'react';
import moment from 'moment';
import momentTz from 'moment-timezone';

class DatePicker extends React.Component {

    state = {
        chosenDate: null
    };

    chooseDay = date => {
        this.setState({ chosenDate: date });
    }

    renderHours = (hour, index, date) => {
        const formattedDate = moment(date.day).format('YYYY-MM-DD');
        const comleteDate = `${formattedDate} ${hour}`;
        const time = momentTz(comleteDate).tz(momentTz.tz.guess()).format('h:mm A');
        return (
            <li key={index}>{time}</li>
        );
    }

    renderdays = (date, index) => {
        return (
            <div key={index}>
                <li >
                    {moment(date.day).format('dddd, MMMM Do YYYY')}
                </li>
                <ul>
                    {date.hours.map((hour, index) => this.renderHours(hour, index, date))}
                </ul>
            </div>
        )
    }
    render() {
        let startOfWeek = moment('2018-03-31').startOf('week');
        const endOfWeek = moment('2018-03-31').endOf('week');
        let days = [];
        let day = startOfWeek;

        while (day <= endOfWeek) {
            days.push(day.toDate());
            day = day.clone().add(1, 'd');
        }
        

        days = days.map(day => {
            const obj = {
                day,
                hours: ['20:00', '21:00', '22:00']
            }
            return obj;
        });

        return (
            <div>
                <ul>
                    {days.map(this.renderdays)}
                </ul>
            </div>
        )
    }
}

export default DatePicker;
