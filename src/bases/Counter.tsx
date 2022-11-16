import { useState } from 'react'

interface Props {
  initialValue?: number //  Puede aceptar o no el valor, pues en la función ya tiene su valor por defecto
};

export const Counter = ({ initialValue = 0 }: Props) => {
  const [counter, setCounter] = useState(initialValue);

  const onCounterClick = () => {
    // setCounter(counter + 1);
    setCounter(prev => prev + 1);
  };

  return (
    <>
      <h3>Counter: { counter }</h3>
      <button onClick={ onCounterClick } >+ 1</button>
    </>
  )
}
