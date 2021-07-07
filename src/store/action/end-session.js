import initialState from '../../constants/initial-state'

export const END_SESSION = (state, action) => ({
  ...initialState,
  showStart: false,
})
