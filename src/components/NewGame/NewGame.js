import React, {useContext, useState} from "react";
import {useHistory} from "react-router-dom";

import _ from "lodash";
import {
  Button,
  Grid,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from "@material-ui/core";


import {GameContext} from "../../App";
import playerColors from "../../constants/playerColor";
import playerIcons from "../../constants/playerIcon";
import playerNames from "../../constants/playerName";

import "./NewGame.css"
import {getNewGamePlayers} from "../../util/gameUtil";
import destination from "../../constants/destination";
import properties from "../../constants/properties";

const player = () => ({
  name: "",
  color: "",
});


export default function NewGame() {
  const [newPlayer, setNewPlayer] = useState(player());
  const [players, setPlayers] = useState([]);
  const disableAddNewPlayer = newPlayer.name === "" || newPlayer.color === "";
  const gameContext = useContext(GameContext);
  const history = useHistory();

  const names = [];
  const colors = [];

  _.mapKeys(playerNames, (value, key) => {
    names.push(value);
  });

  _.mapKeys(playerColors, (value, key) => {
    colors.push(value);
  });

  const onPlayerNameChange = (e) => {
    const value = _.get(e, "target.value", "");
    setNewPlayer({
      ...newPlayer,
      name: value,
    });
  };

  const onPlayerColorChange = (e) => {
    const value = _.get(e, "target.value", "");
    setNewPlayer({
      ...newPlayer,
      color: value,
    });
  };

  const onAdd = () => {
    setPlayers([...players, newPlayer]);
    setNewPlayer(player());
  };

  const onNewGame = () => {
    const {game, setGame} = gameContext;

    setGame({
      ...game,
      fields: {
        ...game.fields,
        [properties.START.NAME]: {
          ...game.fields[properties.START.NAME],
          players: getNewGamePlayers(players).map(p => p.index),
        }
      },
      players: getNewGamePlayers(players),
    });

    history.push(destination.CURRENT_GAME);
  };

  return (
    <Grid container alignContent="space-between" spacing={2} className="NewGame">
      <Grid item xs={12}>
        <Typography className="title" variant="h3">
          New game
        </Typography>
      </Grid>
      <Grid item xs={12} container spacing={3}>
        <Grid item xs={12} container justify="flex-start">
          <Typography className="title" variant="h5">
            New player
          </Typography>
        </Grid>
        <Grid item xs={4} container>
          <TextField label="Player name"
                     required
                     variant="outlined"
                     select
                     fullWidth
                     value={newPlayer.name}
                     onChange={onPlayerNameChange}>
            {names.map(name => <MenuItem value={name} key={name}>{name}</MenuItem>)}
          </TextField>
        </Grid>
        <Grid item xs={4} container>
          <TextField label="Player color"
                     required
                     variant="outlined"
                     select
                     fullWidth
                     value={newPlayer.color}
                     onChange={onPlayerColorChange}>
            {colors.map(color => <MenuItem value={color} key={color}>{color}</MenuItem>)}
          </TextField>
        </Grid>
        <Grid item xs={4} container>
          <Button onClick={onAdd} color="primary" variant="contained" disabled={disableAddNewPlayer}>{"Add"}</Button>
        </Grid>
      </Grid>
      <Grid item xs={12} container justify="flex-start">
        <Typography className="title" variant="h5">
          Players
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Player icon</TableCell>
                <TableCell align="left">Player name</TableCell>
                <TableCell align="left">Player color</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {players.map((addedPlayer) => (
                <TableRow key={`${addedPlayer.name}-${addedPlayer.color}`}>
                  <TableCell align="center">
                    <img className="playerIcon" alt={addedPlayer.name} src={playerIcons[addedPlayer.name]}
                         style={{borderColor: addedPlayer.color}}/>
                  </TableCell>
                  <TableCell align="left">{addedPlayer.name}</TableCell>
                  <TableCell align="left">{addedPlayer.color}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} container justify="center">
        <Button onClick={onNewGame} color="primary" variant="contained" disabled={players.length < 2}>Start new
          Game</Button>
      </Grid>
    </Grid>
  );
}