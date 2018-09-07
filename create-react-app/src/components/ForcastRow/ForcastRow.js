import React from "react";
import DisplayForcast from "../DisplayForcast";
import './ForcastRow.css';
var ons = require('onsenui');
var Ons = require('react-onsenui');

class ForcastRow extends React.Component {

    /**
     * Convert Date object to string with AM/PM
     * @param {Date} date 
     */
    formatDateAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }


    render() {
        let time = this.formatDateAMPM(new Date(this.props.subForcastInfo.dt_txt))
        return (
            <React.Fragment>
                <Ons.Row className='forcastRow'>
                    <Ons.Col>
                        <span className='forcastRow'>{time}</span>
                    </Ons.Col>
                    <Ons.Col>
                        <span className='forcastRow'>{this.props.subForcastInfo.weather[0].main}</span>
                    </Ons.Col>
                    <Ons.Col>
                        <img className='forcastRow' src={'http://openweathermap.org/img/w/' + this.props.subForcastInfo.weather[0].icon + '.png'}></img>

                    </Ons.Col>

                </Ons.Row>
            </React.Fragment>
        )
    }
}

export default ForcastRow;