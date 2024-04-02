import { useGetTodosQuery, TodoData } from './store/api/todosApi';

export const TodosApp = () => {

  const algo = useGetTodosQuery();
  const { data: todos = [], isLoading } = algo;
  //console.log(todos)

  return (
    <>
      <h1>TODO App - RTK Query</h1>
      <h4>Is Loading: { isLoading ? 'True' : 'False' }</h4>
      {/* <pre>hola</pre> */}
      <ul>
        { todos.map( (todo: TodoData) => (
          <li key={ todo.id }>
            <strong>{ todo.completed ? 'Done' : 'Pending' } - </strong>
            { todo.title }
          </li>
        ) ) }
      </ul>
      {/* <button>Next Todo</button> */}
    </>
  )
}
