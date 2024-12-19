import { getDefaultData } from "../init/defaultData.js";
import { atckScoreingame, hitScoreingame } from "./ingame.model.js";

export const checkAtck = (uuId, position, stageId) => {
  const { player, combo } = getDefaultData();
  const positionTemp = position;
  if (
    positionTemp <= player.data.atckReachExcellent &&
    positionTemp >= -player.data.atckReachExcellent
  ) {
    atckScoreingame(uuId, combo.data[stageId].data.Excellent);
    return;
  }
  //덜 좋은거
  if (
    positionTemp <= player.data.atckReachgreat &&
    positionTemp >= -player.data.atckReachgreat
  ) {
    atckScoreingame(uuId, combo.data[stageId].data.GREAT);
    return;
  }
  // 좋은거
  if (
    positionTemp <= player.data.atckReachgood &&
    positionTemp >= -player.data.atckReachgood
  ) {
    atckScoreingame(uuId, combo.data[stageId].data.GOOD);
    return;
  }
  //빚나감!
  hitScoreingame(uuId);
};
