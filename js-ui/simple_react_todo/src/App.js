import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0);

  const incrementClick = () => {
    setCount(count + 1);
  }
  const decrementClick = () => {
    setCount(count - 1);
  }

  const resetClick = () => {
    setCount(0);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click here to increment the count. {count}
         
        </p>
        <p>
          
        <div className='pushable-incr'>
        <span className="pushable-incr-front">
          <Button title="Increment" action={incrementClick}></Button>
          </span>
        </div>
        
        </p>
        <p>
        
        <div className='pushable-decr'>
        <span className="pushable-decr-front">
          <Button title="Decrement" action={decrementClick}></Button>
          </span>
        </div>
        
        </p>
        <p>
        
       <div className='pushable-reset'>
        <span className="pushable-reset-front">
          <Button title="Reset" action={resetClick} className={'pushable-reset'}></Button>
          </span>
          
        </div>
       
        </p>
      </header>
    </div>
  );
}

export default App;
