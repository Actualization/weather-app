import React from "react";
import { forcePlatformStyling } from "onsenui";
import ForcastRow from '../ForcastRow';
var ons = require('onsenui');
var Ons = require('react-onsenui');

class DisplayForcast extends React.Component {
    render(){
        return(
            <Ons.Card>
                {this.props.forcast.dayName}
                {
                    this.props.forcast.forcasts.map(function(item, i){
                        <ForcastRow>

                        </ForcastRow>
                    })
                }
            </Ons.Card>
        );
    }
}

export default DisplayForcast;