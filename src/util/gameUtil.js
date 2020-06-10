export const getNewGamePlayers = (players = []) => {
  return players.map(player => ({
    ...player,
    cash: 20000000,
  }))
};