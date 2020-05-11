import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const ipAddresses = ['5.39.70.218', '45.9.148.25']
  const listItems = ipAddresses.map((addr) => 
    <li>{addr}</li>
  )
  return (
    <div className="App">
      <header className="App-header">
        <h2>Visitors</h2>
        <ul>{listItems}</ul>
      </header>
    </div>
  );
}

export default App;
