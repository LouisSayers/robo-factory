import * as Redux from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const { applyMiddleware, createStore } = Redux

const configureStore = () => (
  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  )
)

export default configureStore
