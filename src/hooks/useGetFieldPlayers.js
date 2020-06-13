import React, {useContext} from "react";

import {GameContext} from "../App";

function useGetFieldPlayers(name) {
  const {game} = useContext(GameContext);
  const {fields, players} = game;

  const playerIndexes = fields[name].players;

  return playerIndexes.map(playerIndex => players.find(player => player.index === playerIndex));
}

export default useGetFieldPlayers;