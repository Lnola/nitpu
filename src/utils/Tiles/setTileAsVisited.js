export const setTileAsVisited = setTiles => {
  setTiles(prevState =>
    prevState.map(row => row.map(el => (el.isDot ? { ...el, isDot: false, wasVisited: true } : el))),
  );
};
