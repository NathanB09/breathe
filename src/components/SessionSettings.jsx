import Grid from '@material-ui/core/Grid'
import BreathCount from './BreathCount'
import RoundCount from './RoundCount'

const SessionSettings = () => {
  return (
    <Grid className='session-settings' container direction='column' alignItems='center'>
      <Grid item>
        <BreathCount />
      </Grid>
      <Grid item>
        <RoundCount />
      </Grid>
      <Grid item></Grid>
    </Grid>
  )
}

SessionSettings.propTypes = {}

export default SessionSettings
