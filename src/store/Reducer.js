import * as ACTION from './action/index.js'

const Reducer = (state, action) => {
  return ACTION[action.type](state, action)
}

export default Reducer
