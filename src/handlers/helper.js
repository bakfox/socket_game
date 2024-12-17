import { Debug } from "@prisma/client/runtime/library";
import { CLIENT_VERSION } from "../constants.js";
import { getDefaultData } from "../init/defaultData.js";
import { setStage } from "../models/stage.model.js";
import { getUser, removeUser } from "../models/user.model.js";
import handlerMappings from "./handlerMapping.js";
// 유저 끊는 함수
export const handleDisconnect = (socket, uuId) => {
  removeUser(socket.id);
};

export const handleConnect = (socket, uuId) => {
  //지금 연결됨!
  const users = getUser();
  socket.emit("handleConnect", {
    status: "success",
    message: "성공 했습니다.",
    data: { uuId, users },
  });
};

export const handleEvent = (io, socket, data) => {
  const parsedData = JSON.parse(data);
  console.log(parsedData.data, parsedData);
  if (!CLIENT_VERSION.includes(parsedData.CLIENT_VERSION)) {
    //클라이언트 버전
    socket.emit("response", {
      status: "fail",
      message: "클라이언트 버전이 이상합니다!",
    });
    return;
  }
  const handler = handlerMappings[parsedData.handlerId];
  // 핸들러 존재 여부 체크
  if (!handler) {
    socket.emit("response", {
      status: "fail",
      message: "지정된 핸들러가 없어요!",
    });
    return;
  }

  const response = handler(socket.Id, parsedData.data);

  if (response.broadcast) {
    io.emit("response", "broadcast");
    return;
  }
  Debug.log("데이터 보내는중!", response);
  socket.emit("response", response);
  Debug.log("데이터 보내는중!", socket.Id, socket.id);
};
