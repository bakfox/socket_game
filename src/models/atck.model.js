import { getDefaultData } from "../init/defaultData.js";
import { atckScoreingame, hitScoreingame } from "./ingame.model.js";

export const checkAtck = (uuId, position, stageId) => {
  const { player, combo } = getDefaultData();
  if (
    position <= player[5].atckReachExcellent &&
    position >= -player[5].atckReachExcellent
  ) {
    atckScoreingame(uuId, combo.data[stageId].data[2].Excellent);
    return;
  }
  //덜 좋은거
  if (
    position <= player[4].atckReachgreat &&
    position >= -player[4].atckReachgreat
  ) {
    atckScoreingame(uuId, combo.data[stageId].data[1].GREAT);
    return;
  }
  // 좋은거
  if (
    position <= player[3].atckReachgood &&
    position >= -player[3].atckReachgood
  ) {
    atckScoreingame(uuId, combo.data[stageId].data[0].GOOD);
    return;
  }
  //빚나감!
  hitScoreingame(uuId);
};
