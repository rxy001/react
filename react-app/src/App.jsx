import {useState, Fragment} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>123</span>
      <button onClick={() => setCount(count => count + 1)}>button</button>
    </div>
  );
}

export default App;
