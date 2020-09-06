export const tile = (row, column, isDot, wasVisited) => {
  if (isDot === undefined) isDot = false;
  if (wasVisited === undefined) wasVisited = false;

  return { row, column, isDot, wasVisited };
};
