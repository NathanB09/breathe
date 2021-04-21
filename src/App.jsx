import * as ACTION from './constants/action'
import { useFabStyles } from './hooks/use-styles'
import { useGlobalState } from './hooks/use-global-state'
import Fab from '@material-ui/core/Fab'
import RefreshIcon from '@material-ui/icons/Refresh'
import Breathe from './components/Breathe'
import SessionSettings from './components/SessionSettings'

const App = () => {
  const [state, dispatch] = useGlobalState()
  const fabClasses = useFabStyles()

  const handleClick = () => {
    dispatch(ACTION.SET_ROUND, state.round + 1)
  }

  console.log('state: ', state)

  return (
    <div className='App'>
      {/* <div className='breath-wrapper'>
        <Breathe key={state.round} />
      </div> */}
      {/* <RoundSettings /> */}
      <SessionSettings />
      {/* <Fab classes={fabClasses} color='primary' onClick={handleClick}>
        <RefreshIcon />
      </Fab> */}
    </div>
  )
}

export default App
