import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Welcome to my portfolio!</h2>
      </main>
      <Footer />
    </div>
  );
}

export default App;