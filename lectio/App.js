import React from 'react';
import AppNavigator from './AppNavigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppNavigator />
    );
  }
}