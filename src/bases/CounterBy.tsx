import { useState } from 'react'

interface Props {
  initialValue?: number //  Puede aceptar o no el valor, pues en la función ya tiene su valor por defecto
};

interface CounterState {
  counter: number;
  clicks: number;
};

export const CounterBy = ({ initialValue = 5 }: Props) => {
  // const [counterState, setCounterState] = useState<CounterState>({
  //   counter: initialValue,
  //   clicks: 0,
  // });
  // const { counter, clicks } = counterState;

  const [{ counter, clicks }, setCounterState] = useState<CounterState>({ // Con la interfase  se puede desestructurar el state
    counter: initialValue,
    clicks: 0,
  });
  
  const onCounterClick = (increment: number) => {
    // setCounterState(prev => ({
    //   counter: prev.counter + increment,
    //   clicks: prev.clicks + 1
    // }));
    setCounterState(({ counter, clicks }) => ({ // Esto es igual a lo anterior comentado ya con la interfase CounterState
      counter: counter + increment,
      clicks: clicks + 1
    }));
  };

  return (
    <>
      <h3>Counter by: { counter } <small>Clicks: { clicks }</small></h3>
      <button onClick={ () => onCounterClick(1) } > + 1 </button>
      <button onClick={ () => onCounterClick(5) } > + 5 </button>
    </>
  )
}
