import * as BatchConstants from '../constants'

const {
  BATCH_FETCHING_DATA,
  BATCH_FETCHING_DATA_SUCCESS,
  BATCH_FETCHING_DATA_FAILURE
} = BatchConstants

export function getData() {
  return {
    type: BATCH_FETCHING_DATA
  }
}

export function getDataSuccess(robots, batchId) {
  return {
    type: BATCH_FETCHING_DATA_SUCCESS,
    robots, batchId
  }
}

export function getDataFailure() {
  return {
    type: BATCH_FETCHING_DATA_FAILURE
  }
}

export function fetchData() {
  return (dispatch, getState, api) => {
    dispatch(getData())
    api.getNextBatch()
      .then((response) =>
        dispatch(getDataSuccess(response.data, response.batch))
      ).catch((error) =>
        dispatch(getDataFailure())
      )
  }
}
