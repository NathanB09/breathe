import * as ACTION from './constants/action'
import { useGlobalState } from './hooks/use-global-state'
import Breathe from './components/Breathe'
import SessionSettings from './components/SessionSettings'

const App = () => {
  const [state, dispatch] = useGlobalState()

  const handleClick = () => {
    dispatch(ACTION.SET_ROUND, state.round + 1)
  }

  console.log('state: ', state)

  return (
    <div className='App'>
      <div className='breath-wrapper'>
        <Breathe key={state.round} />
      </div>
    </div>
  )
}

export default App
