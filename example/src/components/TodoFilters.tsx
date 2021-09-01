import { css } from '@emotion/css';
import clsx from 'clsx';
import * as React from 'react';
import { useValue } from '../../../dist';
import { Filter, selectIsFilterActive, setFilter } from '../store/todos';

export const TodoFilters = () => {
  const selectIsActive = useValue(selectIsFilterActive);

  const activeClassName = css`
    background-color: #6acaca;
  `;

  const onClick = (filter: Filter) => () => {
    setFilter(filter);
  };

  return (
    <div
      className={css`
        display: flex;
        align-items: center;
      `}
    >
      <button
        className={clsx({ [activeClassName]: selectIsActive('active') })}
        onClick={onClick('active')}
      >
        Active
      </button>
      <button
        className={clsx({ [activeClassName]: selectIsActive('completed') })}
        onClick={onClick('completed')}
      >
        Completed
      </button>
      <button
        className={clsx({ [activeClassName]: selectIsActive('all') })}
        onClick={onClick('all')}
      >
        All
      </button>
    </div>
  );
};
