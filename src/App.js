import './App.css'
import * as SLIDER_MARK from './constants/slider-marks'
import { useState } from 'react'
import { useFabStyles } from './hooks/use-styles'
import Slider from '@material-ui/core/Slider'
import Fab from '@material-ui/core/Fab'
import RefreshIcon from '@material-ui/icons/Refresh'
import Breath from './components/Breath'

const App = () => {
  const [round, setRound] = useState(0)
  const fabClasses = useFabStyles()
  return (
    <div className="App">
      <div className="breath-wrapper">
        <Breath key={round} />
      </div>
      {/* <p>Breathe</p>
      <Slider
        style={{ width: 300 }}
        defaultValue={1000}
        step={500}
        min={1000}
        max={5000}
        marks={SLIDER_MARK.times}
      /> */}
      <Fab
        classes={fabClasses}
        color="primary"
        onClick={() => setRound(round + 1)}
      >
        <RefreshIcon />
      </Fab>
    </div>
  )
}

export default App
