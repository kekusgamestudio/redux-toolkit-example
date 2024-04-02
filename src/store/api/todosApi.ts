import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface TodoData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  endpoints: (builder) => ({

    getTodos: builder.query({
      query: () => '/todos'
    }),

    getTodo: builder.query({
      query: (todoId) => `/todos/${ todoId }`
    }),

  })
});


export const { useGetTodosQuery, useGetTodoQuery, } = todosApi;