import * as BatchConstants from '../constants'

const { 
  BATCH_FETCHING_DATA, 
  BATCH_FETCHING_DATA_SUCCESS, 
  BATCH_FETCHING_DATA_FAILURE 
} = BatchConstants

const initialState = {
  robots: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

const batch = (state = initialState, action) => {
  switch (action.type) {
    case BATCH_FETCHING_DATA:
      return {
        ...state,
        robots: [],
        isFetching: true,
        error: false
      }
    case BATCH_FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        robots: action.data
      }
    case BATCH_FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}

export default batch
