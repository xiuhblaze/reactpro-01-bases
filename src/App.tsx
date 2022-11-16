import React from 'react';
import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';


function App() {
  return (
    <>
      <h1>React Pro</h1>
      <hr />
      <Counter initialValue={15} />
      <hr />
      <CounterBy initialValue={5} />
    </>
  );
}

export default App;
