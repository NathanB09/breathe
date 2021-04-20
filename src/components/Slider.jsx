import * as SLIDER_CONFIG from '../constants/slider-config'
import MSlider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const Slider = ({ label, type }) => {
  const { valueDisplay, defaultValue, step, min, max, marks } = SLIDER_CONFIG[type]

  return (
    <div>
      <Typography id={label}>{label}</Typography>
      <MSlider
        aria-labelledby={label}
        style={{ width: 300 }}
        valueLabelDisplay={valueDisplay}
        defaultValue={defaultValue}
        step={step}
        min={min}
        max={max}
        marks={marks}
      />
    </div>
  )
}

Slider.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
}

export default Slider
