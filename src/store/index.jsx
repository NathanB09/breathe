import * as MOTION from '../constants/motion'
import React, { createContext, useReducer } from 'react'
import reducer from './reducer'
import PropTypes from 'prop-types'

const initialState = {
  round: 1,
  breathCount: 30,
  transitionType: MOTION.DEFAULT,
  scaleType: MOTION.DEFAULT,
  timerActive: false,
  countdownActive: false
}

export const Context = createContext(initialState)

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
}

Store.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default Store
