import React from 'react';

const Test1 = () => {
    return (
        <div>
            
        </div>
    );
};

export default Test1;

/*

class에서만 생명주기
componentDidMount, componentDidUpdate, componentWillUnmount

======================================================================

리액트의 class 생명주기 메서드에 친숙하다면, useEffect Hook을 componentDidMount와 componentDidUpdate, componentWillUnmount가 합쳐진 것으로 생각해도 좋습니다.

---------------------------------------------------------------------------

useEffect
-useEffect 화면에 렌더링이 완료된 후 수행
-컴포넌트가 렌드링 될때마다 수행
-클래스의 componentDidMount, componentDidUpdate, componentWillUnmount
-useEffect(콜백함수, [변수])

마운트란? 리액트에서 컴포넌트를 특정 영역에 끼워넣는다라는 말
ReactDOM.render(App.js, #root) - App.js를 #root에 끼워넣기 <- 이 과정을 마운트

useEffect의 Hook: 마운트 되었을때(처음 나타날 때)
                    업데이트 될때(특정 props, state가 바뀔때)
                    언마운트 될때(사라질 때)


1. mount/update
useEffect( () => {
    실행문
})

2. mount
useEffect( () => {
    실행문
},[])

3. 특정 props, state가 바뀔때마다 update
useEffect( () => {
    실행문
}, [의존변수])

4. 정리(Clean-up)
메모리의 누수를 방지하기 위해 UI컴포넌트를 제거하기 전에 수행
컴포넌트가 여러번 렌더링 된다면 다음 effect가 수행되기 전에 effect를 정리함
useEffect( () => {
    
    return()=>{
        뒷정리 내용
    }
}, [props])

사용범위
-props로 받은 값을 처리
-외부 API(ajax 처리)-axios, fetch
-setInterval, setTimeoout
-외부 라이브러리

*/