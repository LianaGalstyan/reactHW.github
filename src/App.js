import React from 'react';
import './App.scss';
import Header from './Components/Header';
import Icon from "./images/icon.png";
import Logo from "./images/logo.png";
import Group from "./images/group.png";
import Main from './Components/Main';
import Footer from './Components/Footer';
class App extends React.Component { 
  
  render() {
    return (
      <div>
        <Header 
        icon1 = {Icon}
        icon2 = {Logo}
        group = {Group} /> 
        <Main />
        <Footer />
      </div> 
    );

  }
}

export default App;