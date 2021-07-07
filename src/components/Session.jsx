import * as ACTION from '../constants/action'
import * as MOTION from '../constants/motion'
import { motion, AnimatePresence } from 'framer-motion'
import { useGlobalState } from '../hooks/use-global-state'
import Breathe from './Breathe'
import RoundTime from './RoundTime'

const Session = () => {
  const [state, dispatch] = useGlobalState()

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

  const handleExit = () => {
    setTimeout(() => dispatch(ACTION.TOGGLE_SHOW_START), 500)
  }

  return (
    <AnimatePresence onExitComplete={handleExit}>
      {state.sessionHasStarted && (
        <motion.div
          key='Session'
          className='session'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Breathe key={state.round} />
          <RoundTime />

          {state.timerActive && (
            <>
              <button onClick={handleContinue} style={{ position: 'absolute', marginTop: '200px' }}>
                Continue
              </button>
              <button
                onClick={handleEndSession}
                style={{ position: 'absolute', marginTop: '250px' }}
              >
                End Session
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

Session.propTypes = {}

export default Session
