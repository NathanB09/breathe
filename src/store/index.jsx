import React, { createContext, useReducer } from 'react'
import reducer from './reducer'
import PropTypes from 'prop-types'

const initialState = {
  round: 0,
  roundCount: 3,
  breathCount: 30,
  round1: 1000,
  round2: 1000,
  round3: 1000,
  round4: 1000,
  round5: 1000,
  round6: 1000,
  round7: 1000,
  round8: 1000,
  round9: 1000,
  round10: 1000,
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
}

Store.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export const Context = createContext(initialState)
export default Store
