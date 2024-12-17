const stage = {};
// 처음 연결할때 생성
export const createStage = (uuid) => {
  stage[uuid] = [];
};

export const getStage = (uuid) => {
  return stage[uuid];
};

export const setStage = (uuid, id, timestamp) => {
  return stage[uuid].push({ id, timestamp });
};
export const clearStage = (uuid) => {
  stage[uuid] = [];
};
