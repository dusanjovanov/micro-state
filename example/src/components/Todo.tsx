import { css } from '@emotion/css';
import * as React from 'react';
import { useValue } from '../../../dist';
import {
  deleteTodo,
  endEdit,
  selectIsTodoEdited,
  startEdit,
  Todo as TodoType,
  updateTodo,
} from '../store/todos';

export const Todo = ({ todo }: { todo: TodoType }) => {
  const isEdited = useValue(selectIsTodoEdited)(todo.id);
  const [name, setName] = React.useState(todo.name);

  return (
    <li
      className={css`
        display: flex;
        align-items: center;
        width: 300px;
      `}
    >
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={e => {
          updateTodo({ ...todo, isDone: e.target.checked });
        }}
      />
      {!isEdited && (
        <div
          className={css`
            flex: 1;
            text-decoration: ${todo.isDone ? 'line-through' : 'none'};
            user-select: none;
          `}
          onClick={() => updateTodo({ ...todo, isDone: !todo.isDone })}
        >
          {todo.name}
        </div>
      )}
      {isEdited && (
        <input
          type="text"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
          className={css`
            flex: 1;
          `}
        />
      )}
      {!isEdited && <button onClick={() => startEdit(todo.id)}>✏️</button>}
      {isEdited && (
        <button onClick={() => endEdit({ ...todo, name })}>✅</button>
      )}
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </li>
  );
};
