import { useState } from 'react'
import { useFabStyles } from './hooks/use-styles'
import Fab from '@material-ui/core/Fab'
import RefreshIcon from '@material-ui/icons/Refresh'
import Breath from './components/Breath'
import RoundSettings from './components/RoundSettings'
import Grid from '@material-ui/core/Grid'

const App = () => {
  const [round, setRound] = useState(0)
  const fabClasses = useFabStyles()

  return (
    <div className="App">
      {/* <Grid container justify="center" alignItems="center"> */}
      {/* <div className="breath-wrapper">
        <Breath key={round} />
      </div> */}
      {/* <Grid item xs={12}>
          <RoundSettings />
        </Grid> */}
      <RoundSettings />
      <Fab
        classes={fabClasses}
        color="primary"
        onClick={() => setRound(round + 1)}
      >
        <RefreshIcon />
      </Fab>
      {/* </Grid> */}
    </div>
  )
}

export default App
