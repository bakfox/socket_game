const ingame = [];
const defaultIngame = {
  score: 0,
  combo: 0,
  maxCombo: 0,
};

export const createingame = (uuid) => {
  ingame[uuid] = defaultIngame;
};

export const getingame = (uuid) => {
  return ingame[uuid];
};

export const setingame = (uuid, position, timestamp) => {
  return ingame[uuid].push({ id, timestamp });
};
export const removeingame = (uuid) => {
  if (ingame[uuid]) {
    return ingame.splice(uuid, 1);
  }
};
