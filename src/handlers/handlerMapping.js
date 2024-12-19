import { gameEnd, gameStart, playerAtck, playerhit } from "./game.handler.js";
import { getSelectStage } from "./stage.handler.js";
const handlerMappings = {
  2: gameStart,
  3: gameEnd,
  11: playerAtck,
  12: playerhit,
  21: getSelectStage,
};

export default handlerMappings;
