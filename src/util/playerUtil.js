export function addPlayerFunds(game, playerIndex, amount) {
  const {players} = game;

  const newPlayers = players.map(player => {
    if (player.index === playerIndex) {
      return {
        ...player,
        cash: player.cash + amount,
      };
    } else {
      return player;
    }
  });

  return {
    ...game,
    players: newPlayers,
  };
}

export function removePlayerFunds(game, playerIndex, amount) {
  const {players} = game;

  const newPlayers = players.map(player => {
    if (player.index === playerIndex) {
      return {
        ...player,
        cash: player.cash - amount,
      };
    } else {
      return player;
    }
  });

  return {
    ...game,
    players: newPlayers,
  };
}