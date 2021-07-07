import React, { createContext, useReducer } from 'react'
import reducer from './reducer'
import initialState from '../constants/initial-state'
import PropTypes from 'prop-types'

export const Context = createContext(initialState)

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
}

Store.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default Store
