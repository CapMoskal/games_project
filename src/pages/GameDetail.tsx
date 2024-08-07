import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../types'
import { loadGameDetail } from '../store/detail/detail-actions'
import { useSelector } from 'react-redux'
import { RootState } from '../store/rootReducer'
import { useEffect } from 'react'

export const GameDetail = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const game = useSelector((state: RootState) => state.details)

  useEffect(() => {
    dispatch(loadGameDetail(id))
  }, [dispatch, id])

  console.log(game)

  return <div>{id}</div>
}
