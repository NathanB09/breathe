export const REMOVE_ROUND = (state, action) => ({
  ...state,
  roundCount: state.roundCount > 3 ? state.roundCount - 1 : state.roundCount,
})
