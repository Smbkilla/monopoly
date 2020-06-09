import React from 'react';

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Field from "./components/Field/Field";
import colors from "./constants/colors";
import orientation from "./constants/orientation";

import './App.css';

const player = (name) => ({
  name,
  icon: <AccountCircleIcon color="inherit"/>,
  color: colors.PLAYER_COLORS.RED,
});

function App() {
  return (
    <Grid container justify="center">
      <Field backgroundColor={colors.BOARD_COLORS.GREEN}
             orientation={orientation.BOTTOM}
             title="ULICA OVA I ONA"
             price="200K"
             players={[
               player("Player1"),
               player("Player2"),
               player("Player3"),
               player("Player4"),
             ]}/>
    </Grid>
  );
}

export default App;
