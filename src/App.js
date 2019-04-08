import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Item extends Component {
            render() {
              return (<li>{this.props.name}</li>);
            }
          }



class App extends Component {
  render() {
    return (
      <div>         
                  <h2>{this.props.title}</h2>
                  <ul>
                      <Item name="iPhone 7" />
                      <Item name="HTC U Ultra" />
                      <Item name="Google Pixel" />
                  </ul>
              </div>
    );
  }
}

export default App;
