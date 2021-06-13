import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test2 = () => {
  const [posts, setPosts] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data);
        setLoading(false);
        setError();
      })
      .catch(error => {
        setPosts([]);
        setLoading(true);
        setError('데이터를 찾을 수 없습니다.');
      });
  };

  return (
    <div>
      {posts && loading ? (
        <h2>로딩중</h2>
      ) : (
        posts.map(post => <p key={post.id}>{post.title}</p>)
      )}
    </div>
  );
};

export default Test2;
