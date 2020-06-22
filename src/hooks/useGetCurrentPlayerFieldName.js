import {useContext} from "react";

import _ from "lodash";

import {GameContext} from "../App";

function useGetCurrentPlayerFieldName() {
  const {game} = useContext(GameContext);
  const {currentPlayer, fields} = game;

  return _.findKey(fields, field => _.findIndex(field.players, playerIndex => playerIndex === currentPlayer) !== -1);
}

export default useGetCurrentPlayerFieldName;