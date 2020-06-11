import React, {useContext} from "react";

import {GameContext} from "../App";

function useGetFieldPlayers(name) {
  const {game} = useContext(GameContext);
  const {fields} = game;

  return fields[name].players;
}

export default useGetFieldPlayers;