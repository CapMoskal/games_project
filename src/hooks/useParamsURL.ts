import { useEffect } from 'react'
import { QueryParams, useAppDispatch } from '../types'
import { API_KEY } from '../config'
import { setParams } from '../store/params/params-actions'

export const useParamsURL = (params: QueryParams) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setParams(params))
  }, [dispatch]) // params ?
}
