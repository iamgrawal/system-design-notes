/*
==== Original Code ====
import { useEffect, useState } from 'react';
import './App.css';

function Sln() {
  const [count, setCount] = useState(0);
  const [multiCount, setMultiCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const logValue = () => {
    console.log('Value: ', inputValue);
  };

  const handleReset = () => {
    setInputValue('');
    setCount(0);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleCountClick = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    logValue();
  }, [inputValue, logValue]);

  useEffect(() => {
    setMultiCount(count * 5);
  }, [count]);

  return (
    <>
      <input value={inputValue} onChange={handleInputChange} />
      <div className="card">
        <button onClick={handleCountClick}>count is {count}</button>
      </div>
      <div className="card">
        <button disabled>
          {count} * 5 = {multiCount}
        </button>
      </div>
      <div className="card">
        <button onClick={() => handleReset()}>Reset</button>
      </div>
    </>
  );
}

export default Sln;

==== Issue ====
Log value is being called twice
 */

import { useCallback, useEffect, useState } from "react";
import "./App.css";

function Sln() {
  const [count, setCount] = useState(0);
  const [multiCount, setMultiCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const logValue = () => {
    console.log("Value: ", inputValue);
  };

  const handleReset = () => {
    setInputValue("");
    setCount(0);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleCountClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  useEffect(() => {
    logValue();
  }, [inputValue, logValue]);

  useEffect(() => {
    setMultiCount(count * 5);
  }, [count]);

  return (
    <>
      <input value={inputValue} onChange={handleInputChange} />
      <div className="card">
        <button onClick={handleCountClick}>count is {count}</button>
      </div>
      <div className="card">
        <button disabled>
          {count} * 5 = {multiCount}
        </button>
      </div>
      <div className="card">
        <button onClick={() => handleReset()}>Reset</button>
      </div>
    </>
  );
}

export default Sln;
