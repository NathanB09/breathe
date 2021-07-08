import * as ACTION from '../constants/action'
import * as MOTION from '../constants/motion'
import { useGlobalState } from '../hooks/use-global-state'

const SessionControls = () => {
  const [{ timerActive }, dispatch] = useGlobalState()

  const handleContinue = () => {
    dispatch(ACTION.SET_TRANSITION, MOTION.HOLD)
    dispatch(ACTION.SET_SCALE, MOTION.HOLD)
    dispatch(ACTION.TOGGLE_TIMER)

    setTimeout(() => dispatch(ACTION.TOGGLE_COUNTDOWN), 2000)

    setTimeout(() => {
      dispatch(ACTION.TOGGLE_COUNTDOWN)
      dispatch(ACTION.SET_SCALE, MOTION.REVERSE)
    }, 17000)
  }

  const handleEndSession = () => {
    dispatch(ACTION.END_SESSION)
  }

  return (
    timerActive && (
      <div className='session-controls'>
        <button onClick={handleContinue} title='Continue'>
          <i className='fas fa-step-forward' />
        </button>
        <button onClick={handleEndSession} title='End Session'>
          <i className='fas fa-stop' />
        </button>
      </div>
    )
  )
}

export default SessionControls
