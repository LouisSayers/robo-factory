
export function batchRobotsFrom(state) {
  let { robots } = state.batch
  return Object.values(robots)
}
