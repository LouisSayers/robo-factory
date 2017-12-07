import * as Redux from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import websiteApi from './apis/website_api'
import { composeWithDevTools } from 'redux-devtools-extension'

const { applyMiddleware, createStore } = Redux

const configureStore = () => (
  createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(
        thunk.withExtraArgument(websiteApi)
      )
    )
  )
)

export default configureStore
