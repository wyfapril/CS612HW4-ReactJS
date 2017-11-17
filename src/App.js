import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Nav />
        <Footer />
      </div>
    );
  }
}

export default App;
