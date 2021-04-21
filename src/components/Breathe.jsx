import { useState } from 'react'
import { motion } from 'framer-motion'

const scale = [1, 10, 1]

const Breathe = () => {
  const [count, setCount] = useState(1)

  const handleAnimationComplete = (value) => {
    console.log('value: ', value)
  }

  const handleUpdate = ({ scale }) => {
    if (scale === 1) {
      setCount(count + 1)
    }
  }

  const transition = {
    duration: 3.15,
    ease: 'easeInOut',
    repeat: 4,
    repeatType: 'loop',
  }

  return (
    <>
      <h3>Hold</h3>
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
          opacity: [0, 0.2, 0.4, 0.6, 0.8, 1, 1, 0],
        }}
        transition={transition}
      >
        {count}
      </motion.div>
      <h3>1:00</h3>
    </>
  )
}

Breathe.propTypes = {}

export default Breathe
