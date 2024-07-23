import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { RootState } from '../store/rootReducer'
import { useDispatch } from 'react-redux'

export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatch>()
