import React from "react";
import('./SearchBar.css');
var ons = require('onsenui');
var Ons = require('react-onsenui');

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInvputValue: '',
            previousCities: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePreviousCityClick = this.handlePreviousCityClick .bind(this);
    }
    /**
     * Update search box text
     * @param {event} event 
     */
    handleChange(event) {
        this.setState({ searchInvputValue: event.target.value });
    }

    /**
     * Handle submit button event
     * @param {event} event 
     */
    handleSubmit(event) {
        let city = this.state.searchInvputValue
        this.setState({ previousCities: this.state.previousCities.concat(city) })
        this.props.onSubmit(city);
    }
    handlePreviousCityClick(city){
        this.props.onSubmit(city);
    }

    render() {
        let previousCities = this.state.previousCities.map(function (item, i) {
            return <Ons.Button onClick={this.handlePreviousCityClick.bind(this,item)}>{item}</Ons.Button>
        }, this)
        return (
            <React.Fragment>
                <Ons.Col className='searchBar'>

                    <span className='promptText'>Enter city:&nbsp;</span>
                    <Ons.SearchInput className='promptText'
                        modifier='material'
                        value={this.state.searchInvputValue}
                        placeholder='City'
                        onChange={this.handleChange} />
                    <Ons.Button ripple='true' onClick={this.handleSubmit} >Search!</Ons.Button>

                </Ons.Col>
                <Ons.Col>
                    {this.state.previousCities.length < 1 ? null : <span>Previous Cities: &nbsp;</span>}
                    {previousCities}

                </Ons.Col>
            </React.Fragment>
        );
    }
}

export default SearchBar;