import * as ACTION from './constants/action'
import * as MOTION from './constants/motion'
import { useState } from 'react'
import { useGlobalState } from './hooks/use-global-state'
import Breathe from './components/Breathe'
import Timer from './components/Timer'
// import SessionSettings from './components/SessionSettings'


const App = () => {
  const [state, dispatch] = useGlobalState()

  const handleClick = () => {
    dispatch(ACTION.SET_TRANSITION, MOTION.HOLD)
    dispatch(ACTION.SET_SCALE, MOTION.HOLD)
    dispatch(ACTION.TOGGLE_TIMER)
    
    setTimeout(() => dispatch(ACTION.TOGGLE_COUNTDOWN), 2000)

    setTimeout(() => {
      dispatch(ACTION.TOGGLE_COUNTDOWN)
      dispatch(ACTION.SET_SCALE, MOTION.REVERSE)
    }, 17000)
  }

  return (
    <div className='App'>
      <div className='breath-wrapper'>
        <Breathe key={state.round} />       
      </div>
      
      {state.timerActive && (
        <>
          <h3 style={{position: 'absolute', marginBottom: '100px'}}>Hold</h3>
          <h3 style={{position: 'absolute', marginTop: '100px'}}><Timer /></h3>
          <button onClick={handleClick} style={{position: 'absolute', marginTop: '200px'}}>Continue</button>
        </>
      )}

      {state.countdownActive && (
        <>
          <h1 style={{position: 'absolute', marginBottom: '100px'}}>Hold</h1>
          <h1 style={{position: 'absolute', marginTop: '100px'}}><Timer /></h1>
        </>
      )}
      
    </div>
  )
}

export default App
