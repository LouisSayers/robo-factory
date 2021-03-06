import * as React from 'react'
import * as ReactRedux from 'react-redux'
import * as ReactRouterDOM from 'react-router-dom'
import StagesNavigation from '../components/stages_navigation'
import BatchDetails from '../components/batch_details'
import QualityAssuranceStage1 from './quality_assurance_stage1'
import QualityAssuranceStage2 from './quality_assurance_stage2'

const { Redirect, Route } = ReactRouterDOM
const { connect } = ReactRedux

const QualityAssurance = (props) => {
  return (
    <main className="col-sm-9 ml-sm-auto col-md-10 pt-3">
      <h1>Quality Assurance</h1>
      <BatchDetails batchId={props.batchId} />
      <StagesNavigation />
      <Route exact path='/batch/qa' render={() => <Redirect to="/batch/qa/stage1" />}/>
      <Route path='/batch/qa/stage1' component={QualityAssuranceStage1}/>
      <Route path='/batch/qa/stage2' component={QualityAssuranceStage2}/>
      { props.loading ? '<p>Loading...</p>' : '' }
    </main>
  )
}

function mapStateToProps (state) {
  let { batchId, isFetching } = state.batch
  return { loading: isFetching, batchId }
}

export default connect(mapStateToProps)(QualityAssurance)
