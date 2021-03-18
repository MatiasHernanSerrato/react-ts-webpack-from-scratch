import React, { FC } from 'react';
import Img from '../images/lacoste-logo.png';

const App: FC = () => {
  const env = process.env.NODE_ENV;
  return (
    <div>
      Fake PNG img chang
      <p> running on this env: {env} </p>
      <p> Hi there </p>
      <img src={Img} alt='lacoste logo' />
    </div>
  )
};

export default App;
