export const ADD_ROUND = (state, action) => ({
  ...state,
  roundCount: state.roundCount < 10 ? state.roundCount + 1 : state.roundCount,
})
