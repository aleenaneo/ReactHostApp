import React, { lazy, Suspense } from 'react'; // Must be imported for webpack to work
import './App.css';

const Header = lazy(() => import('remote/Header'));

function App() {
  return (
    <div className="App">
      <h1>Host App is here.....</h1>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <div className="container">Demo home page</div>
    </div>
  );
}

export default App;