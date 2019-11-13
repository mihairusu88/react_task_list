import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout></Layout>
      </Provider>
    );
  }
}

export default App;
