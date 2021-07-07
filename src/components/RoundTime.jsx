import { useGlobalState } from '../hooks/use-global-state'
import { motion, AnimatePresence } from 'framer-motion'
import Timer from './Timer'

const RoundTime = () => {
  const [state] = useGlobalState()

  return (
    <AnimatePresence>
      {(state.timerActive || state.countdownActive) && (
        <motion.div
          key='RoundTime'
          className='round-time'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1>Hold</h1>
          <h1>
            <Timer />
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default RoundTime
