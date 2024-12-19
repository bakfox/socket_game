const stage = [];
const defoltStage = [
  {
    stageId: 1,
    data: [{ score: "0", maxScore: "0", scoreText: "F" }],
  },
  {
    stageId: 2,
    data: [{ score: "0", maxScore: "0", scoreText: "F" }],
  },
  {
    stageId: 3,
    data: [{ score: "0", maxScore: "0", scoreText: "F" }],
  },
  {
    stageId: 4,
    data: [{ score: "0", maxScore: "0", scoreText: "F" }],
  },
  {
    stageId: 5,
    data: [{ score: "0", maxScore: "0", scoreText: "F" }],
  },
  {
    stageId: 6,
    data: [{ score: "0", maxScore: "0", scoreText: "F" }],
  },
  {
    stageId: 7,
    data: [{ score: "0", maxScore: "0", scoreText: "F" }],
  },
  {
    stageId: 8,
    data: [{ score: "0", maxScore: "0", scoreText: "F" }],
  },
  {
    stageId: 9,
    data: [{ score: "0", maxScore: "0", scoreText: "F" }],
  },
  {
    stageId: 10,
    data: [{ score: "0", maxScore: "0", scoreText: "F" }],
  },
];
// 처음 연결할때 생성
export const createStage = (uuid) => {
  stage[uuid] = defoltStage;
};

export const getStage = (uuid) => {
  return stage[uuid];
};
export const saveStage = (uuid, stageId, clearData) => {
  stage[uuid].defoltStage[stageId] = clearData;
};
export const removeStage = (uuid) => {
  if (stage[uuid]) {
    return stage.splice(uuid, 1);
  }
};
