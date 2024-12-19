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

export const atckScoreingame = (uuid, score) => {
  ingame[uuid].defaultIngame.combo++;
  if (ingame[uuid].defaultIngame.maxCombo < ingame[uuid].defaultIngame.combo) {
    ingame[uuid].defaultIngame.maxCombo = ingame[uuid].defaultIngame.combo;
  }
  return (ingame[uuid].defaultIngame.score += score);
};

export const hitScoreingame = (uuid) => {
  return (ingame[uuid].defaultIngame.combo = 0);
};

export const removeingame = (uuid) => {
  if (ingame[uuid]) {
    return ingame.splice(uuid, 1);
  }
};
