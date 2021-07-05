const transition = {
  duration: 3.15,
  ease: 'easeInOut',
  repeat: 2,
  repeatType: 'loop',
}

const holdTransition = {
  duration: 2,
  ease: 'easeInOut'
}

const scale = [1, 10, 1]

const holdScale = [1, 10]

const reverseScale = [10, 1]

// motion types
export const DEFAULT = 'DEFAULT'
export const HOLD = 'HOLD'
export const REVERSE = 'REVERSE'

export const SCALE = {
  [DEFAULT]: scale,
  [HOLD]: holdScale,
  [REVERSE]: reverseScale
}

export const TRANSITION = {
  [DEFAULT]: transition,
  [HOLD]: holdTransition
}