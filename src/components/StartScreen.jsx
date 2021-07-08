import * as ACTION from '../constants/action'
import { motion, AnimatePresence } from 'framer-motion'
import { useGlobalState } from '../hooks/use-global-state'

const StartScreen = () => {
  const [state, dispatch] = useGlobalState()

  const handleClick = () => {
    dispatch(ACTION.TOGGLE_SHOW_START)
  }

  const handleExit = () => {
    setTimeout(() => dispatch(ACTION.TOGGLE_SESSION), 500)
  }

  return (
    <AnimatePresence onExitComplete={handleExit}>
      {state.showStart && (
        <motion.div
          key='StartScreen'
          className='start-screen'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div>
            <h1>Welcome to Breathe</h1>
            <p>This breathing exercise app was inspired by the Wim Hof technique.</p>
          </div>
          <button onClick={handleClick} title='Start Session'>
            <i className='fas fa-play' />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default StartScreen
