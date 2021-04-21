import * as ACTION from '../constants/action'
import { useGlobalState } from '../hooks/use-global-state'
import Slider from './Slider'
import Card from './Card'
import PropTypes from 'prop-types'

const Round = ({ name, round }) => {
  const [state, dispatch] = useGlobalState()

  const handleChange = (event, value) => {
    dispatch(ACTION.SET_ROUND_TIME, { name, value })
  }

  return (
    <Card>
      <p>Round {round}</p>
      <Slider label='Breathe Hold' type='breathHold' onChange={handleChange} value={state[name]} />
    </Card>
  )
}

Round.propTypes = {
  name: PropTypes.string,
  round: PropTypes.number,
}

export default Round
