import * as React from 'react'

const BatchDetails = ({ batchId }) => ((typeof batchId) !== 'undefined') ? (
    <div className="subtitle meta">Batch (#{ batchId })</div>
  ) : null

export default BatchDetails
