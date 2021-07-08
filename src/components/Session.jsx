import * as ACTION from '../constants/action'
import { motion, AnimatePresence } from 'framer-motion'
import { useGlobalState } from '../hooks/use-global-state'
import Breathe from './Breathe'
import RoundTime from './RoundTime'
import SessionControls from './SessionControls'

const Session = () => {
  const [state, dispatch] = useGlobalState()

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
          <SessionControls />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

Session.propTypes = {}

export default Session
