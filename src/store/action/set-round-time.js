export const SET_ROUND_TIME = (state, { payload }) => ({
  ...state,
  [payload.name]: payload.value,
})
