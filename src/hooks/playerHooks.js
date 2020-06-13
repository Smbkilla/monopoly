import React, {useContext} from "react";

import {GameContext} from "../App";
import {addPlayerFunds, removePlayerFunds} from "../util/playerUtil";

export function useAddPlayerFunds(playerIndex, amount) {
  const context = useContext(GameContext);
  const {game, setGame} = context;

  setGame({
    ...addPlayerFunds(game, playerIndex, amount)
  });
}

export function useRemovePlayerFunds(playerIndex, amount) {
  const context = useContext(GameContext);
  const {game, setGame} = context;

  setGame({
    ...removePlayerFunds(game, playerIndex, amount)
  });
}