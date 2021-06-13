import React, { useMemo, useState } from 'react';

const getColor = color => {
  console.log('getColor');
  switch (color) {
    case 'red':
      return '빨강';
    case 'pink':
      return '분홍';
    case 'yellow':
      return '노랑';
    case 'tomato':
      return '토마토';
    default:
      return '없음';
  }
};

const getMovie = movie => {
  console.log('getMovie');
  switch (movie) {
    case '킹콩':
      return '괴물영화';
    case '크루엘라':
      return '디즈니 실사';
    case '미나리':
      return '한국영화';
    default:
      return '없음';
  }
};

const Test9Sub = ({ color, movie }) => {
  const colorInfo = useMemo(() => getColor(color), [color]);
  const movieInfo = useMemo(() => getMovie(movie), [movie]);

  return (
    <div>
      <h3>
        내가 좋아하는 색은 {color}이고 설명은 {colorInfo}
      </h3>
      <h3>
        내가 좋아하는 영화는 {movie} 설명은 {movieInfo}
      </h3>
    </div>
  );
};

export default Test9Sub;
