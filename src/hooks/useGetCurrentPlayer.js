import React, {useContext} from "react";

import {GameContext} from "../App";

function useGetCurrentPlayer() {
  const {game} = useContext(GameContext);
  const {currentPlayer, players} = game;

  return players.find(player => player.index === currentPlayer);
}

export default useGetCurrentPlayer;