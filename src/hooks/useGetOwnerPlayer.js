import React, {useContext} from "react";

import {GameContext} from "../App";

function useGetOwnerPlayer(ownerIndex) {
  const {game} = useContext(GameContext);
  const {players} = game;

  return players.find(player => player.index === ownerIndex);
}

export default useGetOwnerPlayer;