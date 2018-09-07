import React from "react";
import DisplayForcast from "../DisplayForcast";
var ons = require('onsenui');
var Ons = require('react-onsenui');

class ForcastRow extends React.Component {


    formatAMPM(date) {
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
        let time = this.formatAMPM(new Date(this.props.subForcastInfo.dt_txt))
        return (
            <React.Fragment>
                <Ons.Row>
                    <div>{time}</div>
                    <div>{this.props.subForcastInfo.weather[0].main}</div>
                    <img src={'http://openweathermap.org/img/w/' + this.props.subForcastInfo.weather[0].icon + '.png'}></img>
                </Ons.Row>
            </React.Fragment>
        )
    }
}

export default ForcastRow;