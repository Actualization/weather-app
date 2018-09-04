import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var ons = require('onsenui');
var Ons = require('react-onsenui');







class App extends Component {
  
      handleClick() {
        ons.notification.alert('Hello world!');
      }

      render(){
        return (
          <Ons.Page>
            <Ons.Button onClick={this.handleClick}>Tap me!</Ons.Button>
          </Ons.Page>
        );
      }
}

export default App;