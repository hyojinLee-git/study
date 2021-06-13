import React, { useMemo, useState } from 'react';

const Test7 = () => {
  const [cnt1, setCnt1] = useState(1);
  const [cnt2, setCnt2] = useState(10);
  //함수를 별도로 만들어서 return값을 처리할 때(return 값을 기억=useMemo)
  const isEven = useMemo(() => {
    return cnt1 % 2 === 0;
  }, [cnt1]);
  return (
    <div>
      <h2>{cnt1}</h2>
      <button onClick={() => setCnt1(cnt1 + 1)}>증가</button>
      <h2>{cnt2}</h2>
      <button onClick={() => setCnt2(cnt2 + 1)}>증가</button>
      <hr />
      {isEven ? '짝수' : '홀수'}
    </div>
  );
};

export default Test7;

/*
    useMemo(function, deps)
    function: 함수 정의
    deps: 검사할 틍정값을 담는 배열
    배열값이 바뀌는 함수를 호출해서 연산하고 값이 바뀌지 않으면 이전값을 재사용

    useMemo: return되는 값을 기억한다.

    useMemo: 함수를 별도로 만들어서 return값 처리
            값이 바꿀때마다 지연되는 값처리가 생길 수 있다.
            같은 값이 입력되면 return 값을 기억하기 때문에 실행이 빨라진다.
    
    함수 컴포넌트는 렌더링 될때마다 내부의 것을 다시 계산처리해야함
    생성뿐만 아니라 업데이트 될때마다 다시 만들기 때문
    그래서 use* 필요함
    함수형이라 함수 실행될 때마다 내의 것은 메모리가 안되어서 다시만들어야 쓸 수 있다.
    그래서 훅이 등장해서 이제 클래스처럼 사용할 수 있다.

    useMemo
    useCallback: 함수를 기억 90%

    useCallback(function, deps)
    useCallback(()=>{},[])
    useCallback(()=>{},[상태값])

*/
