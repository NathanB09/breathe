import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer'
import PropTypes from 'prop-types'

const initialState = {
  round: 0,
  roundCount: 3,
  rounds: {},
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
}

Store.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export const Context = createContext(initialState)
export default Store
