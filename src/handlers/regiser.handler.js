import { addUser, getUser } from "../models/user.model.js";
import { v4 as uuIdV4 } from "uuId";
import { handleConnect, handleDisconnect, handleEvent } from "./helper.js"; //다른 핸들러한테 받아옴

//실질적인 실행 코드 입니다.
const registerHander = (io) => {
  // 접속후 다음 이벤트를 받기 위해 대기하는 메소드입니다!
  io.on("connection", (socket) => {
    const userUUID = uuIdV4();
    addUser({ uuId: userUUID, socketId: socket.id });

    handleConnect(socket, userUUID);

    socket.on("event", (data) => handleEvent(io, socket, data)); //이벤트 핸들러 연결
    //접속 해제
    socket.on("disconnect", (socket) => {
      handleDisconnect(socket, userUUID);
    });
  });
};
export default registerHander;
