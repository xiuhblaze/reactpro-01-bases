import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const onCounterClick = () => {
    // if (counter < MAXIMUM_COUNT) setCounter(prev => prev + 1);
    setCounter(value => Math.min(value + 1, MAXIMUM_COUNT)); // Esto hace lo mismo que la linea de arriba
  };

  useEffect(() => {
    if (counter < MAXIMUM_COUNT) return;
    console.log('%cSe llegó al valor máximo!', 'color: #00FF00;');  

    // Animación con TimeLine
    const timeline = gsap.timeline();

    timeline.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' });
    timeline.to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' });


    // Animación base
    // gsap.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' }).then( () => {
    //   gsap.to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' })
    // })
  }, [counter]);  

  return (
    <>
      <h3>CounterEffect</h3>
      <h2 ref={ counterElement }>{ counter }</h2>
      <button onClick={ onCounterClick } >+ 1</button>
    </>
  )
}
