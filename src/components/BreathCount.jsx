import * as ACTION from '../constants/action'
import { useGlobalState } from '../hooks/use-global-state'
import Slider from './Slider'
import Card from './Card'

const BreathCount = () => {
  const [state, dispatch] = useGlobalState()

  const handleChange = (event, value) => {
    dispatch(ACTION.SET_BREATH_COUNT, value)
  }

  return (
    <Card>
      <Slider
        label='Breath Count / Round'
        type='breathCount'
        onChange={handleChange}
        value={state.breathCount}
      />
    </Card>
  )
}

BreathCount.propTypes = {}

export default BreathCount
