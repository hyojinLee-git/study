import React, { useEffect, useState } from 'react';

const Test3 = () => {
  const [post, setPost] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {};
  return (
    <div>
      <h2>타이틀 출력</h2>
      <input type="text" />
    </div>
  );
};

export default Test3;
