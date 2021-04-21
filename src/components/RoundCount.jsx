import * as ACTION from '../constants/action'
import { useGlobalState } from '../hooks/use-global-state'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const RoundCount = ({}) => {
  const [state, dispatch] = useGlobalState()

  const addRound = () => {
    dispatch(ACTION.ADD_ROUND)
  }

  const removeRound = () => {
    dispatch(ACTION.REMOVE_ROUND)
  }

  return (
    <ButtonGroup color='primary' variant='contained'>
      <Button onClick={removeRound}>- Round</Button>
      <Button onClick={addRound}>+ Round</Button>
    </ButtonGroup>
  )
}

RoundCount.propTypes = {}

export default RoundCount
