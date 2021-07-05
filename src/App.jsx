import * as ACTION from './constants/action'
import * as MOTION from './constants/motion'
import { useState } from 'react'
import { useGlobalState } from './hooks/use-global-state'
import Breathe from './components/Breathe'
// import SessionSettings from './components/SessionSettings'


const App = () => {
  const [state, dispatch] = useGlobalState()

  const handleClick = () => {
    dispatch(ACTION.SET_TRANSITION, MOTION.HOLD)
    dispatch(ACTION.SET_SCALE, MOTION.HOLD)
    dispatch(ACTION.SET_ROUND, state.round + 1)

    setTimeout(() => {
      dispatch(ACTION.SET_SCALE, MOTION.REVERSE)
    }, 17000)
  }

  return (
    <div className='App'>
      <div className='breath-wrapper'>
        <Breathe key={state.round} />       
      </div>
      <h3 style={{position: 'absolute', marginBottom: '100px'}}>Hold</h3>
      <h3 style={{position: 'absolute', marginTop: '100px'}}>1:00</h3>
      <button onClick={handleClick} style={{position: 'absolute', marginTop: '200px'}}>Continue</button>
    </div>
  )
}

export default App
