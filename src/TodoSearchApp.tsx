import { useState } from 'react';
import { useGetTodoQuery } from './store/api/todosApi';

export const TodoSearchApp = () => {
  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const previousTodo = () => {
    if (todoId > 1) setTodoId( todoId - 1 );
  }

  const nextTodo = () => {
    setTodoId( todoId + 1 );
  }

  return (
    <>
      <h1>Todo Search by Id App</h1>
      <h4>Is Loading: { isLoading ? 'True' : 'False' }</h4>
      <pre>{ JSON.stringify( todo ) }</pre>
      <button onClick={ previousTodo }>Previous Todo</button>
      <button onClick={ nextTodo }>Next Todo</button>
    </>
  )
}
