import PropTypes from 'prop-types'

const Card = ({ children }) => {
  return <div className='card'>{children}</div>
}

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default Card
