import React from 'react';
import ReactDom from 'react-dom';
import Img from './lacoste-logo.png';

const App = () => {
  return (
    <div>
      Fake PNG img
      <img src={Img} alt='lacoste logo'></img>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))