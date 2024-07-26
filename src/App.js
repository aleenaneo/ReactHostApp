import React from 'react'; // Must be imported for webpack to work
import './App.css';


import Header from 'remote/Header';

function App() {
  return (
    <div className="App">
        <Header />
      <div className="container">Demo home page</div>
    </div>
  );
}

export default App;