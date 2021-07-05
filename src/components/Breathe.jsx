import * as ACTION from '../constants/action'
import * as MOTION from '../constants/motion'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useGlobalState } from '../hooks/use-global-state'

const opacity = [0, 0.2, 0.4, 0.6, 0.8, 1, 1, 0]

const Breathe = () => {
  const [state, dispatch] = useGlobalState()
  const [count, setCount] = useState(1)

  const { transitionType, scaleType } = state
  const transition = MOTION.TRANSITION[transitionType]
  const scale = MOTION.SCALE[scaleType]

  const handleAnimationComplete = (value) => {
    if (transitionType !== MOTION.HOLD && scaleType !== MOTION.REVERSE) {
      dispatch(ACTION.TOGGLE_TIMER)
    }

    if (scaleType === MOTION.REVERSE) {
      setTimeout(() => {
        dispatch(ACTION.SET_TRANSITION, MOTION.DEFAULT)
        dispatch(ACTION.SET_SCALE, MOTION.DEFAULT)
        dispatch(ACTION.SET_ROUND, state.round + 1)
      }, 3000)
    }
  }

  const handleUpdate = ({ scale }) => {
    if (scale === 1) {
      setCount(count + 1)
    }
  }

  return (
    <>
      <motion.div
        onAnimationComplete={handleAnimationComplete}
        onUpdate={handleUpdate}
        className='breath-bubble bubble-1'
        animate={{ scale }}
        transition={transition}
      />
      <motion.div className='breath-bubble bubble-2' animate={{ scale }} transition={transition} />
      <motion.div className='breath-bubble bubble-3' animate={{ scale }} transition={transition} />
      <motion.div
        className='breath-bubble bubble-4'
        animate={{
          scale,
          opacity
        }}
        transition={transition}
      >
        {transitionType !== MOTION.HOLD ? count : null}
      </motion.div>
    </>
  )
}

Breathe.propTypes = {}

export default Breathe
