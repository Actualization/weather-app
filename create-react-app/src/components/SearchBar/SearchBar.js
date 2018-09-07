import React from "react";
import ('./SearchBar.css');
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
        let city = this.state.searchInvputValue
        this.props.onSubmit(city);
    }

    render() {
        return (
            <React.Fragment>
                <Ons.Col class='searchBar Aligner'>
                    <span class='promptText Aligner-item'>Enter city:&nbsp;</span>
         

                    <Ons.SearchInput class='promptText'
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