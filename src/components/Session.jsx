import * as ACTION from '../constants/action'
import * as MOTION from '../constants/motion'
import { motion, AnimatePresence } from 'framer-motion'
import { useGlobalState } from '../hooks/use-global-state'
import Breathe from './Breathe'
import Timer from './Timer'

const Session = ({}) => {
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

  return (
    <AnimatePresence>
      {state.sessionHasStarted && (
        <motion.div
          key='Session'
          className='session'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className='breath-wrapper'>
            <Breathe key={state.round} />
          </div>

          {state.timerActive && (
            <>
              <h3 style={{ position: 'absolute', marginBottom: '100px' }}>Hold</h3>
              <h3 style={{ position: 'absolute', marginTop: '100px' }}>
                <Timer />
              </h3>
              <button onClick={handleContinue} style={{ position: 'absolute', marginTop: '200px' }}>
                Continue
              </button>
            </>
          )}

          {state.countdownActive && (
            <>
              <h1 style={{ position: 'absolute', marginBottom: '100px' }}>Hold</h1>
              <h1 style={{ position: 'absolute', marginTop: '100px' }}>
                <Timer />
              </h1>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

Session.propTypes = {}

export default Session
