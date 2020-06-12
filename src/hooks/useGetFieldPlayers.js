import React, {useContext} from "react";

import _ from "lodash";

import {GameContext} from "../App";

function useGetFieldPlayers(name) {
  const {game} = useContext(GameContext);
  const {fields} = game;

  return _.get(fields, `${name}.players`, []);
}

export default useGetFieldPlayers;