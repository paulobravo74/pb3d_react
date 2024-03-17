import React from 'react';

import './App.css';
import portfolio from './service/portf';

function App() {

  console.log(portfolio[0].architect)
  return (
    <div className="App">
      <h1>{portfolio[0].architect}</h1>
      <p>{portfolio[0].local}</p>
      <p>{portfolio[0].software}</p>
    </div>
  );
}

export default App;
