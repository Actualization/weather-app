import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import React, { Component } from 'react';
import background from './background.jpg';
import './App.css';
import logo from './logo.jpg';
import internalAPI from './internalAPI/internalAPI';
import FiveDayForcast from './components/FiveDayForcast';
var ons = require('onsenui');
var Ons = require('react-onsenui');




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fiveDayForcast: null
    }

    // this.updateForcast();

    this.updateForcast = this.updateForcast.bind(this);
  }

  async componentDidMount() {
    this.updateForcast();
  }

  async updateForcast() {
    let forcast = await internalAPI.fiveDayForcast('test');
    this.setState((prevState) => ({ fiveDayForcast: forcast}));
  }

  render() {
    // var jsonData = await internalAPI.fiveDayForcast('test')
    console.log(this.state.fiveDayForcast);
    return (
      <Ons.Page id={'weatherPage'}>
        <Ons.Card class={'center'} id={'contentBackground'}>

          <Ons.Row>
            <Ons.Col>
              <img id={'logo'} src={logo}>
              </img>
            </Ons.Col>
            <Ons.Col>

              <div>Enter your city:</div>
            </Ons.Col>
            <Ons.Col>
              <Ons.SearchInput
                modifier='material'
                placeholder='New York, United States' />
            </Ons.Col>
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





class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'index': 0
    }
    this.renderToolbar = this.renderToolbar.bind(this);
    this.renderTabs = this.renderTabs.bind(this);
  }
  getInitialState() {
    return {
      index: 0
    }
  }
  renderToolbar() {
    const titles = ['Home', 'Settings'];
    return (
      <Ons.Toolbar>
        <div className='center'>{titles[this.state.index]}</div>
      </Ons.Toolbar>
    );
  }
  renderTabs() {
    return [
      {
        content: <MyTab content="Welcome home" />,
        tab: <Ons.Tab label='Home' icon='md-home' />
      },
      {
        content: <MyTab content="Change the settings" />,
        tab: <Ons.Tab label='Settings' icon='md-settings' />
      }
    ];
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar}>
        <Ons.Tabbar
          swipeable={true}
          position='auto'
          index={this.state.index}
          onPreChange={(event) => {
            if (event.index != this.state.index) {
              this.setState({ index: event.index });
            }
          }
          }
          renderTabs={this.renderTabs}
        />
      </Ons.Page>
    );
  }
}





class MyTab extends Component {
  render() {
    return (
      <Ons.Page>
        <section style={{ margin: '16px' }}>
          <p>
            {this.props.content}.
          </p>
        </section>
      </Ons.Page>
    );
  }
}



export default App;