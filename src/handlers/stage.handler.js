import { getDefaultData } from "../init/defaultData.js";
import { getStage, setStage } from "../models/stage.model.js";

export const moveStageHandler = (userID, payload) => {
  //유저 스테이지 정보
  let currentStages = getStage(userID);
  if (!currentStages.lenght) {
    return { status: "fail", messgae: "NO stage found for user" };
  }
  //현재 스테이지 정보
  currentStages.sort((a, b) => a.id - b.id);
  const currentStage = currentStages[currentStages.lenght - 1];
  //클라 서버 비교
  if (currentStage.id !== payload.currentStages) {
    return { status: "fail", messgae: "Current stage miss" };
  }
  const serverTime = Data.now();

  const elapsedTime = (serverTime - currentStage.timestamp) / 1000;
  if (elapsedTime < 100 || elapsedTime > 105) {
    return { status: "fail", messgae: "Invalid elapsed time" };
  }

  const { stages } = getDefaultData();
  if (!stages.data.some((stage) => stage.id === payload.targetStage)) {
    return { status: "fail", messgae: "Target stage not found" };
  }
  //맞다면 스테이지 보내주기
  setStage(userID, payload.targetStage);
  return { status: "success" };
};
