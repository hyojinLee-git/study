// import Button from './component/component-styling/Button';
// import './App.scss';
// import { useState } from 'react';
// import Checkbox from './component/component-styling/Checkbox';

import CounterContainer from './component/redux/CounterContainer';
import TodosContainer from './component/redux/TodosContainer';

function App() {
  return (
    <div className="App">
      <div>
        <CounterContainer />
      </div>
      <hr />
      <div>
        <TodosContainer />
      </div>
    </div>
  );
}

export default App;

/*
import styled, { css, ThemeProvider } from 'styled-components';
import Button_SC from './component/component-styling/Button_SC';

const AppBlock = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid;
  padding: 1rem;
`;

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595',
};

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color};
  border-radius: 50%;
  ${props =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

function App() {
  return (
    <div className="App">
      <Circle color="blue" />
      <Circle color="black" huge />
      <ThemeProvider theme={{ palette }}>
        <AppBlock>
          <Button_SC>Button</Button_SC>
        </AppBlock>
      </ThemeProvider>
    </div>
  );
}

export default App;
*/
/*
<Wrapper>
    //컴포넌트가 props가 됨(children:태그와 태그 사이에 넣는 내용) 
  <Hello name="react" color="red" isSpecial={true}/>
  <Hello color="pink"/>
  </Wrapper> 
*/

/*
  <Counter/>
*/

/*
  <InputSample/>
*/

/*
      <UserList />
      <Userlist />
*/

/*
            SASS 예제
<div className="buttons">
        <Button size="large">Button</Button>
        <Button size="medium">Button</Button>
        <Button size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">
          Button
        </Button>
        <Button color="gray" size="medium">
          Button
        </Button>
        <Button color="gray" size="small">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">
          Button
        </Button>
        <Button color="pink" size="medium">
          Button
        </Button>
        <Button color="pink" size="small">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" outline className="customizedBtn">
          Button
        </Button>
        <Button color="gray" outline={true}>
          Button
        </Button>
        <Button color="pink" outline={true}>
          Button
        </Button>
      </div>
      <div className="buttons" style={{ display: 'block' }}>
        <Button size="large" fullWidth>
          Button
        </Button>
        <Button color="gray" fullWidth size="large">
          Button
        </Button>
        <Button
          color="pink"
          fullWidth
          size="large"
          onClick={() => console.log('click')}
          onMouseMove={() => console.log('mouse move')}
        >
          Button
        </Button>
      </div>
*/
/*
.moduls.css
function App() {
  const [check, setCheck] = useState(false);
  const onChange = e => {
    setCheck(e.target.checked);
  };
  return (
    <div className="App">
      <Checkbox onChange={onChange} checked={check}>
        다음 약관에 동의
      </Checkbox>
    </div>
  );
}
*/
