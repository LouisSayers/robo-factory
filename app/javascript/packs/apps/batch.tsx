import * as React from 'react'
import * as ReactRouterDOM from 'react-router-dom'
import * as ReactRedux from 'react-redux'
import { fetchData } from '../actions/batch_actions'

import Sidebar from '../containers/batch_sidebar'
import RobotShipping from '../containers/batch_robot_shipping'
import QualityAssurance from '../containers/batch_quality_assurance'

const { BrowserRouter, Redirect, Route } = ReactRouterDOM
const { connect } = ReactRedux

class App extends React.Component {

  componentDidMount () {
    this.props.fetchData()
  }

  render () {
    return (
      <BrowserRouter>
        <div className="row">
          <Sidebar />
          <Route path='/batch/qa' component={QualityAssurance}/>
          <Route path='/batch/shipping' component={RobotShipping}/>
          <Route exact path="/" render={() => <Redirect to="/batch/qa" />}/>
        </div>
      </BrowserRouter>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
