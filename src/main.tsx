import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import { PokemonApp } from './PokemonApp'
import { TodosApp } from './TodosApp';
import { TodoSearchApp } from './TodoSearchApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PokemonApp />
      <hr />
      <TodoSearchApp />
      <hr />
      <App />
      <hr />
      <TodosApp />
    </Provider>
  </React.StrictMode>,
)
