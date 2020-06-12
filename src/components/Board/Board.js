import React from "react";
import Grid from "@material-ui/core/Grid";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Field from "../Field/Field";
import colors from "../../constants/colors";
import fieldTypes from "../../constants/fieldType";
import Dice from "../Dice/Dice";
import playerNames from "../../constants/playerName";
import properties from "../../constants/properties";
import PlayerData from "../PlayerData/PlayerData";

const player = (name, color) => ({
  name,
  icon: <AccountCircleIcon color="inherit"/>,
  color,
});

const Board = () => {
  return (
    <Grid container direction="row" justify="space-around" alignContent="center">
      <Grid item xs={10}>
        <Grid container direction="column" style={{marginTop: 70}} justify="space-around">
          {/* prvi redak */}
          <Grid container direction="row" justify="space-around" alignContent="center">
            <Grid item xs={1}>
              <Field property={properties.AMY_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.HOWARD_SCOOTER}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.HOWARD_AND_BERNADETTE_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            {/* <Grid item xs={2}>
              <Dice/>
            </Grid> */}
          </Grid>

          {/* drugi redak */}

          <Grid container direction="row" justify="space-around" alignContent="center">
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            {/* <Grid item xs={2}>
              <Dice/>
            </Grid> */}
          </Grid>

          {/* treci redak */}

          <Grid container direction="row" justify="space-around" alignContent="center">
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            {/* <Grid item xs={2}>
              <Dice/>
            </Grid> */}
          </Grid>

          {/* cetvrti redak */}

          <Grid container direction="row" justify="space-around" alignContent="center">
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            <Grid item xs={1}>
              <Field property={properties.RAJ_APARTMENT}/>
            </Grid>
            {/* <Grid item xs={2}>
              <Dice/>
            </Grid> */}
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