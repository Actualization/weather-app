import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import React, { Component } from 'react';
import background from './background.jpg';
import './App.css';
var ons = require('onsenui');
var Ons = require('react-onsenui');




class App extends Component {
  divStyle = {
    color: 'black',
    backgroundColor: 'blue',
  };
  pageBackground
  render() {
    return (
      <Ons.Page id={'weatherPage'}>
        <Ons.Card>

          <Ons.Row>
            <Ons.Col>
              <div class="box" style={this.divStyle}>Responsive</div>

            </Ons.Col>
            <Ons.Col>
              <div class="box" style={this.divStyle}>Responsive</div>

            </Ons.Col>
          </Ons.Row>
          <Ons.Row>
            <div class="box" style={this.divStyle}>Responsive</div>

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