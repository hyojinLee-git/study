import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo } from '../../module/todos';
import Todos from './Todos';

const TodosContainer = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const onCreate = useCallback(text => dispatch(addTodo(text)), [dispatch]);
  const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);
  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
};

export default TodosContainer;
