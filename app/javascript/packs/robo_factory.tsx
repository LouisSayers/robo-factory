import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactRouterDOM from 'react-router-dom'

const { BrowserRouter, Redirect, Route, NavLink } = ReactRouterDOM

const Sidebar = () => (
  <nav className="col-sm-3 col-md-2 d-none d-sm-block sidebar">
    <ul className="nav nav-pills flex-column">
      <li className="subtitle">Dashboards</li>
      <li className="nav-item">
        <NavLink to="/batch/qa" className="nav-link">Quality Assurance</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/batch/shipping" className="nav-link">Shipping</NavLink>
      </li>
    </ul>
  </nav>
)

const QualityAssurance = () => (
  <main className="col-sm-9 ml-sm-auto col-md-10 pt-3">
    <h1>Quality Assurance</h1>
  </main>
)

const RobotShipping = () => (
  <main className="col-sm-9 ml-sm-auto col-md-10 pt-3">
    <h1>Shipping</h1>
  </main>
)

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
