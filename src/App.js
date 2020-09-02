import React, { Component } from 'react';
import logo from './logo.svg';
import {Provider} from 'react-redux'
{/*import './App.css';*/}
import Home_Fashion from './components/Home_Fashion'
import Categories from './components/Categories'
import configurestore from './store/'
import TopNavBar from './components/TopNavBar'

const store = configurestore()
class App extends Component {
  render() {
  	return(
    	<Provider store={store}>
      <div className="App">
      <TopNavBar />
      <Home_Fashion />
      <Categories />
      </div>
      </Provider>
    )
  }
}
export default App;
