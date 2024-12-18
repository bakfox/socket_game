const ingame = [];
const defaultIngame = {
  score: 0,
  combo: 0,
  maxCombo: 0,
};

export const createingame = (uuid) => {
  stage[uuid] = [];
};

export const getingame = (uuid) => {
  return stage[uuid];
};

export const setingame = (uuid, position, timestamp) => {
  return stage[uuid].push({ id, timestamp });
};
export const clearingame = (uuid) => {
  stage[uuid] = [];
};
