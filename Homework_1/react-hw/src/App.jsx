import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <h1>Hello, React!</h1>
      <div>
        <p>This is a simple React application.</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;