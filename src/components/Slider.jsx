import * as SLIDER_CONFIG from '../constants/slider-config'
import MSlider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const Slider = ({ label, type, onChange, value }) => {
  const { valueDisplay, defaultValue, step, min, max, marks } = SLIDER_CONFIG[type]

  return (
    <>
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
        onChange={onChange}
        value={value}
      />
    </>
  )
}

Slider.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.number,
}

export default Slider
