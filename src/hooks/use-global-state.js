import { useContext } from 'react'
import { Context } from '../store/index'

export const useGlobalState = () => {
  const [state, dispatch] = useContext(Context)

  const dispatchAction = (type, payload) => {
    dispatch({ type, payload })
  }

  return [state, dispatchAction]
}
