const ingame = [];
let defaultIngame = {
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
  ingame[uuid].combo++;
  if (ingame[uuid].maxCombo < ingame[uuid].combo) {
    ingame[uuid].maxCombo = ingame[uuid].combo;
  }
  ingame[uuid].score = Number(ingame[uuid].score) + Number(score);
  return;
};

export const hitScoreingame = (uuid) => {
  ingame[uuid].combo = 0;
};

export const removeingame = (uuid) => {
  if (ingame[uuid]) {
    return ingame.splice(uuid, 1);
  }
};
