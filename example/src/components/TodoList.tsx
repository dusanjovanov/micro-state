import { css } from '@emotion/css';
import * as React from 'react';
import { useValue } from '../../../dist';
import { addTodo, filteredTodosValue } from '../store/todos';
import { Todo } from './Todo';

export const TodoList = () => {
  const todos = useValue(filteredTodosValue);

  return (
    <div>
      <ul
        className={css`
          padding: 0;
        `}
      >
        {todos.map(t => {
          return <Todo key={t.id} todo={t} />;
        })}
      </ul>
      <button onClick={addTodo}>Add todo</button>
    </div>
  );
};
