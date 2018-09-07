import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import React, { Component } from 'react';
import background from './background.jpg';
import './App.css';
import logo from './logo.jpg';
import internalAPI from './internalAPI/internalAPI';
import FiveDayForcast from './components/FiveDayForcast';
import SearchBar from './components/SearchBar';
var ons = require('onsenui');
var Ons = require('react-onsenui');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fiveDayForcast: null
    }

    this.updateForcast = this.updateForcast.bind(this);
  }

  async componentDidMount() {
    this.updateForcast('New York');
  }
  /**
   * 
   * @param {String} city city name
   */
  async updateForcast(city) {
    let forcast = await internalAPI.fiveDayForcast(city);
    this.setState((prevState) => ({ fiveDayForcast: forcast}));
  }

  render() {
    // var jsonData = await internalAPI.fiveDayForcast('test')
    return (
      <Ons.Page id={'weatherPage'}>
        <Ons.Card class={'center'} id={'contentBackground'}>

          <Ons.Row>
            <Ons.Col>
              <img id={'logo'} src={logo}>
              </img>
            </Ons.Col>
            <SearchBar>

            </SearchBar>
          </Ons.Row>

          <Ons.Row>
            <FiveDayForcast forcasts={this.state.fiveDayForcast}>
            </FiveDayForcast>
          </Ons.Row>

        </Ons.Card>
      </Ons.Page>
    );
  }
}

export default App;