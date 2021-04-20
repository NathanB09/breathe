import { useContext } from 'react'
import { useFabStyles } from './hooks/use-styles'
import { Context } from './store/index'
import Fab from '@material-ui/core/Fab'
import RefreshIcon from '@material-ui/icons/Refresh'
import Breath from './components/Breath'
// import RoundSettings from './components/RoundSettings'

const App = () => {
  const [state, dispatch] = useContext(Context)
  const fabClasses = useFabStyles()

  const handleClick = () => {
    dispatch({ type: 'SET_ROUND', payload: state.round + 1 })
  }

  console.log('state: ', state)

  return (
    <div className='App'>
      <div className='breath-wrapper'>
        <Breath key={state.round} />
      </div>
      {/* <RoundSettings /> */}
      <Fab classes={fabClasses} color='primary' onClick={handleClick}>
        <RefreshIcon />
      </Fab>
    </div>
  )
}

export default App
