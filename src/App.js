import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/Layout';
import {
  BrowserRouter as Router,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout></Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
