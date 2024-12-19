import { Socket } from "socket.io";
import { getDefaultData } from "../init/defaultData.js";
import {
  createingame,
  getingame,
  hitScoreingame,
  removeingame,
} from "../models/ingame.model.js";
import { rankCeck } from "../models/rank.model.js";
import { checkAtck } from "../models/atck.model.js";
const checkScore = 2000;
const checkCombo = 10;

export const gameStart = (uuId, payload) => {
  const { combo, monster, player, stage } = getDefaultData();
  createingame(uuId);
  return {
    status: "Sucesss",
    message: "게임 시작하십쇼!",
    data: {
      combo: combo.data[payload.stageId].data,
      monster: monster.data[payload.stageId].data,
      player: player.data,
      stage: stage.data[payload.stageId].data,
    },
  };
};
export const gameEnd = (uuId, payload) => {
  const { combo, score, scoreRank } = payload;
  const ingameData = getingame(uuId);
  let saveScore =
    Math.abs(score - ingameData.score) <= checkScore
      ? combo.score
      : ingameData.score;
  let saveCombo =
    Math.abs(score - ingameData.score) <= checkCombo
      ? combo.score
      : ingameData.score;
  removeingame(uuId);
  if (!rankCeck(scoreRank)) {
    return {
      status: "fail",
      message: "스테이지 패배 X3",
      data: { saveScore, saveCombo, scoreRank },
    };
  }
  return {
    status: "Sucesss",
    message: "스테이지 클리어 :3",
    data: { saveScore, saveCombo, scoreRank },
  };
};

export const playerAtck = (uuId, payload) => {
  const { stageId, position } = payload;
  checkAtck(uuId, position, stageId);
  return {
    status: "Sucesss",
    message: "성공적으로 요청했습니다",
    data: {},
  };
};

export const playerhit = (uuId, payload) => {
  hitScoreingame(uuId);
  return {
    status: "Sucesss",
    message: "성공적으로 요청했습니다",
    data: {},
  };
};
