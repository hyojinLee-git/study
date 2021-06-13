import React, { useCallback, useState } from 'react';

const Test10 = () => {
  const [count, setCount] = useState(0);
  const ran = Math.random();
  const increase = useCallback(() => {
    console.log(ran);
    setCount(count + 1);
  }, [count]);
  const decrease = () => {
    console.log(ran);
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
    </div>
  );
};

export default Test10;
