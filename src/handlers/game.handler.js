import { Socket } from "socket.io";
import { getDefaultData } from "../init/defaultData.js";
import { createingame } from "../models/ingame.model.js";

export const gameStart = (uuId, payload) => {
  const { combo, monster, player, stage } = getDefaultData();
  createingame(uuId);
  return {
    status: "Sucesss",
    combo: combo.data[payload.stageId],
    monster: monster.data[payload.stageId],
    player,
    stage: stage.data[payload.stageId],
  };
};
export const gameEnd = (uuId, payload) => {
  const { timestamp: gameEndTime, score } = payload;
  const stages = getStage(uuId);

  if (!stage.length) {
    return { status: " fail", message: "No stages found for user" };
  }
  let totalScore = 0;

  stages.array.forEach((stage, index) => {
    let stageEndTime;
    if (index === stage.length - 1) {
      stageEndTime = gameEndTime;
    } else {
      stageEndTime = stage[index + 1].timestamp;
    }
  });
  return { status: "Sucesss" };
};
export const playerAtck = (uuId) => {};
export const playerhit = (uuId) => {};
