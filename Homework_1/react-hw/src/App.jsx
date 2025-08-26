import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import './App.css';

const RandomNumber = () => {
    const [number, setNumber] = React.useState(0);

    const generateRandomNumber = () => {
        setNumber(Math.floor(Math.random() * 100) + 1);
    }

    return (
        <div>
            <p>Random number: {number}</p>
            <button onClick={generateRandomNumber}>Generate Random Number</button>
        </div>
    );
}

function App() {
  return (
    <div className="app-container">
      <Header />
      <h1>Hello, React!</h1>
      <div>
        <p>This is a simple React application.</p>
        <RandomNumber />
      </div>
      <Footer />
    </div>
  );
}

export default App;