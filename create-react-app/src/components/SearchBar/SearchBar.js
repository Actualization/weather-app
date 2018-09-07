import React from "react";
var ons = require('onsenui');
var Ons = require('react-onsenui');

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInvputValue: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ searchInvputValue: event.target.value });
    }

    handleSubmit(event) {
        alert('submit ' + this.state.searchInvputValue);
    }

    render() {
        return (
            <React.Fragment>
                <Ons.Col>
                    <div>Enter your city:</div>
                </Ons.Col>
                <Ons.Col>

                    <Ons.SearchInput
                        modifier='material'
                        value={this.state.searchInvputValue}
                        placeholder='City'
                        onChange={this.handleChange} />
                    <Ons.Button ripple='true' onClick={this.handleSubmit} >Search!</Ons.Button>

                </Ons.Col>
            </React.Fragment>
        );
    }
}

export default SearchBar;