import * as React from 'react'
import * as ReactRouterDOM from 'react-router-dom'

const { NavLink } = ReactRouterDOM

const StagesNavigation = () => {
  return (
    <div>
      <div className="steps">
        <NavLink to="/batch/qa/stage1" className="step">Stage 1</NavLink>
        <i aria-hidden="true" className="fa fa-angle-right"></i>
        <NavLink to="/batch/qa/stage2" className="step">Stage 2</NavLink>
      </div>
      <hr />
    </div>
  )
}

export default StagesNavigation
