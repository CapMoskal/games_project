import { Dispatch } from 'redux'

import {
  TDetailActions,
  TGameDetail,
  TScreenshotsResponse,
} from './detail-types'

import { ALL_GAMES_URL, API_KEY } from '../../config'

export const SET_GAME = '@@detail/SET_GAME'
export const SET_LOADING = '@@detail/SET_LOADING'
export const SET_ERROR = '@@detail/SET_ERROR'

export const SET_SCREENSHOTS = '@@detail/SET_SCREENSHOTS'
export const SET_ERROR_SCREENSHOTS = '@@detail/SET_ERROR_SCREENSHOTS'

export const CLEAR_DETAIL = '@@detail/CLEAR_DETAIL'

export const clearDetails = () => ({
  type: CLEAR_DETAIL,
})

export const setLoading = (): TDetailActions => ({
  type: SET_LOADING,
})
export const setError = (err: string): TDetailActions => ({
  type: SET_ERROR,
  payload: err,
})
const setGame = (game: TGameDetail): TDetailActions => ({
  type: SET_GAME,
  payload: game,
})

export const setScreenshots = (
  screenshots: TScreenshotsResponse
): TDetailActions => ({
  type: SET_SCREENSHOTS,
  payload: screenshots,
})
export const setErrorScreenshots = (err: string): TDetailActions => ({
  type: SET_ERROR_SCREENSHOTS,
  payload: err,
})

const constructGameDetailURL = (id: string) =>
  `${ALL_GAMES_URL}/${id}?key=${API_KEY}`
const constructGameScreenshotsURL = (id: string) =>
  `${ALL_GAMES_URL}/${id}/screenshots?key=${API_KEY}`

export const loadGameDetail =
  (id: string | undefined) =>
  async (dispatch: Dispatch<TDetailActions>) => {
    dispatch(setLoading())
    if (!id) {
      dispatch(setError('Game ID is undefined'))
      console.error('Game ID is undefined')
      return
    }
    try {
      const res = await fetch(constructGameDetailURL(id))

      if (!res.ok) {
        throw new Error(
          'Network response was not ok ' + res.statusText
        )
      }
      const data: TGameDetail = await res.json()
      dispatch(setGame(data))
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : String(err)
      dispatch(setError(errorMessage))
      console.error('Game detail error:', errorMessage)
    }
  }

export const loadGameScreenshots =
  (id: string | undefined) =>
  async (dispatch: Dispatch<TDetailActions>) => {
    if (!id) {
      dispatch(setErrorScreenshots('Game ID is undefined'))
      console.error('Game ID is undefined')
      return
    }
    try {
      const res = await fetch(constructGameScreenshotsURL(id))

      if (!res.ok) {
        throw new Error(
          'Network response was not ok ' + res.statusText
        )
      }
      const data: TScreenshotsResponse = await res.json()
      dispatch(setScreenshots(data))
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : String(err)
      dispatch(setErrorScreenshots(errorMessage))
      console.error('Screenshots error:', errorMessage)
    }
  }
