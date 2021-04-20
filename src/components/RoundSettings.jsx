import Slider from './Slider'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const RoundSettings = ({}) => {
  return (
    <Paper className='round-settings'>
      <Grid container justify='center' spacing={5}>
        <Grid item>
          <Slider label='Breathe Count' type='breatheCount' />
        </Grid>
        <Grid item>
          <Slider label='Breathe Hold' type='breatheHold' />
        </Grid>
      </Grid>
    </Paper>
  )
}

RoundSettings.propTypes = {}

export default RoundSettings
