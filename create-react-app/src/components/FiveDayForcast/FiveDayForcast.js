import React from "react";
import DisplayForcast from "../DisplayForcast";
var ons = require('onsenui');
var Ons = require('react-onsenui');

class FiveDayForcast extends React.Component {
    render() {
        // console.log(this.props.forcasts.city);
        if (this.props.forcasts == null) {
            return(
                <React.Fragment>

                </React.Fragment>
            );
        }
        else {
            console.log(this.props.forcasts.days[0]);
            return (
                <React.Fragment>
                    <Ons.Col>
                        <DisplayForcast forcast={this.props.forcasts.days[0]}>
                        </DisplayForcast>
                    </Ons.Col>
                    <Ons.Col>
                        <DisplayForcast forcast={this.props.forcasts.days[1]}>
                        </DisplayForcast>
                    </Ons.Col>
                    <Ons.Col>
                        <DisplayForcast forcast={this.props.forcasts.days[2]}>
                        </DisplayForcast>
                    </Ons.Col>
                    <Ons.Col>
                        <DisplayForcast forcast={this.props.forcasts.days[3]}>
                        </DisplayForcast>
                    </Ons.Col>
                    <Ons.Col>
                        <DisplayForcast forcast={this.props.forcasts.days[4]}>
                        </DisplayForcast>
                    </Ons.Col>
                </React.Fragment>
            );
        }

    }
}

export default FiveDayForcast;