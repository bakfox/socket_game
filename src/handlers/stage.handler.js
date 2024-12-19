import { getDefaultData } from "../init/defaultData.js";
import { getStage } from "../models/stage.model.js";

//선택 창에 원하는 스테이지 값 받으면서 클리어 현황 반환
export const getUserStage = (uuId, payload) => {
  const userStage = getStage(uuId);
  const { stage } = getDefaultData();

  return {
    status: "Sucesss",
    message: "현재 데이터 및 스테이지 데이터 입니다!",
    data: {
      userStage: userStage[payload.stageId],
      stage: stage.data[payload.stageId],
    },
  };
};
