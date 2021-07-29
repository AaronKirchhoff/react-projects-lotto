import logo from './logo.svg';
import './App.css';
import Ball from './Ball.js';
import Lottery from './Lottery.js';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Mini Daily Lotto" maxNum={10} numBalls={4} />
    </div>
  );
}

export default App;
