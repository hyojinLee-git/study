import React from 'react';
import './Test3.css';
import myStyle from './Test3.module.css'

const Test3 = () => {
    return (
        <div className="wrap">
            {/* cssModule */}
            <div className="box">test3.css</div>
            <div className={myStyle.box}>test3.module.css</div>

            {/* 다중클래스-`` */}
            <div className="size bg">Test3.css</div>
            <div className={`${myStyle.size} ${myStyle.bg}`}>Test3.module.css</div>
            <div></div>
        </div>
    );
};

export default Test3;

/*
    >>파일명.module.css
        글래스 이름의 중첩을 제거하기 위해 사용
    -aaa.css=>.box{}
    -aaa.module.css=>.box{}=>box_xxx_xxxx이렇게 클래스가 붙는다.
    <태그 className={import한 이름.클래스명}

    작업을 하다보면 클래스명이 중복되는 경우가 있는데 이를 방지하기 위해 사용
    
    아이디명은 유일성-재사용에 맞지 않기 때문에 큰 영역에 주로 사용하고 재사용의 컴포넌트에서는 클래스를 사용한다.
*/