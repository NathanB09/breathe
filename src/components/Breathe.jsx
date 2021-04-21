import { useState } from 'react'
import { motion } from 'framer-motion'

const Breathe = () => {
  const [count, setCount] = useState(1)

  // const handleAnimationComplete = (value) => {
  //   console.log('value: ', value)
  // }

  const handleUpdate = ({ scale }) => {
    if (scale === 1) {
      setCount(count + 1)
    }
  }

  const bubbleTransistion = {
    duration: 3.15,
    ease: 'easeInOut',
    repeat: 4,
    repeatType: 'loop',
  }

  return (
    <>
      <motion.div
        onUpdate={handleUpdate}
        className='breath-bubble'
        style={{ background: '#367676' }}
        animate={{ scale: [1, 10, 1] }}
        transition={bubbleTransistion}
      />
      <motion.div
        className='breath-bubble'
        style={{ background: '#489e9e' }}
        animate={{ scale: [1, 9, 1] }}
        transition={bubbleTransistion}
      />
      <motion.div
        className='breath-bubble'
        style={{ background: '#5ac6c6' }}
        animate={{ scale: [1, 8, 1] }}
        transition={bubbleTransistion}
      />
      <motion.div
        className='breath-bubble'
        style={{ background: 'none' }}
        animate={{
          scale: [1, 8, 1],
          opacity: [0, 0.2, 0.4, 0.6, 0.8, 1, 1, 0],
        }}
        transition={bubbleTransistion}
      >
        {count}
      </motion.div>
    </>
  )
}

Breathe.propTypes = {}

export default Breathe
