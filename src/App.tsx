import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store/store'
import { decrement, increment, incrementByAmount } from './store/slices/counter/counterSlice'

//import type { RootState } from '../../app/store'

function App() {
  const { counter } = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
 
      <h1>Counter is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch( increment() )}>
          Increment
        </button>
        <button onClick={() => dispatch( decrement() )}>
          Decrement
        </button>
        <button onClick={() => dispatch( incrementByAmount(2) )}>
          Increment by 2
        </button>
      </div>
    </>
  )
}

export default App
