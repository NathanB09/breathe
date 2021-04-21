import * as ACTION from './action/index'

const reducer = (state, action) => {
  return ACTION[action.type] ? ACTION[action.type](state, action) : state
}

export default reducer
