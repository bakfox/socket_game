import { gameEnd, gameStart, playerAtck, playerhit } from "./game.handler.js";
import { getUserStage } from "./stage.handler.js";
const handlerMappings = {
  2: gameStart,
  3: gameEnd,
  11: playerAtck,
  12: playerhit,
  21: getUserStage,
};

export default handlerMappings;
