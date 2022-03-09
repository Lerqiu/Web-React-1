import React from 'react';
import './App.css';

import Logo from './Components/Logo';
import HelloWorld from './Components/HelloWorld';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <HelloWorld />
      </header>
    </div>
  );
}

export default App;
