import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { Count } from './src/components/Count';
import { CounterControls } from './src/components/CounterControls';
import { TodoFilters } from './src/components/TodoFilters';
import { TodoList } from './src/components/TodoList';

const App = () => {
  return (
    <div>
      <h1>Counter</h1>
      <CounterControls />
      <Count />
      <h1>Todos</h1>
      <TodoFilters />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
