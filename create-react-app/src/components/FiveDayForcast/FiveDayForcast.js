import React from "react";
import DisplayForcast from "../DisplayForcast";
import './FiveDayForcast.css';
var ons = require('onsenui');
var Ons = require('react-onsenui');

class FiveDayForcast extends React.Component {
    render() {
        // console.log(this.props.forcasts.city);
        if (this.props.forcasts == null) {
            return (
                <React.Fragment>

                </React.Fragment>
            );
        }
        else {
            console.log(this.props.forcasts.days[1])
            return (
                <React.Fragment>
                    <Ons.Row>
                        <Ons.Col>
                            <DisplayForcast dayName={this.props.forcasts.days[0].dayName} forcast={this.props.forcasts.days[0].forcasts}>
                            </DisplayForcast>
                        </Ons.Col>
                        <Ons.Col>
                            <DisplayForcast dayName={this.props.forcasts.days[1].dayName} forcast={this.props.forcasts.days[1].forcasts}>
                            </DisplayForcast>
                        </Ons.Col>
                        <Ons.Col>
                            <DisplayForcast dayName={this.props.forcasts.days[2].dayName} forcast={this.props.forcasts.days[2].forcasts}>
                            </DisplayForcast>
                        </Ons.Col>
                        <Ons.Col>
                            <DisplayForcast dayName={this.props.forcasts.days[3].dayName} forcast={this.props.forcasts.days[3].forcasts}>
                            </DisplayForcast>
                        </Ons.Col>
                        <Ons.Col>
                            <DisplayForcast dayName={this.props.forcasts.days[4].dayName} forcast={this.props.forcasts.days[4].forcasts}>
                            </DisplayForcast>
                        </Ons.Col>
                    </Ons.Row>
                </React.Fragment>
            );
        }

    }
}

export default FiveDayForcast;