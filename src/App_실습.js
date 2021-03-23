import React, { Component } from 'react';
import Props from './Props';
import './Props.css';

class App extends Component {
  render() {
    return (
      <div id="wrap">
        <h2>리액트 코딩평가</h2>
        {paris.map(france=>(<Props name={france.name} picture= {france.image}/>))}
      </div>
    );
  }
}

export default App;
const paris = [
  {
    id: 1,
    name: 'image1',
    image: '/images/img01.jpg',
  },
  {
    id: 2,
    name: 'image2',
    image: '/images/img01.jpg',
  },
  {
    id: 3,
    name: 'image3',
    image: '/images/img02.jpg',
  },
  {
    id: 4,
    name: 'image4',
    image: '/images/img02.jpg',
  },
  {
    id: 5,
    name: 'image5',
    image: '/images/img03.jpg',
  },
  {
    id: 6,
    name: 'image6',
    image: '/images/img03.jpg',
  }
]