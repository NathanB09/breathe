const formatTime = (seconds) => {
  const min = Math.floor(seconds / 60)
  const sec = seconds % 60
  const minDoubleDigits = min > 9
  const secDoubleDigits = sec > 9

  if (min > 0) {
    if (minDoubleDigits && secDoubleDigits) {
      return `${min}:${sec}`
    } else if (minDoubleDigits) {
      return `${min}:0${sec}`
    } else if (secDoubleDigits) {
      return `0${min}:${sec}`
    } else {
      return `0${min}:0${sec}`
    }
  } else {
    return secDoubleDigits ? `00:${sec}` : `00:0${sec}`
  }
}

export default formatTime
