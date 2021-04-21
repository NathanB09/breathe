import * as ACTION from '../constants/action'
import { useGlobalState } from '../hooks/use-global-state'
import Slider from './Slider'
import Card from './Card'
import PropTypes from 'prop-types'

const Round = ({ key }) => {
  const [state, dispatch] = useGlobalState()

  const handleChange = (event, value) => {
    console.log('value: ', value)
  }

  return (
    <Card>
      <p>Round {key}</p>
      <Slider
        label='Breathe Hold'
        type='breathHold'
        onChange={handleChange}
        value={state[`round${key}`]}
      />
    </Card>
  )
}

Round.propTypes = {
  key: PropTypes.number,
}

export default Round
