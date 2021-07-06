export const TOGGLE_SESSION = (state, action) => ({
  ...state,
  sessionHasStarted: !state.sessionHasStarted
})
