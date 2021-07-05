import * as ACTION from '../constants/action'
import { useGlobalState } from '../hooks/use-global-state'

const RoundCount = ({}) => {
  const [state, dispatch] = useGlobalState()

  const addRound = () => {
    dispatch(ACTION.ADD_ROUND)
  }

  const removeRound = () => {
    dispatch(ACTION.REMOVE_ROUND)
  }

  return (
    <div>
      <button onClick={removeRound}>- Round</button>
      <button onClick={addRound}>+ Round</button>
    </div>
  )
}

RoundCount.propTypes = {}

export default RoundCount
