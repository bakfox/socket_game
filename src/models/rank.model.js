export const rankCeck = (rank, stageId) => {
  switch (rank) {
    case "F":
      return false;
    case "C":
      return false;
    case "B":
      return false;
    case "A":
      return true;
    case "S":
      return true;
    case "SS":
      return true;
    default:
      return false;
  }
};
