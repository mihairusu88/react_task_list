import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/Layout';
import { loadAuthUser } from './actions/authActions';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './style.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadAuthUser());
  }

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
