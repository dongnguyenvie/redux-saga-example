import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShowTextComponent from './components/ShowTextComponent'

function App() {
  console.log('%c Cảm ơn bạn đã ủng hộ! nhớ ghé www.audiovyvy.com nghe kể truyện đêm khuya nhé ', 'background: #222; color: #bada55; font-size:40px');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>What is Saga</h2>
        <ShowTextComponent/>
      </header>
    </div>
  );
}

export default App;
