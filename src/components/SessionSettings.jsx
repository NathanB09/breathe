import { useEffect, useState } from 'react'
import { useGlobalState } from '../hooks/use-global-state'
import Grid from '@material-ui/core/Grid'
import BreathCount from './BreathCount'
import RoundCount from './RoundCount'
import Round from './Round'

const SessionSettings = () => {
  const [state, dispatch] = useGlobalState()
  const [rounds, setRounds] = useState([])

  useEffect(() => {
    console.log('state.roundCount: ', state.roundCount)
    const newRounds = []
    for (let i = 1; i <= state.roundCount; i++) {
      newRounds.push(
        <Grid item key={i}>
          <Round name={`round${i}`} round={i} />
        </Grid>
      )
    }
    setRounds(newRounds)
  }, [state.roundCount])

  return (
    <Grid className='session-settings' container direction='column' alignItems='center'>
      <Grid item>
        <BreathCount />
      </Grid>
      <Grid item>
        <RoundCount />
      </Grid>
      {rounds}
    </Grid>
  )
}

SessionSettings.propTypes = {}

export default SessionSettings
