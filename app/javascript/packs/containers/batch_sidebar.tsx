import * as React from 'react'
import * as ReactRouterDOM from 'react-router-dom'

const { NavLink } = ReactRouterDOM

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

export default Sidebar
