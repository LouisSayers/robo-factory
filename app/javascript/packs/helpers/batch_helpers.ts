import { stage2Complete } from './batch_qa_stage2_helpers'
import { stage2Complete } from './batch_qa_stage2_helpers';

export function batchRobotsFrom(state) {
  let { robots } = state.batch
  return Object.values(robots)
}

export function allStagesComplete(robots) {
  return stage2Complete(robots) && stage2Complete(robots)
}
