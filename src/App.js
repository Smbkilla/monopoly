import React from 'react';

import Grid from "@material-ui/core/Grid";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import colors from "./constants/colors";
import Field from "./components/Field/Field";
import fieldTypes from "./constants/fieldType";

import './App.css';

const player = (name, color) => ({
  name,
  icon: <AccountCircleIcon color="inherit"/>,
  color,
});

function App() {
  return (
    <Grid container justify="center">
        <Field color={colors.BOARD_COLORS.GREEN}
               type={fieldTypes.PROPERTY}
               title="ULICA OVA I ONA"
               price="200K"
               players={[
                 player("Player1", colors.PLAYER_COLORS.BLUE),
                 player("Player2", colors.PLAYER_COLORS.BLUE),
                 player("Player3", colors.PLAYER_COLORS.BLUE),
                 player("Player4", colors.PLAYER_COLORS.BLUE),
               ]}/>
      <Field type={fieldTypes.CHANCE}
             title="ULICA OVA I ONA"
             players={[
               player("Player1", colors.PLAYER_COLORS.GREEN),
               player("Player2", colors.PLAYER_COLORS.GREEN),
               player("Player3", colors.PLAYER_COLORS.GREEN),
               player("Player4", colors.PLAYER_COLORS.GREEN),
             ]}/>
      <Field type={fieldTypes.COMMUNITY_CHEST}
             title="ULICA OVA I ONA"
             players={[
               player("Player2", colors.PLAYER_COLORS.RED),
               player("Player1", colors.PLAYER_COLORS.RED),
               player("Player3", colors.PLAYER_COLORS.RED),
               player("Player4", colors.PLAYER_COLORS.RED),
             ]}/>
    </Grid>
  );
}

export default App;
