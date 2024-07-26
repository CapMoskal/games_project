import { createStore, compose, applyMiddleware } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer, RootState } from './rootReducer'
import { thunk, ThunkMiddleware } from 'redux-thunk'

import { MovieListActionTypes } from '../types'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: [],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  composeEnhancer(
    applyMiddleware(
      thunk as ThunkMiddleware<RootState, MovieListActionTypes>
    )
  )
)

export { store }
export const persistor = persistStore(store)
