import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactRedux from 'react-redux'
import App from './apps/batch'
import configureStore from './configure_store'

const { Provider } = ReactRedux
const store = configureStore()

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  ReduxApp(),
  document.getElementById('robo_factory')
)
