import './Fonts.css';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import React, { Component } from 'react';
import background from './background.jpg';
import './App.css';
import logo from './logo.png';
import internalAPI from './internalAPI/internalAPI';
import FiveDayForcast from './components/FiveDayForcast';
import SearchBar from './components/SearchBar';
var ons = require('onsenui');
var Ons = require('react-onsenui');

/**
 * Base React component for the application
 */
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fiveDayForcast: null,
      cityMessage: null,
    }

    this.updateForcast = this.updateForcast.bind(this);
  }

  async componentDidMount() {
    this.updateForcast('New York');
  }

  /**
   * Retreve new forcast data
   * @param {String} city city name
   */
  async updateForcast(city) {
    let forcast = await internalAPI.fiveDayForcast(city);

    if (forcast.status == 'error') {
      console.log('Error in update Forcast' + forcast)
    }
    else if (forcast.status == 'city not found') {
      console.log(forcast.status)
      this.setState((prevState) => (
        {
          fiveDayForcast: null,
          cityMessage: 'City not found'
        }
      ));
    }
    else {
      this.setState((prevState) => (
        {
          fiveDayForcast: forcast,
          cityMessage: forcast.city.name
        }
      ));
    }
  }

  render() {
    // var jsonData = await internalAPI.fiveDayForcast('test')
    return (
      <Ons.Page id={'weatherPage'}>
        <Ons.Card className={'center'} id={'contentBackground'}>

          <Ons.Row>
            <Ons.Col>
              <img id={'logo'} src={logo}>
              </img>
            </Ons.Col>
            <SearchBar onSubmit={this.updateForcast}>
            </SearchBar>
          </Ons.Row>

          <Ons.Row>
            <span className='cityName'>
              {this.state.cityMessage == null ? null : this.state.cityMessage}
            </span>
            <FiveDayForcast forcasts={this.state.fiveDayForcast}>
            </FiveDayForcast>
          </Ons.Row>

        </Ons.Card>
      </Ons.Page>
    );
  }
}

export default App;