import { useEffect } from 'react'
import { useAppDispatch } from '../types'
import {
  clearDetails,
  loadGameDetail,
  loadGameScreenshots,
} from '../store/detail/detail-actions'

export const useGameDetail = (id: string | undefined) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadGameDetail(id))
    dispatch(loadGameScreenshots(id))

    return () => {
      dispatch(clearDetails())
    }
  }, [dispatch, id])
}
