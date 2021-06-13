import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData1();
  }, []);

  const getData1 = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    setData(res.data);
  };

  //   const getData1 = async () => {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  //     const res1 = await res.json();
  //     setData(res1);
  //   };

  //   const getData1 = () => {
  //     fetch('https://jsonplaceholder.typicode.com/todos')
  //       .then(res => res.json())
  //       .then(res => { setData(res) });
  //   };

  return (
    <div>
      <h2> 데이터 불러오기 </h2>
      {data.map(item => (
        <p key={item.id}>
          {item.id} / {item.title}
        </p>
      ))}
    </div>
  );
};

export default Test1;
