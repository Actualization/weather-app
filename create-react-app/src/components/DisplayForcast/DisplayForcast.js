import React from "react";
import { forcePlatformStyling } from "onsenui";
import ForcastRow from '../ForcastRow';
var ons = require('onsenui');
var Ons = require('react-onsenui');

class DisplayForcast extends React.Component {

    render() {
        // if (typeof(this.props.forcast.forcasts[0]) == undefined) {
        //     return (
        //         <React.Fragment>

        //         </React.Fragment>
        //     );
        // }
        // else {

        console.log(this.props.forcast)
        return (
            <Ons.Card>
                {this.props.dayName}
                {
                    this.props.forcast.map(function (item, i) {
                        return <ForcastRow subForcastInfo={item} key={item.dt}></ForcastRow>
                    })
                }
                {/* {this.props.forcast.forcasts[0]['dt']} */}

            </Ons.Card>
        );
        // }
    }
}

export default DisplayForcast;