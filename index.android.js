import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from "./Components/App.js";

export default class KKFashion extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('KKFashion', () => KKFashion);
