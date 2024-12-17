import { Socket } from "socket.io";
import { getDefaultData } from "../init/defaultData.js";

export const gameStart = (uuId, payload) => {
  const { stage } = getDefaultData();
  //setStage(uuId, stages.data[0].id, payload.timestamp);
  return { status: "Sucesss" };
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
