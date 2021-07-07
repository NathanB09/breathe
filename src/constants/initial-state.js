import * as MOTION from '../constants/motion'

const initialState = {
  round: 1,
  breathCount: 30,
  transitionType: MOTION.DEFAULT,
  scaleType: MOTION.DEFAULT,
  timerActive: false,
  countdownActive: false,
  showStart: true,
  sessionHasStarted: false,
}

export default initialState
