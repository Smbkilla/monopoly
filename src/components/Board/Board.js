import React, {useContext} from "react";
import Grid from "@material-ui/core/Grid";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Dice from "../Dice/Dice";
import PlayerData from "../PlayerData/PlayerData";
import Field from "../Field/Field";
import properties from "../../constants/properties";
import {GameContext} from "../../App";

const player = (name, color) => ({
  name,
  icon: <AccountCircleIcon color="inherit"/>,
  color,
});

const Board = () => {
  console.log(useContext(GameContext));
  return (
    <Grid container direction="row" justify="space-around" alignContent="center">
      <Grid item xs={10}>
        <Grid container direction="column" style={{marginTop: 70}}>

        {/* prvi redak */}
        <Grid container direction="row" justify="space-around" alignContent="center" spacing={1}>
          <Grid item xs={1} container justify="space-around" alignContent="center">
            <Field property={properties.START}/>
          </Grid>
          <Grid item xs={1} container justify="space-around" alignContent="center">
            <Field property={properties.BROKEN_ELEVATOR}/>
          </Grid>
          <Grid item xs={1} container justify="space-around" alignContent="center">
            <Field property={properties.ROOMATE_AGREEMENT_1}/>
          </Grid>
          <Grid item xs={1} container justify="space-around" alignContent="center">
            <Field property={properties.LAUNDRY_ROOM}/>
          </Grid>
          <Grid item xs={1} container justify="space-around" alignContent="center">
            <Field property={properties.NEW_COMIC_BOOK_DAY}/>
          </Grid>
          <Grid item xs={1} container justify="space-around" alignContent="center">
            <Field property={properties.TOY_TRAIN_SET}/>
          </Grid>
          <Grid item xs={1} container justify="space-around" alignContent="center">
            <Field property={properties.NORTH_POLE_RESEARCH_STATION}/>
          </Grid>
          <Grid item xs={1} container justify="space-around" alignContent="center">
            <Field property={properties.FORTUNE_COOKIE_1}/>
          </Grid>
          <Grid item xs={1} container justify="space-around" alignContent="center">
            <Field property={properties.CERN_LARGE_HADRON_COLLIDER}/>
          </Grid>
          <Grid item xs={1} container justify="space-around" alignContent="center">
            <Field property={properties.INTERNATIONAL_SPACE_STATION}/>
          </Grid>
        </Grid>

            {/* drugi redak */}
          <Grid container direction="row" justify="space-around" alignContent="center">
            <Grid item xs={1}>
              <Field property={properties.JAIL}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.BERNADETTE_OFFICE}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.SHELDON_WIFI}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.AMY_LAB}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.MRS_WOLOWITZ_HOUSE}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.SOYUZ_ROCKET}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.MODEL_TRAIN_STORE}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.ROOMATE_AGREEMENT_2}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.THE_COMIC_CENTER_OF_PASADENA}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.THE_CHEESECAKE_FACTORY}/>
            </Grid>
          </Grid>

          {/* treci redak */}

          <Grid container direction="row" justify="space-around" alignContent="center">
            <Grid item xs={1}>
              <Field property={properties.PARKING}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.SHELDON_OFFICE}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.FORTUNE_COOKIE_2}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.HOWARD_LAB}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.LEONARD_LAB}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.LEONARD_CAR}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_OFFICE}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.SHELDON_PARKING_SPACE}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.PENNY_WINE}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.PHYSICS_DEPARTMENT_CAFETERIA}/>
            </Grid>
          </Grid>

          {/* cetvrti redak */}

          <Grid container direction="row" justify="space-around" alignContent="center">
            <Grid item xs={1}>
              <Field property={properties.GO_TO_JAIL}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.AMY_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.ROOMATE_AGREEMENT_3}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.HOWARD_AND_BERNADETTE_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.HOWARD_SCOOTER}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.FORTUNE_COOKIE_3}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.PENNY_APARMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.BERNAETTE_RING}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.SHELDON_AND_LEONARD_APARTMENT}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Grid container direction="column" style={{marginTop: 70}} justify="space-around">
          <Dice />
          <PlayerData />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Board;