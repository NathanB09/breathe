import { useState } from 'react'
import { motion } from 'framer-motion'

const Breath = ({}) => {
  const [count, setCount] = useState(1)

  const handleAnimationComplete = (value) => {
    console.log('value: ', value)
  }

  const handleUpdate = ({ scale }) => {
    if (scale === 1) {
      setCount(count + 1)
    }
  }

  const bubbleTransistion = {
    duration: 3.15,
    ease: 'easeInOut',
    loop: 4,
  }

  return (
    <>
      <motion.div
        onUpdate={handleUpdate}
        className="breath-bubble"
        style={{ background: '#367676' }}
        animate={{ scale: [1, 10, 1] }}
        transition={bubbleTransistion}
      />
      <motion.div
        className="breath-bubble"
        style={{ background: '#489e9e' }}
        animate={{ scale: [1, 9, 1] }}
        transition={bubbleTransistion}
      />
      <motion.div
        className="breath-bubble"
        style={{ background: '#5ac6c6' }}
        animate={{ scale: [1, 8, 1] }}
        transition={bubbleTransistion}
      >
        {count}
      </motion.div>
    </>
  )
}

Breath.propTypes = {}

export default Breath