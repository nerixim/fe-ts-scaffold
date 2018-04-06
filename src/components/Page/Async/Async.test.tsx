import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
/* tslint:disable-next-line */
import Enzyme, { shallow } from 'enzyme';
import { List } from 'immutable';
/* tslint:disable-next-line */
import React from 'react';
import { Todo, todoDefault } from 'DUCKS/todos';
import { Async } from './Async';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });
const sampleTodo = new Todo(todoDefault);
const sampleTodos = List([sampleTodo]);
const getDefaultProps = () => ({
  error: false,
  fetchTodos: jest.fn(),
  requested: false,
  todos: sampleTodos,
});
describe('Async component', () => {
  it('shallow renders without crashing', () => {
    const {
      error,
      fetchTodos,
      requested,
      todos,
    } = getDefaultProps();
    shallow((
      <Async
        error={error}
        fetchTodos={fetchTodos}
        requested={requested}
        todos={todos}
      />
    ));
  });
  it('shallow renders with requested', () => {
    const {
      error,
      fetchTodos,
      todos,
    } = getDefaultProps();
    shallow((
      <Async
        error={error}
        fetchTodos={fetchTodos}
        requested={false}
        todos={todos}
      />
    ));
  });
  it('shallow renders with error', () => {
    const {
      fetchTodos,
      requested,
      todos,
    } = getDefaultProps();
    shallow((
      <Async
        error={true}
        fetchTodos={fetchTodos}
        requested={requested}
        todos={todos}
      />
    ));
  });
  it('calls fetchTodos on mount', () => {
    const {
      error,
      fetchTodos,
      requested,
      todos,
    } = getDefaultProps();
    shallow((
      <Async
        error={error}
        fetchTodos={fetchTodos}
        requested={requested}
        todos={todos}
      />
    ));
    expect(fetchTodos.mock.calls.length).toBe(1);
  });
});