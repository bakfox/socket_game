const users = [];

export const addUser = (user, uuId) => {
  users[uuId] = user;
};

export const removeUser = (socketId) => {
  const index = users.findIndex((user) => user.socketId == socketId);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

export const getUser = (uuId) => {
  return users[uuId];
};
export const getAllUser = () => {
  return users;
};
