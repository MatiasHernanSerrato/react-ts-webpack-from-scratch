import React from 'react';
import ReactDom from 'react-dom';
import Img from './lacoste-logo.png';

const App = () => {
  return (
    <div>
      React from scratch, testing webpack serve
      <img src={Img} alt='lacoste logo'></img>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))