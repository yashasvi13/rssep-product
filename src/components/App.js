import React, { Component } from 'react';
import './App.css';
import Header from '../header.js';
import video from '../videoplayback.mp4'
import Footer from '../footer.js';
import Menu from '../menu/menu.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuData: {}
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <video autoPlay loop id="vid"
               src={video} type="video/mp4">
        </video>
        <Menu />
        <Footer />
      </div>
    );
  }
}

export default App;
