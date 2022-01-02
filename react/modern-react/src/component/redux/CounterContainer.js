import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { decrease, increase, setDiff } from '../../module/counter';
import Counter from './Counter';

const CounterContainer = () => {
  //상태 조회
  const { number, diff } = useSelector(
    state => ({
      //state: store안에 들어있는 state
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual,
  );

  // const number = useSelector(state => state.counter.number);
  // const diff = useSelector(state => state.counter.diff);
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer;
