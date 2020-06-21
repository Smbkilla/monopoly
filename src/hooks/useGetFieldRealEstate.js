import React, {useContext} from "react";

import {GameContext} from "../App";

function useGetFieldRealEstate(name) {
  const {game: {fields}} = useContext(GameContext);

  return [fields[name].numberOfHouses, fields[name].numberOfHotels];
}

export default useGetFieldRealEstate;