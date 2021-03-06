import React, { useState } from 'react';
import Test9Sub from './Test9Sub';
const Test9 = () => {
  const [color, setColor] = useState('');
  const [movie, setMovie] = useState('');

  const onColor = e => {
    setColor(e.target.value);
  };
  const onMovie = e => {
    setMovie(e.target.value);
  };
  return (
    <div>
      <h2>당신이 좋아하는 컬러는? </h2>
      <p>
        <input type="text" onChange={onColor} />
        <br />
        <span>ex). pink, tomato, yellow, red</span>
      </p>
      <h2>당신이 좋아하는 영화는?</h2>
      <p>
        <label>킹콩</label>
        <input type="radio" value="킹콩" name="movie" onChange={onMovie} />
      </p>
      <p>
        <label>크루엘라</label>
        <input type="radio" value="크루엘라" name="movie" onChange={onMovie} />
      </p>
      <p>
        <label>미나리</label>
        <input type="radio" value="미나리" name="movie" onChange={onMovie} />
      </p>
      <hr />
      <Test9Sub color={color} movie={movie} />
    </div>
  );
};

export default Test9;
