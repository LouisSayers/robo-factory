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

export function getDataSuccess(data) {
  return {
    type: BATCH_FETCHING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  return {
    type: BATCH_FETCHING_DATA_FAILURE
  }
}

export function fetchData() {
  return (dispatch) => {
    dispatch(getData())

    setTimeout(() => {
      dispatch(getDataSuccess('yay'))
    },
      5000
    )
  }
}
