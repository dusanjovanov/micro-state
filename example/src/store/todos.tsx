import { effect, select, value } from '../../../dist';

export type Todo = {
  id: number;
  name: string;
  isDone: boolean;
};

let lastTodoId = 1;

export const todosValue = value<Todo[]>([]);

export const addTodo = () => {
  const id = lastTodoId++;
  todosValue.v = [...todosValue.v, { id, name: `Todo ${id}`, isDone: false }];
};

export const updateTodo = (todo: Todo) => {
  const index = todosValue.v.findIndex(t => t.id === todo.id);
  todosValue.v = [
    ...todosValue.v.slice(0, index),
    todo,
    ...todosValue.v.slice(index + 1),
  ];
};

export const deleteTodo = (id: number) => {
  todosValue.v = todosValue.v.filter(t => t.id !== id);
};

export const editedTodoIdValue = value<number | null>(null);

export const selectIsTodoEdited = select(
  [editedTodoIdValue],
  () => (id: number) => editedTodoIdValue.v === id
);

export const startEdit = (id: number) => {
  editedTodoIdValue.v = id;
};

export const endEdit = (todo: Todo) => {
  editedTodoIdValue.v = null;
  updateTodo(todo);
};

export type Filter = 'all' | 'completed' | 'active';

export const filterValue = value<Filter>('all');

export const selectIsFilterActive = select(
  [filterValue],
  () => (filter: string) => filter === filterValue.v
);

export const setFilter = (filter: Filter) => {
  filterValue.v = filter;
};

export const filteredTodosValue = value(todosValue.v);

const applyFilter = () => {
  filteredTodosValue.v = todosValue.v.filter(t => {
    switch (filterValue.v) {
      case 'all':
        return true;
      case 'active':
        return !t.isDone;
      case 'completed':
        return t.isDone;
    }
  });
};

effect([todosValue], applyFilter);
effect([filterValue], applyFilter);
