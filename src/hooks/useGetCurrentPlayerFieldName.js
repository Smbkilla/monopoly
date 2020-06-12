import React, {useContext} from "react";

import _ from "lodash";

import {GameContext} from "../App";

function useGetCurrentPlayerFieldName() {
  const {game} = useContext(GameContext);
  const {currentPlayer, fields} = game;

  return _.findKey(fields, field => field.players.indexOf(playerIndex => playerIndex === currentPlayer) !== -1);
}

export default useGetCurrentPlayerFieldName;