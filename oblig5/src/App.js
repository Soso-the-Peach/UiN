import { useState } from 'react';
import MyComponent from './componenst/MyComponent'
import Food from './componenst/Food'
import Alert from './componenst/Alert';

const App = () => {
  const [inputValue, setInputValue] = useState(' ');

  function inputChange(e) {
    console.log('Changed');
    setInputValue(e.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    console.log('Submitted', event.currentTarget.children);
  }

  return (
    <div>
      <p>Read the README.md to see the tasks</p>
      <MyComponent />
      <Food />
      <Alert
        value={inputValue}
        inputChange={inputChange}
        handleClick={handleClick}
      />
      <p>{inputValue}</p>
    </div>
  );
};

export default App;
