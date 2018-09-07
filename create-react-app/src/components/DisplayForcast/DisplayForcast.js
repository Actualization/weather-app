import React from "react";
import { forcePlatformStyling } from "onsenui";
import ForcastRow from '../ForcastRow';
import('./DisplayForcast.css')
var ons = require('onsenui');
var Ons = require('react-onsenui');

class DisplayForcast extends React.Component {

    render() {
        return (
            <Ons.Card class='dayForcastCard'>
                <div class='dayName'>
                    {this.props.dayName}
                </div>
                <br></br>
                {
                    this.props.forcast.map(function (item, i) {
                        return <ForcastRow subForcastInfo={item} key={item.dt}></ForcastRow>
                    })
                }
            </Ons.Card>
        );
    }
}

export default DisplayForcast;