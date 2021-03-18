import React from 'react';
import ReactDom from 'react-dom';
import Img from './lacoste-logo.png';
import './style.scss'

const App = () => {
  return (
    <div>
      Fake PNG img chang
      <p>Hi there</p>
      <img src={Img} alt='lacoste logo'></img>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))