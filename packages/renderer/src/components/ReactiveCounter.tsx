import { useState } from 'react';


export default function ReactiveCounter() {
  const [ count, setCount ] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>count is: { count }</button>
      <br /><br />
      <code>packages/renderer/src/components/ReactiveCounter.tsx</code>
    </>
  );
}