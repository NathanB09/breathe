import { useState, useEffect } from 'react'
import { useGlobalState } from '../hooks/use-global-state'
import formatTime from '../helper/format-time'

const Timer = () => {
  const [{ timerActive, countdownActive }] = useGlobalState()
  const startingTime = countdownActive ? 15 : 0
  const [seconds, setSeconds] = useState(startingTime)

  useEffect(() => {
    let interval = null
    if (timerActive || countdownActive) {
      interval = setInterval(() => {
        if (countdownActive) {
          setSeconds((seconds) => seconds - 1)
        } else {
          setSeconds((seconds) => seconds + 1)
        }
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [timerActive, countdownActive])

  const time = formatTime(seconds)

  return <>{time}</>
}

export default Timer
