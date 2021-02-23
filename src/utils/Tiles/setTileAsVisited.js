export const setTileAsVisited = setTiles => {
  setTiles(state => state.map(row => row.map(el => (el.isDot ? { ...el, isDot: false, wasVisited: true } : el))));
};
