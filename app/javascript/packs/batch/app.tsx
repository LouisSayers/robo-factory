import * as React from 'react'
import * as ReactRouterDOM from 'react-router-dom'
import Sidebar from './sidebar'
import RobotShipping from './robot_shipping'
import QualityAssurance from './quality_assurance'

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

export default App