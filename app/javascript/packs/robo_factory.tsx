import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactRouterDOM from 'react-router-dom'
import Sidebar from './batch/sidebar'
import RobotShipping from './batch/robot_shipping'
import QualityAssurance from './batch/quality_assurance'

const { BrowserRouter, Redirect, Route } = ReactRouterDOM

const App = () => (
  <BrowserRouter>
    <div className="row">
      <Sidebar />
      <Route path='/batch/qa' component={QualityAssurance} />
      <Route path='/batch/shipping' component={RobotShipping} />
      <Route exact path="/" render={() => <Redirect to="/batch/qa" />} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('robo_factory')
)
